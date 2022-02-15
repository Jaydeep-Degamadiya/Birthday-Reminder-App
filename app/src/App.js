import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext';
import AuthContext from './context/AuthContext';
import React, { useState, useContext } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Addbirthday from './Components/Addbirthday';
import Editbirthday from './Components/Editbirthday';
import Logout from './Components/Logout';
import Welcome from './Components/Welcome';


function App() {
  // let { user } = useContext(AuthContext)
  return (
    <>
      <Router>

        <AuthProvider>
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/home">
              <Home />
            </PrivateRoute>
            <Route exact path="/">
              <Welcome />
            </Route>
            <PrivateRoute exact path="/editbirthday">
              <Editbirthday />
            </PrivateRoute>

            <PrivateRoute exact path="/addbirthday">
              <Addbirthday />
            </PrivateRoute>
            {/* {user ? */}
            <Route exact path="/login">
              <Login />
            </Route>x``

            <Route exact path="/register">
              <Register />
            </Route>


          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
