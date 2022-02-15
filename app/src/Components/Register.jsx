import React from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { useState } from 'react';







export default function Register() {

    const history = useHistory()
    const [regdata, setregdata] = useState();

    const handleChange = (e) => {
        setregdata({
            ...regdata,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)

        const url = `http://127.0.0.1:8000/api/user/register/`;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: regdata.name,
                email: regdata.email,
                password: regdata.password,
            }),
        }).then((response) => {
            // console.log(regdata)
            history.push("/login")

        });


    };
    return (
        <>
            <div style={{ backgroundColor: '' }} id='regiCont' className='regiCont w-75 h-75 my-3 mx-auto container border border-dark rounded'>
                <form className='mx-2'>
                    <hr />
                    <h2 className='text-center'>Register Your Self in Our App :)</h2>
                    <hr />
                    <div className="mb-2 ">
                        <label className="form-label"><b>Name</b></label>
                        <input type="text" onChange={handleChange} name='name' className="form-control" id="name" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label"><b>Email address</b></label>
                        <input type="email" onChange={handleChange} name='email' className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"><b>Password</b></label>
                        <input type="password" onChange={handleChange} name='password' className="form-control" id="password" />
                    </div>
                    <div className='text-center mb-3 '>
                        <button type="submit" id='login' onClick={handleSubmit} className="btn btn btn-outline-dark btl-lg">Submit</button><br />
                        <Link className='text-dark text-center' to='/login'>Already have account?Log in</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

