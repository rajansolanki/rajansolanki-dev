context('VIQ', () => {
  const elements = {
    title: 'h1',
  };

  beforeEach(() => cy.visit('/projects/viq'));

  it('should display title', () => {
    cy.get(elements.title).should('have.text', 'VIQ');
  });
});
