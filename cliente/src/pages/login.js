import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import LoginPass from '../components/auth/LoginPass'

const Login = () => {
    return (
        <div className="auth_page">
            <div className="auth_box">
                <h3 className="text-uppercase text-center mb-4">Login</h3>
                <LoginPass />
                <small className="row my-2 text-primary" style={{curso: 'pointer'}} >
                    <Link to="/forgot_password" className="col-6">Forgot password?</Link>
                </small>

                <p>
                    You dont have an account
                    <Link to={`/register`} style={{color: 'crimson'}} >{` Register Now`}</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
