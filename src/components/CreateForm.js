import React, { Component } from 'react';
// import { Redirect, Link , withRouter} from 'react-router-dom';


class CreateForm extends Component {

    constructor(props){
      super(props);
      this.state = {
        username : "",
        password : "",
		name: "",
        isAuthenticated: false
      };
      this.Creation = this.Creation.bind(this);
    };

    componentWillMount(){
      if(localStorage.getItem('session-username')){
        window.location.href = "/studentprofile"
      }
    }

    handleUsernameChanged(event){
      this.setState({username : event.target.value});
    }

    handlePasswordChanged(event){
      this.setState({username : event.target.value});
    }

	handleNameChanged(event){
      this.setState({name : event.target.value});
    }

    Creation(e) {
      e.preventDefault()
	  let username = this.refs.username.value;
      this.setState({username : this.refs.username.value, password: this.refs.password.value, name: this.refs.name.value})
	const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username : this.refs.username.value, name: this.refs.name.value, password: this.refs.password.value, enrolled_subjects: "", marks: ""})
    };
	fetch('http://localhost:5000/user/add', requestOptions)
        .then(response => response.json())
        .then(data => {
		if(data.status==200){
          localStorage.setItem('session-username', JSON.stringify(this.refs.username.value));
          localStorage.setItem('session-first_name', JSON.stringify(this.refs.name.value));
          localStorage.setItem('enrolled', JSON.stringify(""));
          this.setState({isAuthenticated : true});
          window.location.href = "/studentprofile"
        }else{
          window.alert("User Already Exists");
          window.location.href = "/createuser"
        }});
    }



    // get the user's pswd from DB, check if match with the input password by user, if true, redirect studentprofile, otherwise, remind ,
    render() {
      return (
        <div>
          {/* Login form */}
          <form className="login100-form validate-form " onSubmit={this.Creation} name="loginform" >

            <div className="wrap-input100 validate-input" data-validate = "Enter username">
                <input className="input100" type="text" name="username" placeholder="User name" ref="username" required/>
                <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Enter name">
                <input className="input100" type="text" name="name" placeholder="Name" ref="name" required/>
                <span className="focus-input100"></span>
            </div>
			
			<div className="wrap-input100 validate-input" data-validate="Enter password">
                <input className="input100" type="password" name="password" placeholder="Password" ref="password" required/>
                <span className="focus-input100"></span>
            </div>
            {/* Button part */}
            <div className="container-login100-form-btn">
                <button onClick={this.Creation} className="login100-form-btn" type="submit" >
                    Create User
                </button>
            </div>
          </form>
        </div>
      );
    }
  }


export default CreateForm;
