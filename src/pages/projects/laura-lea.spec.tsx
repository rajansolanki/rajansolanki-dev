import React from 'react';
import { render, screen } from '@testing-library/react';

import { Layout } from 'components';
import LauraLea from './laura-lea';

jest.mock('components', () => ({
  ...(jest.requireActual('components') as object),
  Layout: jest.fn().mockImplementation(({ children }) => (
    <div>
      <div>LayoutComponent</div>
      {children}
    </div>
  )),
}));
jest.mock('partials', () => ({
  Error: jest.fn().mockReturnValue(<div>ErrorComponent</div>),
  Masonry: jest.fn().mockReturnValue(<div>MasonryComponent</div>),
  Hover: jest.fn().mockReturnValue(<div>HoverComponent</div>),
  Cart: jest.fn().mockReturnValue(<div>CartComponent</div>),
  Search: jest.fn().mockReturnValue(<div>SearchComponent</div>),
  Slide: jest.fn().mockReturnValue(<div>SlideComponent</div>),
}));

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`LauraLea`', () => {
  beforeEach(setupTest);

  it('should display text', () => {
    expect(Page.text).toBeTruthy();
  });

  describe('`Layout`', () => {
    it('should be displayed', () => {
      expect(Page.Layout).toBeTruthy();
    });

    it('should pass props', () => {
      expect(Layout).toHaveBeenCalledWith(
        { projectTitle: 'Laura Lea', children: expect.anything() },
        {}
      );
    });
  });

  it('should display components', () => {
    expect(Page.Masonry).toBeTruthy();
    expect(Page.Search).toBeTruthy();
    expect(Page.Error).toBeTruthy();
    expect(Page.Hover).toBeTruthy();
    expect(Page.Cart).toBeTruthy();
    expect(Page.Slide).toBeTruthy();
  });
});

class Page {
  static get text(): HTMLElement {
    return screen.getByText(/Shopify was/);
  }

  static get Layout(): HTMLElement {
    return screen.getByText('LayoutComponent');
  }

  static get Error(): HTMLElement {
    return screen.getByText('ErrorComponent');
  }

  static get Masonry(): HTMLElement {
    return screen.getByText('MasonryComponent');
  }

  static get Hover(): HTMLElement {
    return screen.getByText('HoverComponent');
  }

  static get Cart(): HTMLElement {
    return screen.getByText('CartComponent');
  }

  static get Search(): HTMLElement {
    return screen.getByText('SearchComponent');
  }

  static get Slide(): HTMLElement {
    return screen.getByText('SlideComponent');
  }
}

function setupTest(): void {
  render(<LauraLea />);
}
