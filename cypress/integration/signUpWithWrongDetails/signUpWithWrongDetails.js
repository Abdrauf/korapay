import {Given,Then,And} from "cypress-cucumber-preprocessor/steps";
import PageAction from "../Pages/loginPage";
 const Pages = new PageAction()

Given (/^User visit the alphaPay application$/, function () {
    cy.visit('/')
});

Then (/^Click Sign Up$/, function () {
    cy.fixture("wrongSignUp").then((wrongSignUp)=>{
        Pages.clickAnElement(wrongSignUp.signUpLink)
    })
});

And (/^Fill the sign Up form$/, function () {
    cy.fixture("wrongSignUp").then((wrongSignUp)=>{
        Pages.insertValue(wrongSignUp.yourFullName, wrongSignUp.fname)
        Pages.insertValue(wrongSignUp.yourUserName, wrongSignUp.userName)
        Pages.insertValue(wrongSignUp.yourPhoneNumber, wrongSignUp.phoneNumber)
        Pages.insertValue(wrongSignUp.yourEmail, wrongSignUp.email_add)
        Pages.insertValue(wrongSignUp.yourPassword, wrongSignUp.Password)
        Pages.insertValue(wrongSignUp.yourConfirmPassword, wrongSignUp.Password)


    })
});

Then (/^User click create account/, function () {
    cy.fixture("wrongSignUp").then((wrongSignUp)=>{
        Pages.clickAnElement(wrongSignUp.createAccount)
    })
});

Then (/^User should be redirect to the Dashboard$/, function () {
    cy.fixture("wrongSignUp").then((wrongSignUp)=>{
        Pages.viewElementText(wrongSignUp.errorMessage, 'A user with that phone number or email or username already exists')
    })
});