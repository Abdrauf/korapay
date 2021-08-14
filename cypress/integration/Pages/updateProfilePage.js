class PageAction {
    clickAnElement(ID){
        cy.get(ID).click();
    }
    insertValue(field, text){
        cy.get(field).type(text);
    }
    waitForElement(ID){
        cy.get(ID).should('be.visible');
    }
    viewElementText(ID, text){
        cy.get(ID).should("contain", text)
    }
    clearField(ID){
        cy.get(ID).clear();
    }
}
export default PageAction
