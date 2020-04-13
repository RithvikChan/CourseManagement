import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

class CreateBar extends Component {
    constructor(props){
        super(props);
        }

    render() {
        return (
            <div>
                <Helmet>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <title></title>
                    <meta name="description" content="navigationbar of Course System" />
                    <link rel="stylesheet" type="css" href="css/style.css"/>
                    <script type="text/javascript" src="https://cdn.bootcss.com/jquery/1.4.0/jquery.js"></script>
                </Helmet>

                <header id="header" className="transparent-nav">
		            <div className="navigationbar">
		                    
				    {/* Navigation button */}
			            <nav id="nav">
                            <ul className="main-menu">
                                <li><Link to="/createuser" target="_parent">Create User</Link></li>
                            </ul>
			            </nav>
		            </div>
	            </header>
            </div>

        );
    }
}


export default CreateBar;