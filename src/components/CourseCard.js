import React, { Component } from 'react';

class CourseCard extends Component {

	handleClick() {
		let course_id = this.props.course_id;
		let id = JSON.parse(localStorage.getItem('session-username'))
		var url = `http://localhost:5000/user/enroll`;
		var data = {
			'course_id': course_id,
			'username': id
		};
		fetch(url, {
				method: 'POST', // or 'PUT'
				body: JSON.stringify(data), // data can be `string` or {object}!
				headers:{
						'Content-Type': 'application/json'
		}
		}).then(res => res.json())
		.then(response => {
			console.log('Success:', JSON.stringify(response))
			alert(course_id.slice(1,)+' has been added to your list')
		})
		.catch(error => console.error('Error:', error));
}

  render() {
    return (
      <div>
        {/* Course Brief Detail and Add button part */}
        <ul>
						<li>
							<div className="course_detail">
								<span className="course_id">{this.props.full_name}</span>
								<span className="course_description">{this.props.description}</span>
								<div className="rank">
									<img src={require("../img/stars.png")} alt='star' className="rank_star"></img>
								</div>
								<button type="button" className="proceed_to_enroll" onClick={this.handleClick.bind(this)}>Enroll Course</button>
							</div>
							
						</li>
					</ul>

      </div>
    )
  }
}

CourseCard.defaultProps = {
	star: 0,
}

export default CourseCard
