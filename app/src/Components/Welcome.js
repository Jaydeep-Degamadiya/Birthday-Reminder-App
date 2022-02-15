import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom';

import bg from '../img/bg.jpg'


export default function Welcome() {
    const styles = {
        position: 'relative',
        top: '200px',
        right: '150px',
        float: 'right',
        color: '#f0f6ff'
    }

    const { user } = useContext(AuthContext)

    return (
        <div style={{
            backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '90vh'
        }}>
            <div >
                <div style={styles} id="textWelcome">
                    <h3 style={{ color: 'red' }}>Never miss Your loved ones </h3>
                    <h1 > Birthday</h1>
                    {user ? <Link id='welcomebtn' to='/addbirthday' className='btn btn-outline-light'> Get Started</Link> : <Link id='welcomebtn' to='/register' className='btn btn-outline-light'> Join us</Link>}
                </div>
            </div>
        </div >
    )
}
