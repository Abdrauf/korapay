const koraPayUrl = "https://alphapay.netlify.app/"
const signUpLink = '.nav_item > a'
const yourFullName = ':nth-child(1) > input'
const yourUserName = ':nth-child(2) > input'
const yourPhoneNumber= ':nth-child(3) > input'
const yourEmail= ':nth-child(4) > input'
const yourPassword= ':nth-child(5) > input'
const yourConfirmPassword = ':nth-child(6) > input'
const createAccount = '.button'
const errorMessage = '.go1415219401'



class signUpWithWrongDetails{
    static visitUrl(){
        cy.visit(koraPayUrl)

    }
    static clickSignUp(){
        cy.get(signUpLink).click()
    }

    static enterDetails(){
        cy.get(yourFullName).type('Ade Basket', {log:false})
        cy.get(yourUserName).type('CashMan', {log:false})
        cy.get(yourPhoneNumber).type('09089912121', {log:false})
        cy.get(yourEmail).type('ade@mailinator.com', {log:false})
        cy.get(yourPassword).type('M@thematics11', {log:false})
        cy.get(yourConfirmPassword).type('M@thematics11', {log:false})
    }
    static clickCreateAccount(){
        cy.get(createAccount).click()
    }
    static assertDashboard(){
        cy.get(errorMessage).should("contain.text", 'A user with that phone number or email or username already exists')


    }
}export default signUpWithWrongDetails