import React, { Component } from 'react';
// import { Redirect, Link , withRouter} from 'react-router-dom';


class CreateForm extends Component {

    constructor(props){
      super(props);
      this.Creation = this.Creation.bind(this);
    };


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
	console.log(this.refs.courseid.value);
	const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({course_id : this.refs.courseid.value, course_title: this.refs.coursename.value, course_description: this.refs.description.value})
    };
	fetch('http://localhost:5000/course/add', requestOptions)
        .then(response => response.json())
        .then(data => {
		if(data.status==200){
          this.setState({isAuthenticated : true});
          window.location.href = "/"
        }else{
          window.alert("User Already Exists");
        }});
    }



    // get the user's pswd from DB, check if match with the input password by user, if true, redirect studentprofile, otherwise, remind ,
    render() {
      return (
        <div>
          {/* Login form */}
          <form className="login100-form validate-form " onSubmit={this.Creation} name="createcourse" >

            <div className="wrap-input100 validate-input" data-validate = "Enter course ID">
                <input className="input100" type="text" name="courseid" placeholder="Course ID" ref="courseid" required/>
                <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Enter course name">
                <input className="input100" type="text" name="name" placeholder="Course Name" ref="coursename" required/>
                <span className="focus-input100"></span>
            </div>
			
			<div className="wrap-input100 validate-input" data-validate="Enter course description">
                <input className="input100" type="text" name="description" placeholder="Description" ref="description" required/>
                <span className="focus-input100"></span>
            </div>
            {/* Button part */}
            <div className="container-login100-form-btn">
                <button onClick={this.Creation} className="login100-form-btn" type="submit" >
                    Add Course
                </button>
            </div>
          </form>
        </div>
      );
    }
  }


export default CreateForm;
