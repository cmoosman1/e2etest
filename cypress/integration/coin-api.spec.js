describe('Handles API call and coin data manipulation', () => {
    it('Displays the user in the list and returns coins', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[data-testid="coinText"]')
        .type('You submitted $2.85');
  
      cy.get('[data-testid="sendButton"]')
        .click();
  
      cy.get('[data-testid="coinText"]')
        .should('have.value', '');
  
      cy.contains('You submitted $2.85');
    });
  });