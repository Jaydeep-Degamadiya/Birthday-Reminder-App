import React, { useContext, useEffect, useState } from 'react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Home = () => {
    const { user } = useContext(AuthContext)

    const [birthday, setbirthday] = useState([])

    // const fetchdata = () => {
    //     const apiUrl = 'http://127.0.0.1:8000/birthdayapi/list'
    //     let data = fetch(apiUrl)
    //     let parsedData = data.json();
    //     setbirthday({ birthday: parsedData })
    // }

    const fetchdata = () => {
        fetch(`http://127.0.0.1:8000/birthdayapi/list/${user.user_id}`)
            .then((res) => res.json())
            .then((json) => {
                setbirthday(json)
            });
    };

    useEffect(() => {

        fetchdata();

    }, [])


    const handledelet = (id) => {
        const apiUrl = `http://127.0.0.1:8000/birthdayapi/list/${user.user_id}/${id}`
        fetch(apiUrl, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => {
            fetchdata();
        });
    }
    // const handlemail = (email) => {
    //     let body = "Hey,hope you are well wishing you many many return of the day"
    //     let subject = "Happy Birthday"
    //     window.open(`mailto:${email}?subject=${subject}&body=${body}`)
    // }


    return <div>
        <h2 className='text-center my-3'>Upcoming Birthdays</h2>

        {birthday.map((bday) => {

            return <div className="mt-2  container card w-50" key={bday.email} style={{ padding: '0' }}>
                <ul className="list-group list-group-flush">
                    <button className='btn btn-sm ' onClick={() => handlemail(bday.email)} style={{ float: 'right', backgroundColor: '#B2C4DD' }}>Wish</button>
                    <li style={{ backgroundColor: '#B2C4DD' }} className="list-group-item">{bday.name}</li>
                    <li className="list-group-item">{bday.email}     </li>
                    <li className="list-group-item">{bday.birthdate}<button onClick={() => handledelet(bday.id)} className="btn btn-danger btn-sm " style={{ float: 'right' }} >Delet</button> <Link className="btn btn-primary btn-sm mx-2" to={{ pathname: "/editbirthday", state: bday }} style={{ float: 'right' }}>Edit</Link> </li><br />

                </ul>

            </div>
        })
        }
    </div>;

}


export default Home