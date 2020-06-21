context('HKFD', () => {
  const elements = {
    title: 'h1',
  };

  beforeEach(() => cy.visit('/projects/hkfd'));

  it('should display title', () => {
    cy.get(elements.title).should('have.text', 'HKFD');
  });
});
