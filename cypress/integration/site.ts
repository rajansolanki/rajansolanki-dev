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
  hoverText: 'Hover',
  hover: 'component-hover a',
  cartText: 'Cart',
  cart: 'component-cart > app-content',
  cartItemsCount: 'component-cart #items-count',
  cartItems: 'component-cart app-cart-item',
  cartItemsQuantity: 'component-cart app-cart-item .current-quantity',
  cartItemsPlus: 'component-cart app-cart-item .quantity-plus',
  cartItemsMinus: 'component-cart app-cart-item .quantity-minus',
  cartItemsRemove: 'component-cart app-cart-item .item-remove',
  cartCheckoutLink: 'component-cart #link',
  searchText: 'Search',
  search: 'component-search input',
  searchClear: 'component-search #clear',
  searchAutocomplete: 'component-search component-autocomplete',
  searchAutocompleteOptions:
    'component-search component-autocomplete component-option',
  slideText: 'Slide',
  slide: 'component-slide > div',
  slideVariantSelect: 'component-slide select',
  slideImageContainer: 'component-slide component-image > div',
  slideImage: 'component-slide component-image img',
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

it('should display hover', () => {
  cy.get(elements.hover).should('not.exist');
  cy.contains(elements.hoverText).scrollIntoView();
  cy.get(elements.hover).should('be.visible');
});

it('should display cart', () => {
  cy.get(elements.cart).should('not.exist');
  cy.contains(elements.cartText).scrollIntoView();
  cy.get(elements.cart).should('be.visible');
  cy.get(elements.cartItemsCount).should('contain.text', 1);
  cy.get(elements.cartItems).should('have.length', 1);
  cy.get(elements.cartItemsCount).should('contain.text', 2);
  cy.get(elements.cartItems).should('have.length', 2);
  cy.get(elements.cartCheckoutLink).should('not.have.class', 'disabled');
  cy.get(elements.cartItemsQuantity).first().should('have.text', 1);
  cy.get(elements.cartItemsPlus).first().click();
  cy.get(elements.cartCheckoutLink).should('have.class', 'disabled');
  cy.get(elements.cartItemsQuantity).first().should('have.text', 2);
  cy.get(elements.cartCheckoutLink).should('not.have.class', 'disabled');
  cy.get(elements.cartItemsRemove).eq(1).click();
  cy.get(elements.cartCheckoutLink).should('have.class', 'disabled');
  cy.get(elements.cartItemsCount).should('contain.text', 1);
  cy.get(elements.cartItems).should('have.length', 1);
  cy.get(elements.cartCheckoutLink).should('not.have.class', 'disabled');
});

it('should display search', () => {
  cy.get(elements.search).should('not.exist');
  cy.contains(elements.searchText).scrollIntoView();
  cy.get(elements.search).should('be.visible').and('not.have.value');
  cy.get(elements.searchClear).should('not.be.visible');
  cy.get(elements.searchAutocomplete).should('not.be.visible');
  cy.get(elements.search).type('pa');
  cy.get(elements.searchClear).should('be.visible');
  cy.get(elements.searchAutocomplete).should('be.visible');
  cy.get(elements.searchAutocompleteOptions)
    .first()
    .should('be.visible')
    .and('contain.text', 'painting')
    .and('not.have.class', 'ng-animating')
    .click();
  cy.get(elements.searchAutocompleteOptions).first().click();
  cy.get(elements.searchAutocomplete).should('not.be.visible');
  cy.get(elements.search).should('have.value', 'painting');
});

it('should display slide', () => {
  cy.get(elements.slide).should('not.exist');
  cy.contains(elements.slideText).scrollIntoView();
  cy.get(elements.slide).should('be.visible');
  cy.get(elements.slideVariantSelect)
    .and('contain', 'Blue')
    .and('contain', 'Black')
    .find(':selected')
    .contains('Blue');
  cy.get(elements.slideImageContainer).should('have.class', 'loaded');
  cy.get(elements.slideImage).should('be.visible');
  cy.get(elements.slideVariantSelect).select('Black');
  cy.get(elements.slideImageContainer).should('have.class', 'loading');
  cy.get(elements.slideImageContainer).should('have.class', 'loaded');
});
