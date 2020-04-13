import React, {Component } from 'react';


class StudentInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
        }
    }

    componentWillMount(props){
      let username = localStorage.getItem('session-username').slice(1,-1)
	this.setState({
            name : localStorage.getItem('session-first_name').slice(1,-1),
        })
    }

    render() {
      return (
          <div>
            {/* Below are the detials for the student */}
              <div className="col-md-6">
                  <div className="section-header">
                    <h2>Student Information</h2>
                  </div>
                  <img src={require(`../images/5198410.jpg`)} alt="" className="Student_img"/>
                  <div className="student_info"> 
                    <div className="feature">
                      <i className="feature-icon fa fa-flask"></i>
                      <div className="feature-content">
                        <h3>Student Name</h3>
                        <h4>{this.state.name}</h4>
                      </div>
                    </div>
                </div>
            </div>
        </div> 
      );
    }
  }

  export default StudentInfo;