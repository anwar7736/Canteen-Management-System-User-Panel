import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/login';
import EmailVerify from '../pages/EmailPage';
import OTPVerify from '../pages/OTPPage';
import ForgetPassword from '../pages/ResetPage';
import ChangePassword from '../pages/ChangePassword';
import ProfilePage from '../pages/ProfilePage';
import DailyMealItemPage from '../pages/DailyMealItemPage';
import SendMessagePage from '../pages/SendMessagePage';
import AdminNotificationPage from '../pages/AdminNotificationPage';
import MyNotificationPage from '../pages/MyNotificationPage';
import OrderDailyMealPage from '../pages/OrderDailyMealPage';
import DayWiseMealPage from '../pages/DayWiseMealPage';
import PaymentPage from '../pages/PaymentPage';
import PaymentSummaryPage from '../pages/PaymentSummaryPage';
import MyTokenPage from '../pages/MyTokenPage';
import MonthlyReportPage from '../pages/MonthlyReportPage';


import PageNotFound from '../pages/PageNotFound';

class Routes extends React.Component{
 render() {
    return (
        <Fragment>
                <Switch>
                    <Route exact path="/" render={(props)=> <HomePage {...props} key={ Date.now() } />} />
                    <Route exact path="/login" render={(props)=> <LoginPage {...props} key={ Date.now() } />} />
                    <Route exact path="/email_verification" render={(props)=> <EmailVerify {...props} key={ Date.now() } />} />
                    <Route exact path="/otp_verification" render={(props)=> <OTPVerify {...props} key={ Date.now() } />} />
                    <Route exact path="/reset_password" render={(props)=> <ForgetPassword {...props} key={ Date.now() } />} />
                    <Route exact path="/change_password" render={(props)=> <ChangePassword {...props} key={ Date.now() } />} />
                    <Route exact path="/user_profile" render={(props)=> <ProfilePage {...props} key={ Date.now() } />} />
                    <Route exact path="/dailyMealItem" render={(props)=> <DailyMealItemPage {...props} key={ Date.now() } />} />
                    <Route exact path="/send_message" render={(props)=> <SendMessagePage {...props} key={ Date.now() } />} />
                    <Route exact path="/admin_notification" render={(props)=> <AdminNotificationPage {...props} key={ Date.now() } />} />
                    <Route exact path="/all_notification" render={(props)=> <MyNotificationPage {...props} key={ Date.now() } />} />
                    <Route exact path="/order_daily_meal" render={(props)=> <OrderDailyMealPage {...props} key={ Date.now() } />} />
                    <Route exact path="/day_wise_meal" render={(props)=> <DayWiseMealPage {...props} key={ Date.now() } />} />
                    <Route exact path="/make_payment" render={(props)=> <PaymentPage {...props} key={ Date.now() } />} />
                    <Route exact path="/payment_summary" render={(props)=> <PaymentSummaryPage {...props} key={ Date.now() } />} />
                    <Route exact path="/user_token" render={(props)=> <MyTokenPage {...props} key={ Date.now() } />} />
                    <Route exact path="/monthly_statement" render={(props)=> <MonthlyReportPage {...props} key={ Date.now() } />} />

                    <Route exact component={PageNotFound} />
                </Switch>
       
        </Fragment>
    );
  }
}

export default Routes;
