import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Register.css'
import PopUp from "../PopUp/PopUp"

const USER_REGEX = /^[a-z ,.'-]+$/i;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = (props) => {

	const userRef = useRef();
	const errRef = useRef();

	const[registerError, setRegisterError] = useState(false);

	const[user, setUser] = useState('');
	const[validName, setValidName] = useState(false);
	const[userFocus, setUserFocus] = useState(false);

	const[email, setEmail] = useState('');
	const[validEmail, setValidEmail] = useState(false);
	const[emailFocus, setEmailFocus] = useState(false);

	const[pwd, setPwd] = useState('');
	const[validPwd, setValidPwd] = useState(false);
	const[pwdFocus, setPwdFocus] = useState(false);

	const[matchPwd, setMatch] = useState('');
	const[validMatch, setValidMatch] = useState(false);
	const[matchFocus, setMatchFocus] = useState(false);

	const[errMsg, setErrMsg] = useState('');

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		const result = USER_REGEX.test(user);
		setValidName(result);
	}, [user]);

	useEffect(() => {
		const result = EMAIL_REGEX.test(email);
		setValidEmail(result);
	}, [email])

	useEffect(() => {
		const result = PWD_REGEX.test(pwd);
		setValidPwd(result);
		const match = pwd == matchPwd;
		setValidMatch(match);
	},[pwd, matchPwd]);

	useEffect(() => {
		setErrMsg('');
	},[user, email, pwd, matchPwd]);

	const onSubmitRegister = (e) => {
		e.preventDefault();
		const v1 = USER_REGEX.test(user);
		const v2 = EMAIL_REGEX.test(email);
		const v3 = PWD_REGEX.test(pwd);
		if(!v1 || !v2 || !v3) {
			setErrMsg("Invalid Entry");
			return;
		}
		fetch('https://calm-thicket-04350.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: email,
				password: pwd,
				name: user
			}) 
		})
		.then(response => {
			if(response.ok) {
				return response.json()
			} else {
				return response.text().then(text => { throw new Error(text) })
			}
		})
		.then(user => {
			if(user.id) {
				props.loadUser(user);
				props.onRouteChange('home');
			}
		})
		.catch(err => {
			togglePop();
		})	
	}

	const togglePop = () => {
    	setRegisterError(!registerError);
    	setEmail('');
    	setValidEmail(false);
  	}

	return (
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main className="pa4 black-80">
				<div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0"> 
				      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
				      <legend className="f1 fw6 ph0 mh0">Register</legend>				      
				      <div className="mt3">				      	
				        <label className="db fw6 lh-copy f6" htmlFor="username">
				        	Name
				        	<span className={validName ? "valid": "hide"}>
				        		<FontAwesomeIcon icon={faCheck} />
				        	</span>
				        	<span className={validName || !user ? "hide" : "valid"}>
				        		<FontAwesomeIcon icon={faTimes} style={{color: "red"}}/>
				        	</span>
				        </label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="text" 
				        	id="username"
				        	ref={userRef} 
				        	onChange={(e) => setUser(e.target.value)}
				        	required
				        	aria-invalid={validName ? "false": "true"}
				        	aria-describedby="uidnote"
				        	onFocus={() => setUserFocus(true)}
				        	onBlur={() => setUserFocus(false)}
				        />
				        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
				        	<FontAwesomeIcon icon={faInfoCircle} />
				        	Invalid character(s) in your name. 
				        </p>

				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email">
				        	Email
				        	<span className={validEmail ? "valid": "hide"}>
				        		<FontAwesomeIcon icon={faCheck} />
				        	</span>
				        	<span className={validEmail || !email ? "hide" : "valid"}>
				        		<FontAwesomeIcon icon={faTimes} style={{color: "red"}}/>
				        	</span>
				        </label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	id="email" 
				        	ref={userRef} 
				        	onChange={(e) => setEmail(e.target.value)}
				        	required
				        	aria-invalid={validEmail ? "false": "true"}
				        	aria-describedby="emailnote"
				        	onFocus={() => setEmailFocus(true)}
				        	onBlur={() => setEmailFocus(false)}
				        />
				        <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
				        	<FontAwesomeIcon icon={faInfoCircle} />
				        	Invalid Email format.
				        </p>
				      </div>

				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">
				        	Password
				        	<span className={validPwd ? "valid": "hide"}>
				        		<FontAwesomeIcon icon={faCheck} />
				        	</span>
				        	<span className={validPwd || !pwd ? "hide" : "valid"}>
				        		<FontAwesomeIcon icon={faTimes} style={{color: "red"}}/>
				        	</span>
				        </label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	id="password" 
				        	onChange={(e) => setPwd(e.target.value)}
				        	required
				        	aria-invalid={validPwd ? "false": "true"}
				        	aria-describedby="pwdnote"
				        	onFocus={() => setPwdFocus(true)}
				        	onBlur={() => setPwdFocus(false)}
				        />
				        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
				        	<FontAwesomeIcon icon={faInfoCircle} />
				        	8 to 24 characters. <br />
				        	Must include uppercase and <br />
				        	lowercase letters, a number <br />
				        	and a special character. <br />
				        	Allowed special characters: <br /> 
				        	<span aria-label="exclamation mark">!</span> 
				        	<span aria-label="at symbol"> @</span> <span aria-label="hashtag"> #</span>
				        	<span aria-label="dollar sign"> $</span> <span aria-label="percent">%</span>
				        </p>
				      </div>

				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="confirm_pwd">
				        	Confirm Password:
				        	<span className={validMatch && matchPwd? "valid": "hide"}>
				        		<FontAwesomeIcon icon={faCheck} />
				        	</span>
				        	<span className={validMatch || !matchPwd ? "hide" : "valid"}>
				        		<FontAwesomeIcon icon={faTimes} style={{color: "red"}}/>
				        	</span>
				        </label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	id="confirm_pwd" 
				        	onChange={(e) => setMatch(e.target.value)}
				        	required
				        	aria-invalid={validPwd ? "false": "true"}
				        	aria-describedby="confirmnote"
				        	onFocus={() => setMatchFocus(true)}
				        	onBlur={() => setMatchFocus(false)}
				        />
				        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
				        	<FontAwesomeIcon icon={faInfoCircle} />
				        	Must match with the first <br /> 
				        	password input field. 
				        </p>
				      </div>

				    </fieldset>
					<div className="pt4 pb3">
				     	{/*<input 
				       		className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				       		type="submit" 
				       		value="Register" 
				       		disabled={!validName || !validEmail || !validMatch ? true: false}
				      	/>*/}
				      	<button 
				      		onClick={onSubmitRegister}
				      		className="b ph4 pv2 input-reset ba grow pointer f6 dib" 
				      		disabled={!validName || !validEmail || !validMatch ? true: false}>
				      		Register
				      	</button>
				   </div>
				   <div>
				   		<p>Already registered?<br />
				   		<span className="line">
				   			<a href="#" onClick={() => props.onRouteChange('signin')}>Sign In</a>
				   		</span>
				   		</p>
				   </div>
				   <div className="lh-copy mt3">
				   </div>
				   <div>
						{registerError ? <PopUp toggle={togglePop} comefrom={"register"} /> : null}
				   </div>
				</div>
			</main>
		</article>
		
	);
	
};

