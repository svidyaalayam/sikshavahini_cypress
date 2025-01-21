
describe('headers tests', () => {
    beforeEach('visit homepage', () => {
        cy.visit('http://localhost:5173/')
    })

    it('displays headers of the page', () => {
        cy.get('.fontup3').should('have.text', 'బాల ముకుందము')
      })
})