const elements = {
  header: 'header',
  title: 'h1',
  navJob: 'main + div h2',
  navLink: '#gatsby-focus-wrapper > a',
  footer: 'footer',
  footerSpacer: 'main + div',
  footerLink: 'footer a',
};

beforeEach(() => cy.visit('/'));

it('should display title', () => {
  cy.get(elements.title).should('be.visible');
});

it('should navigate between projects', () => {
  cy.get(elements.header).should('be.visible');
  cy.get(elements.footer).should('not.exist');
  cy.get(elements.navJob).should('have.text', 'Heckford Advertising');
  cy.get(elements.navLink).should('contain.text', 'HKFD').click();
  cy.url().should('equal', 'http://localhost:8000/projects/hkfd');

  cy.get(elements.header).should('not.exist');
  cy.get(elements.footer).should('not.exist');
  cy.get(elements.navJob).should('have.text', 'Absolutely Studio');
  cy.get(elements.navLink).should('contain.text', 'Laura Lea').click();
  cy.url().should('equal', 'http://localhost:8000/projects/laura-lea');

  cy.get(elements.header).should('not.exist');
  cy.get(elements.footer).should('not.exist');
  cy.get(elements.navJob).should('not.exist');
  cy.get(elements.navLink).should('contain.text', 'VIQ').click();
  cy.url().should('equal', 'http://localhost:8000/projects/viq');

  cy.get(elements.header).should('not.exist');
  cy.get(elements.footer).should('not.exist');
  cy.get(elements.navJob).should('not.exist');
  cy.get(elements.navLink).should('contain.text', 'Absolutely Studio').click();
  cy.url().should('equal', 'http://localhost:8000/projects/absolutely');

  cy.get(elements.header).should('not.exist');
  cy.get(elements.footer).should('exist');
  cy.get(elements.navJob).should('not.exist');
  cy.get(elements.navLink).should('not.exist');
  cy.get(elements.footerLink).should('not.be.visible');
  cy.get(elements.footerSpacer).scrollIntoView();
  cy.get(elements.footerLink).should('be.visible');
});
