import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';

import { useVisible, useComponent } from 'shared';
import { Code } from 'components';
import { Banner } from './banner';

jest.mock('gatsby', () => ({
  ...(jest.requireActual('gatsby') as object),
  graphql: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValue({
    bannerDisplay: {
      html: 'bannerDisplayHtml',
    },
    bannerCatch: {
      html: 'bannerCatchHtml',
    },
    bannerStream: {
      html: 'bannerStreamHtml',
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

describe('`Banner`', () => {
  beforeEach(setupTest);

  it('should call `useComponent` with `appIsVisible` arg', () => {
    (useVisible as jest.Mock).mockReturnValueOnce([
      () => undefined,
      'appIsVisible' as any,
    ]);
    comp.rerender(<Banner />);

    expect(useComponent).toHaveBeenCalledWith(
      expect.anything(),
      'appIsVisible'
    );
  });

  describe('Template', () => {
    it('should display text', () => {
      expect(Page.heading).toHaveTextContent('Errors');
      expect(Page.appText).toBeTruthy();
      expect(Page.globalText).toBeTruthy();
    });

    describe('`Code`', () => {
      it('should be displayed', () => {
        expect(Page.Code).toHaveLength(3);
      });

      it('should pass props', () => {
        expect(Code).toHaveBeenCalledWith({ code: 'bannerDisplayHtml' }, {});
        expect(Code).toHaveBeenCalledWith({ code: 'bannerCatchHtml' }, {});
        expect(Code).toHaveBeenCalledWith({ code: 'bannerStreamHtml' }, {});
      });
    });

    describe('Error component', () => {
      it('should be displayed', () => {
        expect(Page.errorComponent).toBeTruthy();
      });

      it('should set `type` as app', () => {
        expect(Page.errorComponent!.getAttribute('type')).toBe('app');
      });

      it('should set `type` as global if global text is visible', () => {
        (useVisible as jest.Mock).mockReturnValueOnce([() => undefined, false]);
        (useVisible as jest.Mock).mockReturnValueOnce([() => undefined, true]);
        (useVisible as jest.Mock).mockReturnValueOnce([() => undefined, false]);
        comp.rerender(<Banner />);

        expect(Page.errorComponent!.getAttribute('type')).toBe('global');
      });

      it('should set `type` as `undefined` if end is visible', () => {
        (useVisible as jest.Mock).mockReturnValueOnce([() => undefined, false]);
        (useVisible as jest.Mock).mockReturnValueOnce([() => undefined, false]);
        (useVisible as jest.Mock).mockReturnValueOnce([() => undefined, true]);
        comp.rerender(<Banner />);

        expect(Page.errorComponent!.getAttribute('type')).toBeFalsy();
      });
    });
  });
});

class Page {
  static get heading(): HTMLElement {
    return screen.getByRole('heading');
  }

  static get appText(): HTMLElement {
    return screen.getByText(/Since the concept/);
  }

  static get globalText(): HTMLElement {
    return screen.getByText(/If things were/);
  }

  static get Code(): HTMLElement[] {
    return screen.getAllByText('CodeComponent');
  }

  static get errorComponent(): HTMLElement | null {
    return comp.container.querySelector('component-error');
  }
}

function setupTest(): void {
  comp = render(<Banner />);
}
