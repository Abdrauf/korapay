import {Given,Then,And} from "cypress-cucumber-preprocessor/steps";
import signUpWithWrongDetailsPage from "../Pages/signUpWithWrongDetailsPage";



Given (/^User visit the alphaPay application$/, function () {
    signUpWithWrongDetailsPage.visitUrl()

});

Then (/^Click Sign Up$/, function () {
    signUpWithWrongDetailsPage.clickSignUp()
});

And (/^Fill the sign Up form$/, function () {
    signUpWithWrongDetailsPage.enterDetails()
});

Then (/^User click create account/, function () {
    signUpWithWrongDetailsPage.clickCreateAccount()
});

Then (/^User should be redirect to the Dashboard$/, function () {
    signUpWithWrongDetailsPage.assertDashboard()
});