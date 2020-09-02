import React, {Component} from 'react';
//import Component from 'react-dom';
import './../../gameComponent.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Countdown }  from './timer.jsx';

import axios from "axios";

library.add(faLock);


class Airport extends Component{
    constructor(props) {
        super(props);
    this.state = {
		color: "red",
		message: '',
		AirportOptions : [],
		airportDetails : {username: ''},
		message : '',
		showMessage : false,
		waitTimer : 0,
		totime : 0,
		now : 0,
		classes : 'totalchaos',
	}
  }
  
  
  
  componentWillMount() {
	  console.log("props:",this.props);
	  this.LoadAirport();		
	  this.setState({totime: this.props.totime});

  }

	LoadAirport() {
	 axios.get(`http://localhost:3000/airport`,{withCredentials: true})
      .then(res => {
		  console.log("loading airportdata response");
        console.log(res);
        this.setState({AirportOptions : res.data.locations});
	  });
	}


  PerformFlight(airId) {
	  
	 axios.post(`http://localhost:3000/airport`,{ travelid : airId},{withCredentials: true})
      .then(res => {
		  var detailsResponse = res.data;
		  console.log("perform airport data",detailsResponse);
		  this.setState({totime: detailsResponse.time});
		  this.setState({message: detailsResponse.message});
		  this.setState({showMessage: true});
		  this.setState({classes: (detailsResponse.type ? 'success' : 'danger')});
		this.props.loadtimers();
		this.LoadAirport();
      })
  }

render() {

    return (
	    <React.Fragment>
	
<div className="row">
  <div className="alert alert-success">Det er nå happy hour med x%  ventetid på flyplass!</div>
  <div className="box col-5 nopad">
    <div className="box_header">Airport</div>

    <div className="content">
      <p>Denne ruten eies av { this.state.airportDetails.username }</p>

	{
			this.state.showMessage && <div className={'alert alert-' + this.state.classes}>{this.state.message}</div>
		}


      <table className="table table-striped">
			<thead>
			
        <tr>
          <th></th>
          <th>Location</th>
          <th>Price</th>
        </tr>
			</thead>
			
			<tbody>
			{
			  this.state.AirportOptions.map((location, index) => {
				return (
			<tr>
          <td width="30">
            
          </td>
          <td>{ location.name }</td>
          <td>{ location.price}</td>
        </tr>
		
			)})
			}
			</tbody>
			
			


      </table>

      <button className="btn col-11"  onClick={() => {this.PerformFlight(1)}}>Travel</button>

    </div>

  </div>
</div>

    </React.Fragment>
	);
  }
}


export default Airport;
