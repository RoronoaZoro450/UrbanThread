import React,{useState} from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="login-page-container">
    <div className="loginsignup">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <div className="loginsignup-fields">
            {!isLogin && <input type="text" placeholder='Your Name' />}
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        {isLogin ? (
            <p className="loginsignup-login">
                Don't have an account? <span onClick={() => setIsLogin(false)}>Sign up here</span>
            </p>
        ) : (
            <p className="loginsignup-login">
                Already have an account? <span onClick={() => setIsLogin(true)}>Login here</span>
            </p>
        )}
        {!isLogin && (
            <div className="loginsignup-agree">
                <input type="checkbox" name='' id='' />
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
        )}
    </div>
</div>
  )
}

export default LoginSignup