import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';

import { useVisible, useComponent } from 'shared';
import { Code } from 'components';
import { Slide } from './slide';

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

describe('`Slide`', () => {
  beforeEach(setupTest);

  it('should call `useComponent` with `isVisible` arg', () => {
    (useVisible as jest.Mock).mockReturnValueOnce([
      () => undefined,
      'isVisible' as any,
    ]);
    comp.rerender(<Slide />);

    expect(useComponent).toHaveBeenCalledWith(expect.anything(), 'isVisible');
  });

  describe('Template', () => {
    it('should display text', () => {
      expect(Page.heading).toHaveTextContent('Slide');
      expect(Page.text).toBeTruthy();
    });

    describe('`Code`', () => {
      it('should be displayed', () => {
        expect(Page.Code).toBeTruthy();
      });

      it('should pass props', () => {
        expect(Code).toHaveBeenCalledWith(
          { code: 'html', className: expect.any(String) },
          {}
        );
      });
    });

    it('should display slide component', () => {
      expect(Page.slideComponent).toBeTruthy();
    });
  });
});

class Page {
  static get heading(): HTMLElement {
    return screen.getByRole('heading');
  }

  static get text(): HTMLElement {
    return screen.getByText(/slider/);
  }

  static get Code(): HTMLElement {
    return screen.getByText('CodeComponent');
  }

  static get slideComponent(): HTMLElement | null {
    return comp.container.querySelector('component-slide');
  }
}

function setupTest(): void {
  comp = render(<Slide />);
}
