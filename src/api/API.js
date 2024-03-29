class API {
	static baseURL = "https://canteen-api.coderanwar.online/api/";
	static login   = this.baseURL + "login";
	static verifyEmail   = this.baseURL + "EmailVerification";
	static GetOTPExpiration   = this.baseURL + "GetOTPExpiration";
	static OTPVerification   = this.baseURL + "OTPVerification";
	static ResetPassword   = this.baseURL + "ResetPassword";
	static ChangePassword   = this.baseURL + "ChangePassword";
	static GetUserProfile   = this.baseURL + "GetUserProfile";
	static GetShopName   = this.baseURL + "GetProfileInfo";
	static GetShopLogo   = this.baseURL + "GetProfileInfo";
	static UpdateProfile   = this.baseURL + "UpdateProfile";
	static GetDailyMealItem   = this.baseURL + "GetDailyMealItem";
	static SendMessage   = this.baseURL + "SendMessage";
	static CountLastest  = this.baseURL + "CountLastestNotification";
	static SetUnreadStatus  = this.baseURL + "SetUnreadStatus";
	static GetAdminNotification  = this.baseURL + "GetAdminNotificationByUser";
	static GetSelfNotification  = this.baseURL + "GetSelfCreatedNotification";
	static SetReadStatus  = this.baseURL + "SetReadStatus";
	static OrderDailyMeal  = this.baseURL + "OrderDailyMeal";
	static GetTodayOrderInfo  = this.baseURL + "GetTodayOrderInfo";
	static ChangeOrderedMeal  = this.baseURL + "ChangeOrderedMeal";
	static DeleteTodayOrder  = this.baseURL + "DeleteTodayOrderedMeal/";
	static RestoreTodayOrder  = this.baseURL + "RestoreTodayOrderedMeal/";
	static GetAllMealByUser  = this.baseURL + "GetAllMealByUser/";
	static PaymentDetailsByUser  = this.baseURL + "PaymentDetailsByUser/";
	static PaymentDetailsFilterByDate  = this.baseURL + "PaymentDetailsFilterByDate";
	static GetMealFilterByDate  = this.baseURL + "GetMealFilterByDate/";
	static CountDashboardSummary  = this.baseURL + "CountDashboardSummary/";
	static LastFivePaymentDetails  = this.baseURL + "LastFivePaymentDetails/";
	static LastFiveMonthsStatements  = this.baseURL + "LastFiveMonthsStatements/";
	static LastSevenDaysMealReport  = this.baseURL + "LastSevenDaysMealReport/";
	static GetYearsAndMonths  = this.baseURL + "GetYearsAndMonths";
	static GetMonthlyStatementByKey  = this.baseURL + "GetMonthlyStatementByKey";
	static GetAllMonthlyStatement  = this.baseURL + "GetAllMonthlyStatement/";
    static GetMealRate   = this.baseURL + "GetMealRate";



	
}
export default API;