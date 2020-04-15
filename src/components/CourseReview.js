import React, { Component } from 'react';
import ReviewForm from '../components/ReviewForm';
import ReviewFormDynamic from './ReviewFormDynamic';
import BarPlot from '../components/BarPlot';

class CourseReview extends Component {

    // initial params
    constructor(props){
        super(props);
        this.state = {
			enrolled: [],
			downloaded: 0
        }
    }

    componentWillMount(props){
        // get usename from session
        let username = JSON.parse(localStorage.getItem('session-username'));
		fetch(`http://localhost:5000/course/info/enrolled/${username}`)
				.then(res => res.json())
				.then(json => {
						console.log("SHOWING TABLE")
						for ( let course of json){
							this.setState({
								enrolled: [...this.state.enrolled, {'code': course.course_id, 'name': course.course_title, 'star': course.marks}],
							})
						}
						console.log(JSON.parse(localStorage.getItem('enrollment')))
						setTimeout(this.changeStatus.bind(this), 2000);
				})
				.catch((err) => {
					console.log(`Opz, something wrong, the error message is ${err}`);
		});
}     
	changeStatus(){
		this.setState({downloaded: 1});
	}

    refresh (){
		alert("HELLO");
        let username = JSON.parse(localStorage.getItem('session-username'));
		fetch(`http://localhost:5000/course/info/enrolled/${username}`)
				.then(res => res.json())
				.then(json => {
						for ( let course of json){
							this.setState({
								enrolled: [...this.state.enrolled, {'code': course.course_id, 'name': course.course_title, 'star': 100}],
							})
						}
						console.log(JSON.parse(localStorage.getItem('enrollment')))
				})
				.catch((err) => {
					console.log(`Opz, something wrong, the error message is ${err}`);
		});
        
    }
    
    // check if it follows dynamic stars dividing by terms
    // term one 
    semesterTitleDivision_1 = () => {
            return this.state.enrolled.map((Course) => (
                <ReviewFormDynamic key={Course.code} CourseCode={Course.code} CourseName={Course.name} CourseStar={Course.star}  onrefresh	 = {this.refresh}/>
		));
}



 
    render() {
		if(this.state.downloaded==0){
			return (
            <div>   
				<table width="100%" className="zebra review_table">
                    <tbody>
                        {this.semesterTitleDivision_1()}
                    </tbody>
                    </table>
				<br/>
			
            </div> 
        );
		}
		else{
			return (
            <div>   
				<table width="100%" className="zebra review_table">
                    <tbody>
                        {this.semesterTitleDivision_1()}
                    </tbody>
                    </table>
				<br/>
				<BarPlot elementsAll={this.state.enrolled}/>
	
            </div> 
        );}
		}
}
  

  export default CourseReview;