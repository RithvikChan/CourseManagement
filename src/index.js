import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route , Switch } from 'react-router-dom'

//import routers
import LoginPage from './Pages/loginPage';
import StudentProfilePage from './Pages/studentProfilePage';
import CourseEnrolmentPage from './Pages/courseEnrolmentPage';
import CreateuserPage from './Pages/createuserPage';
import CreatecoursePage from './Pages/createcoursePage';
import CoursereviewPage from './Pages/coursereviewPage';
// import NotFound from './Pages/notFound';    //TODO : 404 bug need to fix


//routers controller
const AppRouter = () => 
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component = {LoginPage} />
            <Route exact path="/studentprofile" component={StudentProfilePage} />
			<Route exact path="/courseenrolment" component={CourseEnrolmentPage}/>
			<Route exact path="/coursereview" component={CoursereviewPage}/>
            <Route exact path="/createuser" component={CreateuserPage} />
            <Route exact path="/createcourse" component={CreatecoursePage} />
        </Switch>
    </BrowserRouter>


ReactDOM.render(
    <AppRouter />, document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
