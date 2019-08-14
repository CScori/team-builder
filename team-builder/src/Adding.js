import React, { useState } from 'react';
import './App.css';

function Adding() {
    const [user, setUser] = useState({
        username: "",
        date: "",
        email: "",
        password: "",
    })

    const changeHandler = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const submitForm = event => {
        event.preventDefault();
    }
    return (
        <div className="Adding">
            <form onSubmit={submitForm}>
                <label htmlFor="username" hidden>Username</label>
                <input type="text" name="username" placeholder="Enter Username" value={user.username} onChange={(event) => {
                    setUser({ ...user, username: event.target.name })
                }} />

                <label htmlFor="birthday" hidden>Birthday</label>
                <input type="date" name="birthday" placeholder="Enter Your Birthday" />

                <label htmlFor="email" hidden>Email</label>
                <input type="email" placeholder="Enter Email" name="email" />

                <label htmlFor="password" hidden>Password</label>
                <input type="password" placeholder="Enter Password" name="password" />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Adding;
