import React from 'react';
import { Route, Navigate } from 'react-router-dom';
//import GameComponent from './gameComponent.jsx';
//import axios from 'axios';


const PrivateRoute = ({ component: Component, redirectTo, isAuth, path, ...props }) => {
    //isAuth = false;
	/*axios.post(`http://localhost:3000/online`,{withCredentials: true})
      .then(res => {
        console.log(res);
       
	   if (res) {
		   isAuth = true;
	   } else {
		   isAuth = false;
	   }
	   
	   
		if(!isAuth) {
			return <Navigate to={redirectTo} />;
		}
		return <Route path={path} element={<Component />} />
		
      });
	  	if(!isAuth) {
			return <Navigate to={redirectTo} />;
		}*/
		return <Route path={path} element={<Component />} />
		
		
	  
};

export default PrivateRoute;