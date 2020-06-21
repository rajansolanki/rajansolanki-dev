import React from 'react';
import { render, screen } from '@testing-library/react';

import { Intro } from 'components';
import LauraLea from './laura-lea';

jest.mock('gatsby', () => ({
  graphql: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValue({
    markdownRemark: {
      frontmatter: {
        title: 'title',
        role: 'role',
      },
      html: 'html',
    },
  }),
}));

jest.mock('components', () => ({
  Intro: jest.fn().mockReturnValue(<div>IntroComponent</div>),
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

  describe('`Intro`', () => {
    it('should be displayed', () => {
      expect(Page.Intro).toBeTruthy();
    });

    it('should pass props', () => {
      expect(Intro).toHaveBeenCalledWith(
        { title: 'title', role: 'role', description: 'html' },
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
  static get Intro(): HTMLElement {
    return screen.getByText('IntroComponent');
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
