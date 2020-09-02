import React, {Component} from 'react';
//import Component from 'react-dom';
import './../../gameComponent.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Countdown }  from './timer.jsx';
import Checkbox from '@material-ui/core/Checkbox';
import NumberFormat from 'react-number-format';

import axios from "axios";

library.add(faLock);


class Crime extends Component{
    constructor(props) {
        super(props);
    this.state = {
		HappyHourWait : {value:90},
		garage : [{carid: 5,damage: 50,from: 1,location: 1,time: 1598974381335,userid: "5f4d87ef1541630b57d9be4c"}],
		GarageArray : [],
		
	
		message : '',
		showMessage : false,
		classes : 'info',
		  
    checked: false,
    setChecked: false,

	}
  }
  

   handleChange = (event) => {
	   		   let array = this.state.GarageArray;

	   if (event.target.checked) {
		   array.push(event.target.id);
		   this.setState({GarageArray: array});
	   } else {
		   var index = array.indexOf(event.target.id);
			array.splice(index, 1);
			this.setState({GarageArray: array});
	   }
	   console.log(array);
  };
  
  SellCars(type) {
	  if (type == 'all') {
		  console.log("selger alle biler");
	  } else {
		  console.log("selger spesifikke");
	  }
	  
  }
  
  MeltAll() {
	  console.log("smelter alle biler..");
	  
	   axios.post(`http://localhost:3000/garage/melt/all`,{ id : 'all' },{withCredentials: true})
      .then(res => {
		  var detailsResponse = res.data;
		  console.log("smelter biler respons",res);
		  this.setState({message: detailsResponse.message});
		  this.setState({showMessage: true});
		  this.setState({classes: (detailsResponse.type ? 'success' : 'error')});
		this.LoadGarage();
      })
	  
	  
	  
	  
  }
  
  MeltSelected() {
	  console.log("Smelter valgte biler...");
	     axios.post(`http://localhost:3000/garage/melt`,{ id : this.state.GarageArray },{withCredentials: true})
      .then(res => {
		  var detailsResponse = res.data;
		  console.log("smelter biler respons",res);
		  this.setState({message: detailsResponse.message});
		  this.setState({showMessage: true});
		  this.setState({classes: (detailsResponse.type ? 'success' : 'error')});
		  		  this.setState({GarageArray: []});
		this.LoadGarage();
      })
	  
	  
  }
  
  componentWillMount() {
	  this.LoadGarage();		
  }
		completionist = () => <span>You are good to go!</span>;

	LoadGarage() {
	 axios.get(`http://localhost:3000/garage`,{withCredentials: true})
      .then(res => {
		  console.log("loading garage response");
        console.log(res);
        this.setState({garage : res.data});
	  });
	}


  PerformCrime(crimeId) {
	  console.log("clicked event with value:",crimeId);
	 axios.post(`http://localhost:3000/crime`,{ id : crimeId },{withCredentials: true})
      .then(res => {
		  var detailsResponse = res.data;
		  console.log("perform crime data",detailsResponse);
		  this.setState({totime: detailsResponse.time});
		  this.setState({message: detailsResponse.message});
		  this.setState({showMessage: true});
		  this.setState({classes: (detailsResponse.type ? 'success' : 'error')});
		this.props.loadtimers();
		this.LoadCrime();
      })
  }
  
  




render() {
    return (
	    <React.Fragment>
	
		
<div className="col-12 box nopad">
	<div className="box_header">Garasje</div>
		{
			this.state.showMessage && <div className={'feedback ' + this.state.classes}>{this.state.message}</div>
		}
		{ this.state.garage.length > 0 && 	    <React.Fragment>

		<div className="feedback blue"><span>Du har ingen biler. Gjør <a href="?side=biltyveri">biltyeri</a> for å skaffe biler du kan selge</span></div>
		  </React.Fragment>
		}	
		
		<table className="" style={{width:'80%'}}>
		<thead>
				<tr>
				<th style={{width:'10%'}}></th>
				<th>Navn</th>
				<th>Skade</th>
				<th>Lokasjon</th>
				<th>Fra</th>
				<th>Verdi</th>
				</tr>
		</thead>
		<tbody>
		
		{ this.state.garage.map((val, index) => {
    return (
      	<tr>
			<td style={{padding:0}}>        <Checkbox
			       color="default" id={val._id}
        checked={this.state.GarageArray.includes(val._id)}
        onChange={this.handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      /></td>
			<td>{val.name}</td>
			<td>{val.damage}%</td>
			<td>{val.location}</td>
			<td>{val.from}</td>
			<td><NumberFormat value={val.price} displayType={'text'} thousandSeparator={true} prefix={''} /></td>
			</tr>
			
     );
  })
	}
		
		</tbody>	
		</table>
	  	
		<div>
		<button className="btn" onClick={() => {this.SellCars('all')}}>Selg alle</button>
			<button className="btn"  onClick={() => {this.SellCars('marked')}}>Selg markerte</button>
		</div>
			<div>
		<button className="btn"  onClick={() => {this.MeltAll()}}>smelt alle</button>
			<button className="btn"  onClick={() => {this.MeltSelected()}}>smelt markerte</button>
		</div>
		</div>

    </React.Fragment>
	);
  }
}


export default Crime;
