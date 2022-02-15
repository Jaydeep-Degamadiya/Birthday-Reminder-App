import React, { Component, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


export default function Addbirthday() {
    const { user } = useContext(AuthContext)
    console.log(user.user_id)

    const [bdaydata, setbdaydata] = useState();
    const history = useHistory();
    const handleChange = (e) => {
        setbdaydata({
            ...bdaydata,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {



        const url = `http://127.0.0.1:8000/birthdayapi/list/`;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: bdaydata.name,
                birthdate: bdaydata.birthdate,
                email: bdaydata.email,
                user_id: user.user_id
            }),
        }).then((response) => {
            console.log(bdaydata)
            history.push("/home")

        });


    };
    return (
        <>
            <div className=' w-50 h-75 my-3 mx-auto container border border-dark'>
                <form className='mx-2'>
                    <hr />
                    <h2 className='text-center'>Add Birthday</h2>
                    <hr />
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label"><b>Name</b></label>
                        <input type="text" name='name' onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="exampleInputEmail1" className="form-label"><b>Email address</b></label>
                        <input type="text" name='email' onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="exampleInputEmail1" className="form-label"><b>Birthdate</b></label>
                        <input type="date" name='birthdate' onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className='text-center mb-3 '>
                        <button type="submit" id='login' onClick={handleSubmit} className="btn btn btn-outline-dark btn-lg">Add To The List</button><br />
                    </div>

                </form>
            </div>
        </>
    );
}

