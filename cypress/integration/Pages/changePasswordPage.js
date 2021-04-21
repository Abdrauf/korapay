const profileLink = '.dashboard_nav_profile'
const securityLink = '[href="/dashboard/settings/security"]'
const oldPassword = '.old_password_form > input'
const newPassword = '.new_password_form > input'
const changePasswordBtn = '.password_security_change > form > .btn_cont > .button'
const dashLink = '.nav-list > [href="/dashboard/overview"] > span'

class changePassword{
    static clickProfile(){
        cy.get(profileLink).click()
    }
    static clickSecurity(){
        cy.get(securityLink).click({force:true})
    }
    static enterOldPassword(){
        cy.get(oldPassword).type('M@thematics11',{log:false})
    }
    static enterNewPassword(){
        cy.get(newPassword).type('M@th3m@tics',{log:false})
    }
    static clickChangePassword(){
        cy.get(changePasswordBtn).click()
    }
    static clickOverview(){
        cy.get(dashLink).click()
    }
}export default changePassword