import React, {Component, Fragment} from 'react';
import NavBar from '../components/Navbar';
import DailyMeal from '../components/DailyMealItem';
import Footer from '../components/footer';
import {Redirect} from 'react-router-dom';

class DailyMealItemPage extends React.Component{
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
 			<title>Daily Meal Item</title>
 			<NavBar/>
 				<DailyMeal/>
 			<Footer/>
		  {this.RedirectToLoginPage()}
 		</Fragment>
 		)
 }
}
export default DailyMealItemPage;