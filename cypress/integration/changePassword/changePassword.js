import {Given,Then} from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pages/loginPage";
import changePasswordPage from "../Pages/changePasswordPage";

Given(/^User visit the alphaPay application$/, function (){
    loginPage.visitUrl()
});

Then (/^User click sign in$/, function () {
    loginPage.clickSignIn()
});
Then (/^Inputs Email as "([^"]*)" and password as "([^"]*)"$/, function (Email, Password) {
    loginPage.inputUserCredentials(Email, Password)
});
Then (/^User clicks on login button$/, function () {
    loginPage.clickLogin()
});

Then (/^User should be redirected to the dashboard$/, function () {
    loginPage.assertDashboard()
});


Then (/^Click Profile Icon$/, function () {
changePasswordPage.clickProfile()
});

Then (/^Click Security$/, function () {
changePasswordPage.clickSecurity()
});
Then (/^Enter Old Password$/, function () {
changePasswordPage.enterOldPassword()
});
Then (/^Enter New Password$/, function () {
changePasswordPage.enterNewPassword()
});
Then (/^Click Change Password$/, function () {
changePasswordPage.clickChangePassword()
});
Then (/^Click Overview to return to Homepage$/, function () {
changePasswordPage.clickOverview()
});