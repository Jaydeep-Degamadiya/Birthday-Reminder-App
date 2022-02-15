import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {
    // localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null

    const history = useHistory();

    const [user, setuser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    const [authTokens, setauthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [loading, setloading] = useState(true)

    let loginUser = async (e) => {
        e.preventDefault()

        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'email': e.target.email.value,
                'password': e.target.password.value,
            }),

        })
        let data = await response.json()
        if (response.status === 200) {

            setauthTokens(data)
            setuser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))

            history.push("/")

        }
        else {
            alert('No')
        }
    }

    let logoutUser = () => {
        setauthTokens(null)
        setuser(null)
        localStorage.removeItem('authTokens')
        history.push('/login')

    }

    let updateToken = async () => {
        console.log("update toekns")
        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'refresh': authTokens.refresh

            }),

        })
        let data = await response.json()
        console.log(data)
        if (data.status === 200) {
            console.log("log ok")
            setauthTokens(data)
            setuser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }
        else {
            console.log("log not ok")
            logoutUser()
        }
    }

    // useEffect(() => {
    //     let interval = setInterval(() => {
    //         if (authTokens) {
    //             updateToken()
    //         }
    //     }, 40000)

    //     return () => clearInterval(interval)

    // }, [authTokens, loading])

    let contextData = {
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,


    }
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}   