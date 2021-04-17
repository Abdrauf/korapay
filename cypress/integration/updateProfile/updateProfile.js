import {Given,Then} from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pages/loginPage";
import updateProfilePage from "../Pages/updateProfilePage";

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

Then (/^Click Profile$/, function () {
updateProfilePage.clickProfile()
});
Then (/^Enter new full name$/, function () {
updateProfilePage.enterFullName()
});
Then (/^Enter new Username$/, function () {
updateProfilePage.enterUserName()
});
Then (/^Click Update Details$/, function () {
updateProfilePage.clickUpdateAccount()
});
Then (/^Click Overview$/, function () {
updateProfilePage.clickOverview()
});