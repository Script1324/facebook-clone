import React from 'react'
import "../Styles/Login.css"
import fblogo from "../Image/fblogo.png" 
import { UseProvider } from './StateProvider/StateProvider'

function Login() {
        const{SignIn} = UseProvider()

  return (
    
    <div className='login-container'>
            <div className='login-content'>
                    <div className='login-tagline'>
                            <img src={fblogo} alt="facebook logo"/>
                    </div>

                    <div className='login-button'>
                            <button onClick={SignIn}>Log In with Facebook</button>
                    </div>

                        
            </div>
    </div>
  )
}

export default Login