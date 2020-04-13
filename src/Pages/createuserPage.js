//Done

import React, { Component } from 'react';
import '../css/style.css';
import CreateForm from '../components/CreateForm';
import { Helmet } from "react-helmet";

const CreateBackground = (props) => 
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
      <div className="container-login100">
          <div className="wrap-login100">
                <span className="login100-form-title">
                    Course Management Create User
                </span>
                {/* Link into component LoginForm */}
                <CreateForm/>
          </div>
      </div>
  </div>
	

class CreateuserPage extends Component {
    
    render() {
        return (
            <div>         
              <CreateBackground />
            </div>
        );
      }
    }
export default CreateuserPage;