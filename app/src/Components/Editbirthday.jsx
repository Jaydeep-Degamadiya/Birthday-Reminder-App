import React, { useState, useContext } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext'


export default function Editbirthday() {

    const history = useHistory();
    const location = useLocation()
    const [state, setstate] = useState(location.state);

    let { user } = useContext(AuthContext)



    const [formdata, setformdata] = useState(state);
    const handleChange = (e) => {

        setformdata({
            ...formdata,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        const url = `http://127.0.0.1:8000/birthdayapi/list/${user.user_id}/${state.id}`;

        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formdata.name,
                birthdate: formdata.birthdate,
                email: formdata.email,
                user_id: user.user_id
            }),
        }).then((response) => {
            console.log(formdata)
            history.push("/home")
            // if (true) {
            //     <Redirect to="/home" />
            // }
        });
    }

    return (
        <>
            <>
                <div className=' w-50 h-75 my-3 mx-auto container border border-dark'>
                    {/* {user && <p>hello{user.user_id}</p>} */}
                    <form className='mx-2'>
                        <hr />
                        <h2 className='text-center'>Edit Birthday</h2>

                        <hr />
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label"><b>Name</b></label>
                            <input type="text" name='name' onChange={handleChange} value={formdata.name} className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3 ">
                            <label htmlFor="exampleInputEmail1" className="form-label"><b>Email address</b></label>
                            <input type="text" name='email' onChange={handleChange} value={formdata.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="exampleInputEmail1" className="form-label"><b>Birthdate</b></label>
                            <input type="date" name='birthdate' onChange={handleChange} value={formdata.birthdate} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>


                        <div className='text-center mb-3 '>
                            <button type="submit" id='login' onClick={handleSubmit} className="btn btn btn-outline-dark btn-lg">Update</button><br />
                        </div>

                    </form>
                </div>
            </>
        </>
    );
}
