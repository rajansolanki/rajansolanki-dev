import React from 'react';
import { Link } from 'gatsby';
import { render, screen } from '@testing-library/react';

import { Code } from 'components';
import Index from './index';

jest.mock('gatsby', () => ({
  graphql: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValue({
    markdownRemark: {
      html: 'html',
    },
  }),
  Link: jest.fn().mockReturnValue(<div>Link</div>),
}));

jest.mock('components', () => ({
  Code: jest.fn().mockReturnValue(<div>CodeComponent</div>),
  Text: jest.fn().mockReturnValue(<div>TextComponent</div>),
}));

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`Index`', () => {
  beforeEach(setupTest);

  it('should display title', () => {
    expect(Page.title).toBeTruthy();
  });

  describe('`Code`', () => {
    it('should be displayed', () => {
      expect(Page.Code).toBeTruthy();
    });

    it('should pass props', () => {
      expect(Code).toHaveBeenCalledWith({ code: 'html' }, {});
    });
  });

  it('should display `Text`', () => {
    expect(Page.Text).toBeTruthy();
  });

  describe('`Link`', () => {
    it('should be displayed', () => {
      expect(Page.Link).toBeTruthy();
    });

    it('should pass props', () => {
      expect(Link).toHaveBeenCalledWith(
        {
          to: '/projects/laura-lea',
          children: 'Laura Lea',
        },
        {}
      );
    });
  });
});

class Page {
  static get title(): HTMLElement {
    return screen.getByText('Hello');
  }

  static get Code(): HTMLElement {
    return screen.getByText('CodeComponent');
  }

  static get Text(): HTMLElement {
    return screen.getByText('TextComponent');
  }

  static get Link(): HTMLElement {
    return screen.getByText('Link');
  }
}

function setupTest(): void {
  render(<Index />);
}
