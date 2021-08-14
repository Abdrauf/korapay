import {Given} from "cypress-cucumber-preprocessor/steps";


Given (/^User visit and Login to the alphaPay application$/, function () {
    cy.visit('/');
    cy.fixture('signIn').then((signIn)=>{
        // created a custom command for login to reduce the lines of codes
        cy.login(signIn.email, signIn.password);
    });
});