import React from 'react';
import { render, screen } from '@testing-library/react';

import { Layout, Code } from 'components';
import Absolutely from './absolutely';

jest.mock('gatsby', () => ({
  ...(jest.requireActual('gatsby') as object),
  graphql: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValue({
    inputSet: {
      html: 'inputSetHtml',
    },
    revealStyles: {
      html: 'revealStylesHtml',
    },
    contentEditable: {
      html: 'contentEditableHtml',
    },
    reactAnimations: {
      html: 'reactAnimationsHtml',
    },
    reactForm: {
      html: 'reactFormHtml',
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
afterEach(() => expect.hasAssertions());

describe('`Absolutely`', () => {
  beforeEach(setupTest);

  it('should display text', () => {
    expect(Page.headings).toHaveLength(3);
    expect(Page.text).toBeTruthy();
  });

  describe('`Layout`', () => {
    it('should be displayed', () => {
      expect(Page.Layout).toBeTruthy();
    });

    it('should pass props', () => {
      expect(Layout).toHaveBeenCalledWith(
        { projectTitle: 'Absolutely Studio', children: expect.anything() },
        {}
      );
    });

    describe('`Code`', () => {
      it('should be displayed', () => {
        expect(Page.Code).toHaveLength(5);
      });

      it('should pass props', () => {
        expect(Code).toHaveBeenCalledWith({ code: 'inputSetHtml' }, {});
        expect(Code).toHaveBeenCalledWith({ code: 'revealStylesHtml' }, {});
        expect(Code).toHaveBeenCalledWith({ code: 'contentEditableHtml' }, {});
        expect(Code).toHaveBeenCalledWith({ code: 'reactAnimationsHtml' }, {});
        expect(Code).toHaveBeenCalledWith({ code: 'reactFormHtml' }, {});
      });
    });
  });
});

class Page {
  static get headings(): HTMLElement[] {
    return screen.getAllByRole('heading');
  }

  static get text(): HTMLElement {
    return screen.getByText(/The outcome/);
  }

  static get Layout(): HTMLElement {
    return screen.getByText('LayoutComponent');
  }

  static get Code(): HTMLElement[] {
    return screen.getAllByText('CodeComponent');
  }
}

function setupTest(): void {
  render(<Absolutely />);
}
