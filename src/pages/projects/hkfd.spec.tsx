import React from 'react';
import { render, screen } from '@testing-library/react';

import { Layout, Code } from 'components';
import HKFD from './hkfd';

jest.mock('gatsby', () => ({
  ...(jest.requireActual('gatsby') as object),
  graphql: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValue({
    types: {
      html: 'typesHtml',
    },
    template: {
      html: 'templateHtml',
    },
    server: {
      html: 'serverHtml',
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

describe('`HKFD`', () => {
  beforeEach(setupTest);

  it('should display text', () => {
    expect(Page.headings).toHaveLength(2);
    expect(Page.text).toBeTruthy();
  });

  describe('`Layout`', () => {
    it('should be displayed', () => {
      expect(Page.Layout).toBeTruthy();
    });

    it('should pass props', () => {
      expect(Layout).toHaveBeenCalledWith(
        { projectTitle: 'HKFD', children: expect.anything() },
        {}
      );
    });

    describe('`Code`', () => {
      it('should be displayed', () => {
        expect(Page.Code).toHaveLength(3);
      });

      it('should pass props', () => {
        expect(Code).toHaveBeenCalledWith({ code: 'typesHtml' }, {});
        expect(Code).toHaveBeenCalledWith({ code: 'templateHtml' }, {});
        expect(Code).toHaveBeenCalledWith({ code: 'serverHtml' }, {});
      });
    });
  });
});

class Page {
  static get headings(): HTMLElement[] {
    return screen.getAllByRole('heading');
  }

  static get text(): HTMLElement {
    return screen.getByText(/The end result/);
  }

  static get Layout(): HTMLElement {
    return screen.getByText('LayoutComponent');
  }

  static get Code(): HTMLElement[] {
    return screen.getAllByText('CodeComponent');
  }
}

function setupTest(): void {
  render(<HKFD />);
}
