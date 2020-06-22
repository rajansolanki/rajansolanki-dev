import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';

import { useVisible, useComponent } from 'shared';
import { Code } from 'components';
import { Masonry } from './masonry';

jest.mock('gatsby', () => ({
  ...(jest.requireActual('gatsby') as object),
  graphql: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValue({
    markdownRemark: {
      html: 'html',
    },
  }),
}));

jest.mock('shared', () => ({
  useVisible: jest.fn().mockReturnValue([() => undefined, false]),
  useComponent: jest.fn(),
}));
jest.mock('components', () => ({
  ...(jest.requireActual('components') as object),
  Code: jest.fn().mockReturnValue(<div>CodeComponent</div>),
}));

let comp: RenderResult;

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`Masonry`', () => {
  beforeEach(setupTest);

  it('should call `useComponent` with `isVisible` arg', () => {
    (useVisible as jest.Mock).mockReturnValueOnce([
      () => undefined,
      'isVisible' as any,
    ]);
    comp.rerender(<Masonry />);

    expect(useComponent).toHaveBeenCalledWith(expect.anything(), 'isVisible');
  });

  describe('Template', () => {
    it('should display text', () => {
      expect(Page.heading).toHaveTextContent('Masonry');
      expect(Page.text).toBeTruthy();
    });

    describe('`Code`', () => {
      it('should be displayed', () => {
        expect(Page.Code).toBeTruthy();
      });

      it('should pass props', () => {
        expect(Code).toHaveBeenCalledWith({ code: 'html' }, {});
      });
    });

    it('should display masonry component', () => {
      expect(Page.masonryComponent).toBeTruthy();
    });
  });
});

class Page {
  static get heading(): HTMLElement {
    return screen.getByRole('heading');
  }

  static get text(): HTMLElement {
    return screen.getByText(/products page/);
  }

  static get Code(): HTMLElement {
    return screen.getByText('CodeComponent');
  }

  static get masonryComponent(): HTMLElement | null {
    return comp.container.querySelector('component-masonry');
  }
}

function setupTest(): void {
  comp = render(<Masonry />);
}
