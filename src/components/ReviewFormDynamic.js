import React, { Component } from 'react';

class ReviewFormDynamic  extends  Component{

    // init params
    constructor(props){
        super(props);
        this.state = {
            CourseCode: this.props.CourseCode,
            CourseStars: this.props.CourseStar,
            CourseName: this.props.CourseName,
        }
    }

	marksAdd(){
	let username = JSON.parse(localStorage.getItem('session-username'));
	alert(this.props.CourseCode)
	alert(this.refs.marks.value)
	const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username : username, course_id: this.props.CourseCode, marks: this.refs.marks.value})
    };
	fetch('http://localhost:5000/user/marks_add', requestOptions)
        .then(response => response.json())
        .then(data => {
		if(data.status==200){
          window.alert("Updated Marks");
        }else{
          window.alert("Couldn't Update Marks");
        }});
	}
    
    render(){
	if(this.state.CourseStars>0)	{
        return(
            //  This is review form for current semenster
                <tr className="review_dynamic">
                    <td width="10%" id="CourseID">{this.state.CourseCode}</td>
                    <td width="10%" id="CourseDetails">{this.state.CourseName}</td>
					<td width="10%" id="CourseMarks"> {this.state.CourseStars}</td>
					<td width="40%" id="CourseMarks">
						<form className="form-inline" onSubmit={this.props.onrefresh} name="changeMarks">
							<input style={{width: "30%", color:"black"}} type="text" name="marks" placeholder="Marks" ref="marks" required/>
							<button onClick={this.marksAdd.bind(this)} style={{color:"black"}}  className="login2-form-btn" type="submit" >
								Update
							</button>
						</form>
					</td>
				</tr> 
        );
		}
	else{
		return(
				<tr className="review_dynamic">
                    <td width="10%" id="CourseID">{this.state.CourseCode}</td>
                    <td width="10%" id="CourseDetails">{this.state.CourseName}</td>
					<td width="10%" id="CourseMarks"></td>
					<td width="40%" id="CourseMarks">
						<form className="form-inline" onSubmit={this.props.onrefresh} name="changeMarks">
							<input style={{width: "30%", color:"black"}} type="text" name="marks" placeholder="Marks" ref="marks" required/>
							<button onClick={this.marksAdd.bind(this)} style={{color:"black"}}  className="login2-form-btn" type="submit" >
								Update
							</button>
						</form>
					</td>
				</tr>
		); 
	}

    }

}


export default ReviewFormDynamic;