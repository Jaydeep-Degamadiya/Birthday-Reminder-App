import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Login = () => {
    let { loginUser } = useContext(AuthContext)
    return (
        <>

            <div className=' w-50 h-75 my-3 mx-auto container border border-dark'>
                <form onSubmit={loginUser} className='mx-2'>
                    <hr />
                    <h2 className='text-center'>Login</h2>
                    <hr />

                    <div className="mb-3 ">
                        <label htmlFor="exampleInputEmail1" className="form-label"><b>Email address</b></label>
                        <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label"><b>Password</b></label>
                        <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className='text-center mb-3 '>
                        <button type="submit" id='login' className="btn btn btn-outline-dark btn-lg">Login</button><br />
                        <Link className='text-dark text-center' to='/register'>Didn't Have Account?Register</Link>
                    </div>

                </form>
            </div>

        </>
    )

}
export default Login
