import {Given, Then} from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pages/loginPage";

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
