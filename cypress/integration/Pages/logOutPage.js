const profileLink = '.dashboard_nav_profile'
const logOutLink = '[href="/coming-soon"]'
const logOutValidation = '.head_info'

class logOut {
    static clickProfile(){
        cy.get(profileLink).click()
    }
    static clickLogOut(){
        cy.get(logOutLink).click({force:true})
    }
    static assertLogOut(){
        cy.get(logOutValidation).should("contain.text",'Welcome back, Please log in to your account to access your dashboard')
    }
}export default logOut




