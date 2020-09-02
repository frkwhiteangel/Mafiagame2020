import React from 'react';
import './App.css';
import GameComponent from './gameComponent.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './components/login/login.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { timer } from "./components/game/timer.jsx";

library.add(faUser);


function App() {

  return (

  <Router>
	<Routes>
	   <Route path="/login" element={<Login />} />
	   <PrivateRoute
		  isAuth={true}
		  // Here's the trick
		  path="/*"
		  component={GameComponent}
		  redirectTo="/login"
	   />
	</Routes>
  </Router>
  );
}
export default App;
