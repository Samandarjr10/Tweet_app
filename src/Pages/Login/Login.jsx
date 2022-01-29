import React from "react";
import "./Login.scss"

import { Context } from "../../Context/Authenticated"

function Login() {
    const { setToken } = React.useContext(Context);

    const handleSubmit = evt => {
        evt.preventDefault();

        const {user_email, user_password} = evt.target.elements;

        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(
                {
                    email: user_email.value.trim(),
                    password: user_password.value.trim()
                })
        }).then(response => response.json())
        .then(data => setToken(data?.token))
    }

    return <div className="pt-3 ps-3">
        <form className="text-start" method="post" onSubmit={handleSubmit}>
            <input className="form-control w-50 mb-2" type="email" name="user_email" defaultValue="eve.holt@reqres.in"/>
            <input className="form-control w-50 mb-3" type="password" name="user_password" defaultValue="cityslicka"/>
            <button className="btn btn-outline-primary">Log In</button>
        </form>
    </div>
}

export default Login