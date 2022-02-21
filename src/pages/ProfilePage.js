import React, {Component, Fragment} from 'react';
import NavBar from '../components/desktop';
import Profile from '../components/profile';
import Footer from '../components/footer';
import {Redirect} from 'react-router-dom';

class ProfilePage extends React.Component{
		state = {
			redirectStatus : false,
		}

		

	componentDidMount(){
		   if(!localStorage.getItem('login'))
            {
                this.setState({redirectStatus : true});
            }
	}

	RedirectToLoginPage=()=>{
		if(this.state.redirectStatus==true)
		{
			return (
					<Redirect to="/login" />
					);
		}
	}

 render(){
 	return(
 		<Fragment>
 			<title>My Profile</title>
 			<NavBar/>
 			<Profile/>
 			<Footer/>
		  {this.RedirectToLoginPage()}
 		</Fragment>
 		)
 }
}
export default ProfilePage;