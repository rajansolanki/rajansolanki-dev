import React from 'react';
import { render, screen } from '@testing-library/react';

import { Layout } from 'components';
import VIQ from './viq';

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
  Layout: jest.fn().mockImplementation(({ children }) => (
    <div>
      <div>LayoutComponent</div>
      {children}
    </div>
  )),
}));

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`VIQ`', () => {
  beforeEach(setupTest);

  describe('`Layout`', () => {
    it('should be displayed', () => {
      expect(Page.Layout).toBeTruthy();
    });

    it('should pass props', () => {
      expect(Layout).toHaveBeenCalledWith(
        { projectTitle: 'VIQ', children: expect.anything() },
        {}
      );
    });
  });
});

class Page {
  static get Layout(): HTMLElement {
    return screen.getByText('LayoutComponent');
  }
}

function setupTest(): void {
  render(<VIQ />);
}
