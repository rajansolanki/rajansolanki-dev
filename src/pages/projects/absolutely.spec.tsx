import React from 'react';
import { render, screen } from '@testing-library/react';

import { Intro } from 'components';
import Absolutely from './absolutely';

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

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`Absolutely`', () => {
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
});

class Page {
  static get Intro(): HTMLElement {
    return screen.getByText('IntroComponent');
  }
}

function setupTest(): void {
  render(<Absolutely />);
}
