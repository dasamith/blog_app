import React, { useState } from 'react'
import axios from 'axios'




function LoginForm() {
    const [userInfo, setUserInfo] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name)
        console.log(value)
        const userData = { ...userInfo }
        userData[name] = value

        setUserInfo(userData)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(userInfo)
        axios.post("/api/login", userInfo).then(function (res) {
            console.log(res)
        })
    }

    return (
        <div>
            <form>
                <label>UserName</label>
                <input name="username" placeholder="username" onChange={handleChange}></input>
                <label>password</label>
                <input name="password" placeholder="password" onChange={handleChange}></input>
                <button id="login" onClick={handleLogin}>Login</button>
            </form>

        </div>
    )
}

export default LoginForm