import React, {Component} from 'react';
//import Component from 'react-dom';
import './../../gameComponent.css';
import axios from 'axios';



class Login extends Component{
 constructor() {
    super();
    this.state = {
		color: "red",
		username : '',
		password: '',
		user: {id:0,}
	}
  }
  
  
  
changeData = (event) => {
	const data = event.target.id;
	if (data === 'username') {
			this.setState({username: event.target.value});

	} else if (data === 'password') {
			this.setState({password: event.target.value});
	} else {
	}
}

    PerformLogin = () => {
		const username = this.state.username;
		const password = this.state.password;
		if (username === '') {
			console.log("please enter username");
		} else if (password === '') {
			console.log("please enter password");
		} else {
				  console.log("username of login: ",this.state.username);
				   axios.post(`http://localhost:3000/login`,{ username: username, password: password },{withCredentials: true})
      .then(res => {
        console.log(res);
        console.log(res.data);
		
		
      })
			  
  
		}
		
		
  }

render() {
    return (
		<div id="test">
		<span>Login template</span>
		
		<div className="loginTemplateHolder">
		<input type="text" value={this.state.username} onChange={this.changeData}  id="username" placeholder="username"/>
		<input type="text" value={this.state.password} onChange={this.changeData}  id="password" placeholder=""/>
		<input type="submit" className="btn btn-md" onClick={this.PerformLogin} value="Login"/>
		</div>
		</div>
	);
  }
  
  
  

  
  
}


export default Login;
