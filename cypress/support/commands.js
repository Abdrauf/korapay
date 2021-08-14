// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
       import PageAction from "../integration/Pages/loginPage";
       const Pages = new PageAction()

  Cypress.Commands.add('login', (Email, Password)=> {
       cy.clearCookies();
       cy.clearLocalStorage();
       cy.fixture("signIn").then((signIn)=>{
       Pages.clickAnElement(signIn.signInLink);
       Pages.insertValue(signIn.userName, Email);
       Pages.insertValue(signIn.userPassword, Password);
       Pages.clickAnElement(signIn.signInBtn);
       Pages.viewElementText(signIn.dashPayment,'Payments');
       Pages.viewElementText(signIn.dashOverview, 'Overview');
   });
});