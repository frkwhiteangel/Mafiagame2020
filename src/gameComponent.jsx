import React, {Component} from 'react';
//import Component from 'react-dom';
import SideBarRight from './components/game/sideBarRight.jsx';
import SideBarLeft from './components/game/sideBarLeft.jsx';
import Crime from './components/game/crime.jsx';
import Airport from './components/game/airport.jsx';
import Garage from './components/game/garage.jsx';
import Car_theft from './components/game/car_theft.jsx';

import './gameComponent.css';
import { Routes, Route } from 'react-router-dom';
//import {  Route, Link } from 'react-router-dom';
import axios from "axios";
import NumberFormat from 'react-number-format';


class GameComponent extends Component{
 constructor() {
    super();
    this.state = {
		timed: 90,
		user: {username: 'testmega'},
		rankbar: {percent:0},
		time : 0,
		clock: 0,
		timers : {crime:0,car_theft:0}
	}
	
  }
  
  
    

	

	

render() {
    return (
	<div className="main">
	<div className="sidebar left">
				<SideBarLeft/>

	</div>
	<div className="middleContentHolder">
	<Routes>

     <Route path="/" component={<Crime time={this.state.time} />} />
    <Route path="/crime" time={this.state.time} component={<Crime  />} />
    <Route path="/cartheft" time={this.state.time} component={<Car_theft />} />
    <Route path="/airport" time={this.state.time} component={<Airport />} />
     <Route path="/garage" component={<Garage  path="/garage"/>} />
	</Routes>
			Something will load here
	</div>
	<div className="sidebar right">
		<SideBarRight element={<SideBarRight user={this.state.user} rankbar={this.state.rankbar} timed={this.state.timed} />} />
		</div>
	</div>
	);
	
  }


}



export default GameComponent;
