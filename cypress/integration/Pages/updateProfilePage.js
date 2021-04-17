const profileLink = '.dashboard_nav_profile'
const fullName = 'form > :nth-child(1) > input'
const userName = ':nth-child(2) > input'
const updateLink = 'form > .button'
const dashLink = '.nav-list > [href="/dashboard/overview"] > span'


class updateProfile {
    static clickProfile(){
        cy.get(profileLink).click()
    }
    static enterFullName(){
        cy.get(fullName).clear().type('Terry Juan', {log:false})
    }
    static enterUserName(){
        cy.get(userName).clear().type('BLACK CAMARU',{log:false})
    }
    static clickUpdateAccount(){
        cy.get(updateLink).click()
    }
    static clickOverview(){
        cy.get(dashLink).click()
    }
}export default updateProfile

