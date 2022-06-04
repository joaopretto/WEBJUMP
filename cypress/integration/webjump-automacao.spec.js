/// <reference types="Cypress" />

describe('WEBJUMP! automation test.', function() {
    beforeEach(function(){
        cy.visit('https://wj-qa-automation-test.github.io/qa-test/');
    })

    //Utilizei o Comando Customizado oferecido pelo Cypress, encontrado na pasta ../support/commands.js
    
    it('must click the "One", "Two" and "Four" buttons and check the same.', function(){

        cy.clickOneTwoFourButtonsAndValidateVisible();
    })

    it('must click the "One", "Two" and "Four" buttons of the iFrame and check the same.', function(){

        cy.iFrameClickOneTwoFourButtonsAndValidateVisible();
    })

    it('fill in the "YourFirstName" field, click on the "One" button, check the "OptionThree", select the "ExampleTwo", and validate the Selenium image.', function(){

        cy.fillFieldYourFirstNameClickOneCheckOptionThreeSelectExempleTwoValidateSelenium();
    })
})