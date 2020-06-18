const elements = {
  title: 'h1',
  loadingBar: 'component-loading-bar > div',
  loadMore: 'component-load-more > div',
  loadMoreHexagon: 'component-load-more svg',
  loadMoreButton: 'component-load-more button',
  error: 'component-error > .banner',
  errorAppText: 'component-error + div',
  errorGlobalText: 'component-error + div',
  masonryText: 'Masonry',
  masonry: 'component-masonry img',
};

beforeEach(() => cy.visit('/'));

it('should display title', () => {
  cy.get(elements.title).should('be.visible');
});

it('should display errors', () => {
  cy.get(elements.loadMore).should('not.exist');
  cy.get(elements.loadingBar).scrollIntoView({
    offset: { top: 100, left: 0 },
  });
  cy.get(elements.loadingBar).should('be.visible').and('have.class', 'idle');
  cy.get(elements.loadMore).should('be.visible');
  cy.get(elements.loadingBar).should('have.class', 'loading');
  cy.get(elements.loadMoreHexagon).should('be.visible');
  cy.get(elements.loadMoreButton).should('not.be.visible');
  cy.wait(1000);
  cy.get(elements.loadingBar).should('have.class', 'error');
  cy.get(elements.loadMoreButton).should('be.visible');
  cy.get(elements.loadMoreHexagon).should('not.be.visible');
  cy.get(elements.loadMoreButton).click();
  cy.get(elements.loadMoreButton).should('not.be.visible');
  cy.get(elements.loadingBar).should('have.class', 'loading');
  cy.get(elements.loadMoreHexagon).should('be.visible');

  cy.get(elements.error).should('not.exist');
  cy.get(elements.errorAppText).scrollIntoView({
    offset: { top: -200, left: 0 },
  });
  cy.get(elements.error)
    .should('be.visible')
    .and('contain.text', 'load products');
  cy.get(elements.errorGlobalText).scrollIntoView({
    offset: { top: 100, left: 0 },
  });
  cy.get(elements.error)
    .should('be.visible')
    .and('contain.text', 'an error occurred');
  cy.get(elements.errorGlobalText).scrollIntoView({
    offset: { top: 500, left: 0 },
  });
  cy.get(elements.error).should('not.be.visible');
});

it('should display masonry', () => {
  cy.get(elements.masonry).should('not.exist');
  cy.contains(elements.masonryText).scrollIntoView();
  cy.get(elements.masonry).should('be.visible');
});
