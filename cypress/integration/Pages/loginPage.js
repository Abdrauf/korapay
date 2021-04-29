const koraPayUrl = "https://alphapay.netlify.app/"
const signInLink = 'a > .btn'
const userName = ':nth-child(1) > input'
const userPassword = '.password'
const signInBtn = '.button'
const dashPayment = '.nav-list > [href="/dashboard/payments"] > span'
const dashOverview = '.nav-list > .active > span'
//const loginNotification ='.go1415219401'




class login{

    static visitUrl (){
        cy.visit(koraPayUrl)

    }

    static clickSignIn(){
        cy.get(signInLink).click()
    }
    static inputUserCredentials(Email, Password){
        cy.get(userName).type(Email, {log:false})
        cy.get(userPassword).type(Password,{log:false})

    }
    static clickLogin(){
        cy.get(signInBtn).click()
    }

    static assertDashboard(){
        cy.get(dashOverview).click().should("contain.text", 'Overview')
        cy.get(dashPayment).click().should("contain.text", 'Payments')
      //  cy.get(loginNotification).should("contain.text", 'Welcome to your dashboard')

    }



}export default login