import React from 'react';
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopUp from "../PopUp/PopUp"

const Signin = (props) => {
	const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	const userRef = useRef();
	const errRef = useRef();

	const[signInError, setSignInError] = useState(false);

	const[signInEmail, setSignInEmail] = useState('');
	const[validSignInEmail, setValidSignInEmail] = useState(false);
	const[signInEmailFocus, setSignInEmailFocus] = useState(false);
	const[signInPassword, setSignInPassword] = useState('');

	const[errMsg, setErrMsg] = useState('');

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		const result = EMAIL_REGEX.test(signInEmail);
		setValidSignInEmail(result);
	}, [signInEmail])

	useEffect(() => {
		setErrMsg('');
	},[signInEmail, signInPassword]);

	const onSubmitSignIn = () => {
		fetch('https://calm-thicket-04350.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: signInEmail,
				password: signInPassword
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
    	setSignInError(!signInError);
    	setSignInEmail('');
    	setSignInPassword('');
    	setValidSignInEmail(false);
  	}

	return (
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main className="pa4 black-80">
				<div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
				        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
				     	
				      	<div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email">
					        	Email
					        	<span className={validSignInEmail ? "valid": "hide"}>
					        		<FontAwesomeIcon icon={faCheck} />
					        	</span>
					        	<span className={validSignInEmail || !signInEmail ? "hide" : "valid"}>
					        		<FontAwesomeIcon icon={faTimes} style={{color: "red"}}/>
					        	</span>
					        </label>
					        <input 
					        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="email" 
					        	id="email" 
					        	ref={userRef} 
					        	autoComplete="off"
					        	onChange={(e) => setSignInEmail(e.target.value)}
					        	value={signInEmail}
					        	required
					        	aria-invalid={validSignInEmail ? "false": "true"}
					        	aria-describedby="emailnote"
					        	onFocus={() => setSignInEmailFocus(true)}
					        	onBlur={() => setSignInEmailFocus(false)}
					        />
					        <p id="emailnote" className={signInEmailFocus && signInEmail && !validSignInEmail ? "instructions" : "offscreen"}>
					        	<FontAwesomeIcon icon={faInfoCircle} />
					        	Invalid Email format.
					        </p>
				        </div>

				        <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">
					        	Password
					        </label>
					        <input 
					        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="password" 
					        	id="password" 
					        	onChange={(e) => setSignInPassword(e.target.value)}
					        	value={signInPassword}
					        	required
					        />
				        </div>

				    </fieldset>
				    <div className="">
				        <button 
				      		onClick={onSubmitSignIn}
				      		className="b ph4 pv2 input-reset ba grow pointer f6 dib" 
				      		disabled={!validSignInEmail ? true: false}>
				      		SignIn
				      	</button>
				    </div>
				    <div className="lh-copy mt3">
				      <p onClick={() => props.onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
				    </div>
				    <div>
						{signInError ? <PopUp toggle={togglePop} comefrom={"signin"}/> : null}
				   </div>
				  </div>
				</main>
			</article>
	); 
}

export default Signin;

















// class Signin extends React.Component {
// 	constructor(props) {
// 		super();
// 		this.state = {
// 			signInEmail: '',
// 			signInPassword: ''
// 		}
// 	}

// 	onEmailChange = (event) => {
// 		this.setState({signInEmail: event.target.value});
// 	}

// 	onPasswordChange = (event) => {
// 		this.setState({signInPassword: event.target.value});
// 	}

// 	onSubmitSignIn = () => {
// 		fetch('https://calm-thicket-04350.herokuapp.com/signin', {
// 			method: 'post',
// 			headers: {'Content-Type': 'application/json'},
// 			body: JSON.stringify({
// 				email: this.state.signInEmail,
// 				password: this.state.signInPassword
// 			}) 
// 		})
// 		.then(response => response.json())
// 		.then(user => {
// 			if(user.id) {
// 				this.props.loadUser(user);
// 				this.props.onRouteChange('home');
// 			}
// 		})
// 	}

// 	render() {
// 		const { onRouteChange } = this.props;
// 		return (
// 			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
// 				<main className="pa4 black-80">
// 				  <div className="measure">
// 				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
// 				      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
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
// 				      	value="Sign in" 
// 				      />
// 				    </div>
// 				    <div className="lh-copy mt3">
// 				      <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
// 				    </div>
// 				  </div>
// 				</main>
// 			</article>
// 		);
// 	}
	
// }

// export default Signin;