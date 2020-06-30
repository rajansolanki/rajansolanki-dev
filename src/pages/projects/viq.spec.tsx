import React from 'react';
import { render, screen } from '@testing-library/react';

import { Layout, Code } from 'components';
import VIQ from './viq';

jest.mock('gatsby', () => ({
  ...(jest.requireActual('gatsby') as object),
  graphql: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValue({
    sleep: {
      html: 'sleepHtml',
    },
    visible: {
      html: 'visibleHtml',
    },
  }),
}));

jest.mock('components', () => ({
  ...(jest.requireActual('components') as object),
  Layout: jest.fn().mockImplementation(({ children }) => (
    <div>
      <div>LayoutComponent</div>
      {children}
    </div>
  )),
  Code: jest.fn().mockReturnValue(<div>CodeComponent</div>),
}));

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`VIQ`', () => {
  beforeEach(setupTest);

  it('should display text', () => {
    expect(Page.heading).toHaveTextContent('Animation');
    expect(Page.text).toBeTruthy();
  });

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

    describe('`Code`', () => {
      it('should be displayed', () => {
        expect(Page.Code).toHaveLength(2);
      });

      it('should pass props', () => {
        expect(Code).toHaveBeenCalledWith({ code: 'sleepHtml' }, {});
        expect(Code).toHaveBeenCalledWith({ code: 'visibleHtml' }, {});
      });
    });
  });
});

class Page {
  static get heading(): HTMLElement {
    return screen.getByRole('heading');
  }

  static get text(): HTMLElement {
    return screen.getByText(/The result/);
  }

  static get Layout(): HTMLElement {
    return screen.getByText('LayoutComponent');
  }

  static get Code(): HTMLElement[] {
    return screen.getAllByText('CodeComponent');
  }
}

function setupTest(): void {
  render(<VIQ />);
}
