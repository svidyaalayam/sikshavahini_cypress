describe('sikshavahini sample tests', () => {
    beforeEach('visit homepage', () => {
        cy.visit('https://gray-field-070f4930f.4.azurestaticapps.net/')
    })

    it('changing language to sanskrit is updating header to sanskrit', () => {
        cy.get('.dropdown > .btn').click();
        cy.get(':nth-child(2) > .dropdown-item').click();
        cy.get('.fontup3').should('have.text', 'बालमुकुन्दम्‌');
      })

    it('edit title should update the title', () => {
      cy.get('.col-1 > div > .btn').click();
        cy.get('.mb-4 > #inputField').type('telugu');
        cy.get('.popup > .btn').click();
        cy.get('.col-11 > .text-center').should('have.text', 'తెలుగు');         
    })      
})