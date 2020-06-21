context('Absolutely Studio', () => {
  const elements = {
    title: 'h1',
  };

  beforeEach(() => cy.visit('/projects/absolutely'));

  it('should display title', () => {
    cy.get(elements.title).should('have.text', 'Absolutely Studio');
  });
});
