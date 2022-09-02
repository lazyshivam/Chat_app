import React from 'react'

function LoginPage(props) {
	
  return (
   <>
   <div className="container">
	<div className="screen">
		<div className="screen__content">
			<div className="login" >
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" name="email"  className="login__input" placeholder="User name / Email" onChange={(event)=>{
						props.setUsername(event.target.value)
					}}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password"name="password"  className="login__input" placeholder="Password" onChange={(event)=>{
						props.setPassword(event.target.value)
					}}/>
				</div>
				<button className="button login__submit" type="submit" onClick={props.joinRoom}>
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</div>
			<div className="social-login">
				<h3>log in via</h3>
				<div className="social-icons">
					<a href="/" className="social-login__icon fab fa-instagram"></a>
					<a href="/" className="social-login__icon fab fa-facebook"></a>
					<a href="/" className="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
   </>
  )
}

export default LoginPage
