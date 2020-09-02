import React, {Component} from 'react';
//import Component from 'react-dom';
import './../../gameComponent.css';
import NumberFormat from 'react-number-format';


class SideBarRight extends Component{
 constructor(props) {
    super(props);	
  }

render() {
    return (
		<div className="content_sidebar">
			<div className="header" style={{fontWeight: 'Bold', textAlign: 'center'}}><span>{this.props.element.props.user.username}</span></div>
			<div><img className="profilePicture" src="http://lorempixel.com/100/100/"/></div>
			<table style={{width:'100%'}} className="sideBarProfile">
			<tbody>
			    <tr>
				<td style={{padding:2}}><img title="Rank" className="header_icon" src="image/icons/star.png"/></td>
				<td style={{width:'85%'}}><a href="?side=wiki#rank">{this.props.element.props.rankbar.rankname}</a></td>
				</tr>
				
				<tr>
				   <td><img title="Penger" className="header_icon" src="image/icons/money.png"/></td>
					<td><a href="?side=banken">
				<NumberFormat value={this.props.element.props.user.cash} displayType={'text'} thousandSeparator={true} prefix={''} /> kr</a></td>
				</tr>
             
			 <tr>
				   <td><img title="Penger" className="header_icon" src="image/icons/building.png"/></td>
					<td><a href="?side=flyplass">{this.props.element.props.user.locationname}</a></td>
				</tr>
             
			 
			 <tr>
				   <td><img title="Penger" className="header_icon" src="image/icons/shield.png"/></td>
					<td><a href="?side=drap&amp;p=fp">{this.props.element.props.user.bullets}</a> stk</td>
				</tr>
            		 <tr>
				   <td><img title="Penger" className="header_icon" src="image/icons/chart_line.png"/></td>
					<td>Rankbar: {this.props.element.props.rankbar.percent} %</td>
				</tr>
			</tbody>
      		
            </table>
			
		</div>
	);
  }
}


export default SideBarRight;
