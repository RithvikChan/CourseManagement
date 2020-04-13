//Done

import React, { Component } from 'react';
import '../css/style.css';
import CreateCourseForm from '../components/CreateCourseForm';
import { Helmet } from "react-helmet";
import NavigationBar from '../components/NavigationBar';
const CreateUserBackground = (props) => 
  <div>
    {/* Below is the example how you write the html header */}
    <Helmet>
        <title>Course Enrollment System</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" type="css/text" href="./css/login.css" />
    </Helmet>
    {/* Body html begin */}
    {/* Login part */}
	<NavigationBar/>
      <div className="container-login100">
          <div className="wrap-login100">
                <span className="login100-form-title">
                    Course Management Create Course
                </span>
                {/* Link into component LoginForm */}
                <CreateCourseForm/>
          </div>
      </div>
  </div>
	

class CreatecoursePage extends Component {
    
    render() {
        return (
            <div>         
              <CreateUserBackground />
            </div>
        );
      }
    }
export default CreatecoursePage;