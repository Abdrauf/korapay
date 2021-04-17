import {Given,Then,And} from "cypress-cucumber-preprocessor/steps";
import signUpPage from "../Pages/signUpPage";



Given (/^User visit the alphaPay application$/, function () {
signUpPage.visitUrl()

});

Then (/^Click Sign Up$/, function () {
signUpPage.clickSignUp()
});

And (/^Fill the sign Up form$/, function () {
signUpPage.enterDetails()
});

Then (/^User click create account/, function () {
signUpPage.clickCreateAccount()
});

Then (/^User should be redirect to the Dashboard$/, function () {
signUpPage.assertDashboard()
});