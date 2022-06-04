/// <reference types="Cypress" />

describe('WEBJUMP! automation test.', function() {
    beforeEach(function(){
        cy.visit('https://wj-qa-automation-test.github.io/qa-test/');
    })
    it('must click the "One", "Two" and "Four" buttons and check the same.', function(){
        cy.get('#panel_body_one #btn_one').click().should('not.be.visible');
        cy.get('#panel_body_one #btn_two').click().should('not.be.visible');
        cy.get('#panel_body_one #btn_link').click().should('not.be.visible');
    })
    it('must click the "One", "Two" and "Four" buttons of the iFrame and check the same.', function(){
        cy.get('#iframe_panel_body > iframe')
          .its('0.contentDocument.body')
          .find('#btn_one')
          .click()
          .should('not.be.visible');

        cy.get('#iframe_panel_body > iframe')
          .its('0.contentDocument.body')
          .find('#btn_two')
          .click()
          .should('not.be.visible');

        cy.get('#iframe_panel_body > iframe')
          .its('0.contentDocument.body')
          .find('#btn_link')
          .click()
          .should('not.be.visible');
    })
    it('fill in the "YourFirstName" field, click on the "One" button, check the "OptionThree", select the "ExampleTwo", and validate the Selenium image.', function(){
        cy.get('#form_group #first_name').type("João");
        cy.get('#panel_body_one #btn_one').click();
        cy.get('#opt_three').click();
        cy.get('#select_box').select('ExampleTwo');
        cy.get('img[alt="selenium"]').invoke('show').should('be.visible');
    })
})