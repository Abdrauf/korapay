import {Given, Then} from "cypress-cucumber-preprocessor/steps";
import PageAction from "../Pages/logOutPage";

const Pages = new PageAction()


Given (/^User visit and Login to the alphaPay application$/, function () {
    cy.visit('/');
    cy.fixture('signIn').then((signIn)=>{
        // created a custom command for login to reduce the lines of codes
        cy.login(signIn.email, signIn.password);
    });
});


Then (/^Click Profile Page$/, function () {
    cy.fixture("logOut").then((logOut)=>{
        Pages.clickAnElement(logOut.profileLink)
    })
});

Then (/^User click logOut$/, function () {
    cy.fixture("logOut").then((logOut)=>{
        Pages.clickAnElement(logOut.logOutLink)
    })
});

Then (/^Return to sign in Page$/, function () {
    cy.fixture("logOut").then((logOut)=>{
        Pages.waitForElement(logOut.logOutValidation)
    })
});
