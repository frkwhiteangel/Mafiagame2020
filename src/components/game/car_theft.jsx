import React, {Component} from 'react';
//import Component from 'react-dom';
import './../../gameComponent.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Countdown }  from './timer.jsx';

import axios from "axios";

library.add(faLock);


class Crime extends Component{
    constructor(props) {
        super(props);
    this.state = {
		color: "red",
		carOptions : {1: {text: 'testomg', chance: 0},2: {text: 'testomg', chance: 0},3: {text: 'testomg', chance: 0}},
		HappyHourWait : {value:90},
		message : '',
		showMessage : false,
		waitTimer : 0,
		totime : new Date().getTime() + 30000,
		now : new Date().getTime(),
		classes : 'totalchaos',
		example: '<Countdown  timeTillDate={this.state.totime} />',
		loaded : false,
	}
  }
  
  
  
  componentWillMount() {
	  console.log("props:",this.props);
	  
	//  this.props.loadtimers;
	  this.LoadCar_theft();		
	  this.setState({totime: this.props.totime}, function() {
	  if (!this.state.loaded) {
		//  		this.props.loadtimers();
		  	  this.setState({loaded:true});
	  }
	  });
  }
		completionist = () => <span>You are good to go!</span>;

	LoadCar_theft() {
	 axios.get(`http://localhost:3000/garage/crime`,{withCredentials: true})
      .then(res => {
		  console.log("loading crime response");
        console.log(res);
        this.setState({carOptions : res.data});
	  });
	}


  PerformCarTheft(optionId) {
	  console.log("clicked car theft: ",optionId);
	 axios.post(`http://localhost:3000/garage/crime`,{ id : optionId },{withCredentials: true})
      .then(res => {
		  var detailsResponse = res.data;
		  console.log("perform car_theft data",detailsResponse);
		  this.setState({totime: detailsResponse.time});
		  this.setState({message: detailsResponse.message});
		  this.setState({showMessage: true});
		  this.setState({classes: (detailsResponse.type ? 'success' : 'danger')});
		this.props.loadtimers();
		this.LoadCar_theft();
      })
  }

render() {

    return (
	    <React.Fragment>
	
		
<div className="col-12 box nopad">
<div className="content">
	<div className="header"><span>Biltyveri </span></div>
		{
			this.state.showMessage && <div className={'alert alert-' + this.state.classes}>{this.state.message}</div>
		}
		
		{
						this.props.totime > this.props.time && !this.state.showmessage && this.state.loaded && 	<div className="alert alert-info"><Countdown words='til du kan gjøre nytt biltyveri ' timeTillDate={this.props.totime} /></div>
		}
		
		{ this.props.time >= this.props.totime && <table className="" style={{width:'80%'}}>
	<thead>
		<tr>
			<th>Tyveritype</th>
			<th>Ventetid</th>
			<th>Sjanse</th>
		</tr>
	</thead>
	<tbody>
		<tr onClick={() => {this.PerformCarTheft(1)}}>
			<td>{this.state.carOptions[1].text}</td>
			<td>1m 40sec</td>
			<td>{this.state.carOptions[1].chance / 10}%</td>
		</tr>
				<tr onClick={() => {this.PerformCarTheft(2)}}>
			<td>{this.state.carOptions[2].text}</td>
			<td>1m 40sec</td>
			<td>{this.state.carOptions[2].chance / 10}%</td>
		</tr>
			<tr onClick={() => {this.PerformCarTheft(3)}}>

			<td>{this.state.carOptions[3].text}</td>
			<td>1m 40sec</td>
			<td>{this.state.carOptions[3].chance / 10}%</td>
		</tr>
	</tbody>
	</table>
	
		}
	
</div>
</div>
    </React.Fragment>
	);
  }
}


export default Crime;
