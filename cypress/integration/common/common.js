import {defineStep} from 'cypress-cucumber-preprocessor/steps'

defineStep('I wait for {int} milliseconds', time => {
    cy.wait(time)
})