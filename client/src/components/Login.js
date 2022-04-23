import React, {useState} from 'react'
import { Link } from 'react-router-dom'

// Import Buttons
import GoogleButton from 'react-google-button'
import GitHubButton from 'react-github-login-button'


const loginMessageStyle = { 
    color : "red"
}

const Login = (props) => {
    const [loginMessage, setLoginMessage] = useState("")
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [passwordShown, setPasswordShown] = useState(false)

    function onLoginSubmit(event) {
        event.preventDefault()

        props.login({
            username,
            password
        })
        .then((loginMessage) => {
            if(loginMessage){
                //report to the user that there was a problem during login
                setLoginMessage(loginMessage)
            }
        })
    }

    function togglePassword() {
        setPasswordShown(!passwordShown)
    }

    return( 
        <div>
            <h3> If you logged in with google before just type your email username and "password" as the password</h3>
            <h2>Log In Form</h2>
            <form>
                <input required type="username" placeholder="Username" onChange={e => {setUserName(e.target.value)}}/>
                <input  required type={passwordShown ? "text" : "password"} placeholder="password" onChange={e => {setPassword(e.target.value)}}/>
                <button onClick={togglePassword}>Show Password</button>
                <Link className="btn" type="submit" to="/" onClick={onLoginSubmit}>Login</Link>
                <span className="span"style = {loginMessageStyle}>{loginMessage}</span>
            </form>
            <a href="/auth/google"><GoogleButton/></a>
            <a href="/auth/github"><GitHubButton/></a>
        </div>
    )
}

export default Login
