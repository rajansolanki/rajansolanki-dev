import React from 'react';
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
}));

jest.mock('components', () => ({
  Code: jest.fn().mockReturnValue(<div>CodeComponent</div>),
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
});

class Page {
  static get title(): HTMLElement {
    return screen.getByText('Hello');
  }

  static get Code(): HTMLElement {
    return screen.getByText('CodeComponent');
  }
}

function setupTest(): void {
  render(<Index />);
}
