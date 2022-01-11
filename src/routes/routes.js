import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router';
import LoginPage from '../pages/login';
import EmailVerify from '../pages/EmailPage';
import OTPVerify from '../pages/OTPPage';
import ForgetPassword from '../pages/ResetPage';
import ChangePassword from '../pages/ChangePassword';
import ProfilePage from '../pages/ProfilePage';
import PageNotFound from '../pages/PageNotFound';

class Routes extends React.Component{
 render() {
    return (
        <Fragment>
                <Switch>
                    <Route exact path="/login" render={(props)=> <LoginPage {...props} key={ Date.now() } />} />
                    <Route exact path="/email_verification" render={(props)=> <EmailVerify {...props} key={ Date.now() } />} />
                    <Route exact path="/otp_verification" render={(props)=> <OTPVerify {...props} key={ Date.now() } />} />
                    <Route exact path="/reset_password" render={(props)=> <ForgetPassword {...props} key={ Date.now() } />} />
                    <Route exact path="/change_password" render={(props)=> <ChangePassword {...props} key={ Date.now() } />} />
                    <Route exact path="/user_profile" render={(props)=> <ProfilePage {...props} key={ Date.now() } />} />
                    <Route exact component={PageNotFound} />
                </Switch>
       
        </Fragment>
    );
  }
}

export default Routes;
