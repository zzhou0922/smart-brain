(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),i=n(11),c=n.n(i),o=(n(22),n(4)),r=n(5),l=n(7),d=n(6),h=n(12),u=n(1),b=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(u.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(u.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer",children:" Sign Out "})}):Object(u.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(u.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:" Sign In "}),Object(u.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:" Register "})]})},m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://calm-thicket-04350.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signInPassword:""},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(u.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(u.jsx)("main",{className:"pa4 black-80",children:Object(u.jsxs)("div",{className:"measure",children:[Object(u.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(u.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(u.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(u.jsxs)("div",{className:"mv3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(u.jsx)("div",{className:"lh-copy mt3",children:Object(u.jsx)("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(s.a.Component),j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this)).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("https://calm-thicket-04350.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(r.a)(n,[{key:"render",value:function(){this.props.onRouteChange;return Object(u.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(u.jsx)("main",{className:"pa4 black-80",children:Object(u.jsxs)("div",{className:"measure",children:[Object(u.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(u.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Name"}),Object(u.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})]}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(u.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(u.jsxs)("div",{className:"mv3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})}),Object(u.jsx)("div",{className:"lh-copy mt3"})]})})})}}]),n}(s.a.Component),p=n(13),g=(n(24),function(){return Object(u.jsx)("div",{className:"ma4 mt0",children:Object(u.jsx)(p.a,{className:"Tilt br2 shadow-2",option:{max:55},style:{height:150,width:150},children:Object(u.jsx)("div",{className:"Tilt-inner pa3",children:Object(u.jsx)("img",{className:"pa2",src:"data:image/png;base64,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",alt:"logo"})})})})}),O=(n(25),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"f3",children:"This Magic Brain will detect faces in your pictures. Give it a try."}),Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(u.jsx)("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),Object(u.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),f=(n(26),function(e){var t=e.imageUrl,n=e.box;return Object(u.jsx)("div",{className:"center ma",children:Object(u.jsxs)("div",{className:"absolute mt2",children:[Object(u.jsx)("img",{id:"inputimage",src:t,alt:"",width:"500px",height:"auto"}),Object(u.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})}),v=function(e){var t=e.name,n=e.entries;return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"white f3",children:"".concat(t,", your current rank is...")}),Object(u.jsx)("div",{className:"white f1",children:n})]})},x=(n(27),{input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}}),w=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*s,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://calm-thicket-04350.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://calm-thicket-04350.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(x):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=x,e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,a=e.route,s=e.box;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(h.a,{color:"#D3D3D3",num:150,type:"cobweb",bg:!0}),Object(u.jsx)(b,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===a?Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{}),Object(u.jsx)(v,{name:this.state.user.name,entries:this.state.user.entries}),Object(u.jsx)(O,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(u.jsx)(f,{box:s,imageUrl:n})]}):"signin"===a?Object(u.jsx)(m,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(u.jsx)(j,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(a.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};n(28);c.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(w,{})})),C()}},[[29,1,2]]]);
//# sourceMappingURL=main.5252df9a.chunk.js.map