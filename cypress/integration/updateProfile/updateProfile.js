import {Given,Then} from "cypress-cucumber-preprocessor/steps";
import PageAction from "../Pages/updateProfilePage";

const Pages = new PageAction()

Given (/^User visit and Login to the alphaPay application$/, function () {
    cy.visit('/');
    cy.fixture('signIn').then((signIn)=>{
        // created a custom command for login to reduce the lines of codes
        cy.login(signIn.email, signIn.password);
    });
});


Then (/^Click Profile$/, function () {
    cy.fixture("updateProfile").then((updateProfile)=>{
        Pages.clickAnElement(updateProfile.profileLink)
    })
});
Then (/^Enter new full name$/, function () {
    cy.fixture("updateProfile").then((updateProfile)=>{
        Pages.clearField(updateProfile.fullName)
        Pages.insertValue(updateProfile.fullName, 'Terry Juan')
    })
});
Then (/^Enter new Username$/, function () {
    cy.fixture("updateProfile").then((updateProfile)=>{
        Pages.clearField(updateProfile.userName)
        Pages.insertValue(updateProfile.userName, 'Terry Wire')
    })

});
Then (/^Click Update Details$/, function () {
    cy.fixture("updateProfile").then((updateProfile)=>{
        Pages.clickAnElement(updateProfile.updateLink)
    })
});
Then (/^Click Overview$/, function () {
    cy.fixture("updateProfile").then((updateProfile)=>{
        Pages.clickAnElement(updateProfile.dashLink)
    })
});