import React, { useState } from 'react'
import axios from 'axios'




function RegisterForm() {
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
        axios.post("/api/register", userInfo).then(function (res) {
            console.log(res)
        })
    }

    return (
        <div>
            <form>
                <label>UserName</label>
                <input name="username" placeholder="userName" onChange={handleChange}></input>
                <label>password</label>
                <input name="password" placeholder="password" onChange={handleChange}></input>
                <button id="login" onClick={handleLogin}>Register</button>
            </form>

        </div>
    )
}

export default RegisterForm