import React, {Component} from 'react';
//import Component from 'react-dom';
import './../../gameComponent.css';
import {
  Link
} from "react-router-dom";

class SideBarLeft extends Component{
 constructor() {
    super();
    this.state = {color: "red"};
  }
  

		  
		  

render() {
    return (
		<div className="content_sidebar">
			<div className="header"><span>Computerbar1</span></div>
	
		<ul>
    
          <li>
            <Link to="/crime">Bank</Link>
          </li>
          <li>
            <Link to="/crime">Kriminalitet</Link>
          </li>
		       <li>
            <Link to="/login">Login component</Link>
          </li>
		       <li>
            <Link to="/crime">Profil</Link>
          </li>
		  
		  	       <li>
            <Link to="/garage">Garasje/lager</Link>
          </li>
		  
		  	       <li>
            <Link to="/cartheft">Biltyveri</Link>
          </li>
		  
		  	       <li>
            <Link to="/crime">Blackjack (not done)</Link>
          </li>
		  
		      <li>
            <Link to="/airport">Flyplass</Link>
          </li>
        </ul>
		
		</div>
	);
  }
	
}


export default SideBarLeft;
