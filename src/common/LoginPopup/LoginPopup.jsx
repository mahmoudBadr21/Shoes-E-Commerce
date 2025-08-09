import { useState } from 'react'
import './loginPopup.css'

const LoginPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState('Login')

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <i onClick={() => setShowLogin(false)} className='fas fa-times' />
        </div>

        <div className="login-popup-inputs">
          {currState === 'Login' ? <></> :
          <div>
            <input type="text" id='yourName' placeholder=' ' required />
            <label htmlFor="yourName">Your name</label>
          </div>
          }
          <div>
            <input type="email" id='yourEmail' placeholder=' ' required ></input>
            <label htmlFor="yourEmail">Your email</label>
          </div>
          <div>
            <input type="password" id='yourPassword' placeholder=' ' required />
            <label htmlFor="yourPassword">Your password</label>
          </div>
        </div>
        
        <button>
          {currState === 'Sing Up' ? "Create account" : "Login"}
        </button>

        <div className="login-popup-condtion">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === 'Login'
          ? <p>Create a new account? <span onClick={() => setCurrState("Sing Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }

      </form>
    </div>
  )
}

export default LoginPopup
