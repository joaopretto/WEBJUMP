Cypress.Commands.add('clickOneTwoFourButtonsAndValidateVisible', function(){

    cy.get('#panel_body_one #btn_one')
        .click()
        .should('not.be.visible');

    cy.get('#panel_body_one #btn_two')
        .click()
        .should('not.be.visible');

    cy.get('#panel_body_one #btn_link')
        .click()
        .should('not.be.visible');
})

Cypress.Commands.add('iFrameClickOneTwoFourButtonsAndValidateVisible', function(){

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

Cypress.Commands.add('fillFieldYourFirstNameClickOneCheckOptionThreeSelectExempleTwoValidateSelenium', function(){
    
    cy.get('#form_group #first_name')
        .type("João");

    cy.get('#panel_body_one #btn_one')
        .click();

    cy.get('#opt_three')
        .click();

    cy.get('#select_box')
        .select('ExampleTwo');

    cy.get('img[alt="selenium"]')
        .invoke('show')
        .should('be.visible');
})