export default Register;








// import React from 'react';

// class Register extends React.Component {
// 	constructor(props) {
// 		super();
// 		this.state = {
// 			email: '',
// 			password: '',
// 			name: ''
// 		}
// 	}

// 	onNameChange = (event) => {
// 		this.setState({name: event.target.value});
// 	}
// 	onEmailChange = (event) => {
// 		this.setState({email: event.target.value});
// 	}

// 	onPasswordChange = (event) => {
// 		this.setState({password: event.target.value});
// 	}

	// onSubmitSignIn = () => {
	// 	fetch('https://calm-thicket-04350.herokuapp.com/register', {
	// 		method: 'post',
	// 		headers: {'Content-Type': 'application/json'},
	// 		body: JSON.stringify({
	// 			email: this.state.email,
	// 			password: this.state.password,
	// 			name: this.state.name
	// 		}) 
	// 	})
	// 	.then(response => response.json())
	// 	.then(user => {
	// 		if(user.id) {
	// 			this.props.loadUser(user);
	// 			this.props.onRouteChange('home');
	// 		}
	// 	})	
	// }

// 	render() {
// 		const { onRouteChange } = this.props;
// 		return (
// 			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
// 				<main className="pa4 black-80">
// 				  <div className="measure">
// 				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
// 				      <legend className="f1 fw6 ph0 mh0">Register</legend>
// 				      <div className="mt3">
// 				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
// 				        <input 
// 				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
// 				        	type="text" 
// 				        	name="name"  
// 				        	id="name" 
// 				        	onChange={this.onNameChange}
// 				        />
				    
// 				      </div>
// 				      <div className="mt3">
// 				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
// 				        <input 
// 				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
// 				        	type="email"
// 				        	name="email-address"  
// 				        	id="email-address" 
// 				        	onChange={this.onEmailChange}
// 				        />
// 				      </div>
// 				      <div className="mv3">
// 				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
// 				        <input 
// 				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
// 				        	type="password" 
// 				        	name="password"  
// 				        	id="password" 
// 				        	onChange={this.onPasswordChange}
// 				        />
// 				      </div>
// 				    </fieldset>
// 				    <div className="">
// 				      <input 
// 				      	onClick={this.onSubmitSignIn}
// 				      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
// 				      	type="submit" 
// 				      	value="Register" 
// 				      />
// 				    </div>
// 				    <div className="lh-copy mt3">
// 				    </div>
// 				  </div>
// 				</main>
// 			</article>
// 			);
// 	}

// }

// export default Register;