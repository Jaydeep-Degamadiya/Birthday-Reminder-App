import React from 'react'

export default function BirthdayData() {

    const handledelet = (id) => {
        const apiUrl = `http://127.0.0.1:8000/birthdayapi/list/${id}`
        fetch(apiUrl, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => {
            this.componentDidMount()
        });
    }
    return (
        <div>
            <h2 className='text-center my-3'>Upcoming Birthdays</h2>
            {this.state.loading && <Spinner />}
            {!this.state.loading && this.state.birthday.map((bday) => {

                return <div className="mt-2  container card w-50" key={bday.email} style={{ padding: '0' }}>
                    <ul className="list-group list-group-flush">

                        <li style={{ backgroundColor: '#B2C4DD' }} className="list-group-item">{bday.name}</li>
                        <li className="list-group-item">{bday.email}  {bday.id}    {/* <button className='btn btn-sm  ' style={{ float: 'right', backgroundColor: '#B2C4DD' }}>Wish</button>*/}</li>
                        <li className="list-group-item">{bday.birthdate}<button onClick={() => handledelet(bday.id)} className="btn btn-danger btn-sm " style={{ float: 'right' }} >Delet</button> <Link className="btn btn-primary btn-sm mx-2" to={{ pathname: "/editbirthday", state: bday }} style={{ float: 'right' }} to='/editbirthday'>Edit</Link> </li><br />

                    </ul>

                </div>
            })
            }
        </div>
    )
}


import React, { Component } from 'react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    birthday = []
    constructor() {
        super();
        this.state = {
            birthday: this.birthday,
            loading: false,
        }
    }
    async componentDidMount() {
        const apiUrl = 'http://127.0.0.1:8000/birthdayapi/list'
        let data = await fetch(apiUrl)
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({ birthday: parsedData })
    }

    handledelet = (id) => {
        const apiUrl = `http://127.0.0.1:8000/birthdayapi/list/${id}`
        fetch(apiUrl, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => {
            this.componentDidMount()
        });
    }
    render() {
        return <div>
            <h2 className='text-center my-3'>Upcoming Birthdays</h2>
            {this.state.loading && <Spinner />}
            {!this.state.loading && this.state.birthday.map((bday) => {

                return <div className="mt-2  container card w-50" key={bday.email} style={{ padding: '0' }}>
                    <ul className="list-group list-group-flush">

                        <li style={{ backgroundColor: '#B2C4DD' }} className="list-group-item">{bday.name}</li>
                        <li className="list-group-item">{bday.email}  {bday.id}    {/* <button className='btn btn-sm  ' style={{ float: 'right', backgroundColor: '#B2C4DD' }}>Wish</button>*/}</li>
                        <li className="list-group-item">{bday.birthdate}<button onClick={() => this.handledelet(bday.id)} className="btn btn-danger btn-sm " style={{ float: 'right' }} >Delet</button> <Link className="btn btn-primary btn-sm mx-2" to={{ pathname: "/editbirthday", state: bday }} style={{ float: 'right' }} to='/editbirthday'>Edit</Link> </li><br />

                    </ul>

                </div>
            })
            }
        </div>;
    }
}


