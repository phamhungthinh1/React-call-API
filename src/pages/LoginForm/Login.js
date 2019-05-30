import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link, BrowserRouter as Router} from 'react-router-dom';
class Login extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     txtUsername: '',
  //     txtPassword: ''
  //   }
  // }
  // onChange = (e) => {
  //   var target = e.target;
  //   var name = target.name;
  //   var value = target.type === 'checkbox' ? target.checked : target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // }
  // onLogin = (e) => {
  //    e.preventDefault();
  //    var { txtUsername, txtPassword } = this.state;
  //    if(txtUsername === "admin" && txtPassword === "123"){
  //       localStorage.setItem('user',JSON.stringify({
  //           username : txtUsername,
  //           password : txtPassword
  //       }));
  //    }
  // }
  render() {
    // var { txtUsername, txtPassword } = this.state;
    // var loggedInUser = localStorage.getItem('user');
    // if(loggedInUser !== null){
    //    var {location} = this.props; 
    //    return <Redirect to="/home"/>
    // }
    return (
      <Router>
      <Form className="login-form" >
        <h1>
          <span className="font-weight-bold">Management</span>
        </h1>
        <h2>Welcome</h2>
        <FormGroup >
          <Label>Username</Label>
          <br />
          <Input
            type="text"
            placeholder="Username"
            // name="txtUsername"
            // value={txtUsername}
            // onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <br />
          <Input
            type="password"
            placeholder="Password"
            // name="txtPassword"
            // value={txtPassword}
            // onChange={this.onChange}
          />
        </FormGroup>
        <Link to="/home" ><Button className="btn-lg btn-block" type="submit">Login</Button> </Link>
      </Form>
      </Router>
    );
  }
  
}

export default Login;
