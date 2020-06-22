import React from 'react';
import { render, screen } from '@testing-library/react';

import { Code, Layout } from 'components';
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
  Layout: jest.fn().mockImplementation(({ children }) => (
    <div>
      <div>LayoutComponent</div>
      {children}
    </div>
  )),
}));

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`Index`', () => {
  beforeEach(setupTest);

  it('should display title', () => {
    expect(Page.title).toBeTruthy();
  });

  describe('`Layout`', () => {
    it('should be displayed', () => {
      expect(Page.Layout).toBeTruthy();
    });

    it('should pass props', () => {
      expect(Layout).toHaveBeenCalledWith(
        { projectTitle: undefined, children: expect.anything() },
        {}
      );
    });
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
});

class Page {
  static get title(): HTMLElement {
    return screen.getByText('Hello');
  }

  static get Layout(): HTMLElement {
    return screen.getByText('LayoutComponent');
  }

  static get Code(): HTMLElement {
    return screen.getByText('CodeComponent');
  }

  static get Text(): HTMLElement {
    return screen.getByText('TextComponent');
  }
}

function setupTest(): void {
  render(<Index />);
}
