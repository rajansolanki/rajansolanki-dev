const elements = {
  title: 'h1',
  navJob: 'h2',
  navLink: '#gatsby-focus-wrapper > a',
};

beforeEach(() => cy.visit('/'));

it('should display title', () => {
  cy.get(elements.title).should('be.visible');
});

it('should navigate between projects', () => {
  cy.get(elements.navJob).should('have.text', 'Heckford Advertising');
  cy.get(elements.navLink).should('contain.text', 'HKFD').click();
  cy.url().should('equal', 'http://localhost:8000/projects/hkfd');

  cy.get(elements.navJob).should('have.text', 'Absolutely Studio');
  cy.get(elements.navLink).should('contain.text', 'Laura Lea').click();
  cy.url().should('equal', 'http://localhost:8000/projects/laura-lea');

  cy.get(elements.navJob).should('not.exist');
  cy.get(elements.navLink).should('contain.text', 'VIQ').click();
  cy.url().should('equal', 'http://localhost:8000/projects/viq');

  cy.get(elements.navJob).should('not.exist');
  cy.get(elements.navLink).should('contain.text', 'Absolutely Studio').click();
  cy.url().should('equal', 'http://localhost:8000/projects/absolutely');

  cy.get(elements.navJob).should('not.exist');
  cy.get(elements.navLink).should('not.exist');
});
