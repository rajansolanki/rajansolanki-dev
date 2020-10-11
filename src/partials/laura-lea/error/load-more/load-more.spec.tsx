import React from 'react';
import {
  render,
  screen,
  RenderResult,
  waitFor,
  act,
} from '@testing-library/react';

import { useVisible, useComponent } from 'shared';
import { LoadMore } from './load-more';

jest.mock('shared', () => ({
  useVisible: jest.fn().mockReturnValue([() => undefined, false]),
  useComponent: jest.fn(),
}));

let comp: RenderResult;

beforeEach(jest.clearAllMocks);
afterEach(() => expect.hasAssertions());

describe('`LoadMore`', () => {
  beforeEach(setupTest);

  it('should call `useComponent` with `isVisible` arg', () => {
    expect(useComponent).toHaveBeenCalledWith(expect.anything(), false);
  });

  describe('Template', () => {
    it('should display text', () => {
      expect(Page.text).toBeTruthy();
    });

    describe('Component', () => {
      it('should be displayed', () => {
        expect(Page.loadingBarComponent).toBeTruthy();
        expect(Page.loadMoreComponent).toBeTruthy();
      });

      it('should set `status` as idle', () => {
        expect(Page.loadingBarComponent!.getAttribute('status')).toBe('idle');
        expect(Page.loadMoreComponent!.getAttribute('status')).toBe('idle');
      });

      it('should set `status` as loading then error on load more visible', async () => {
        (useVisible as jest.Mock).mockReturnValueOnce([() => undefined, true]);
        comp.rerender(<LoadMore />);

        expect(Page.loadingBarComponent!.getAttribute('status')).toBe(
          'loading'
        );
        expect(Page.loadMoreComponent!.getAttribute('status')).toBe('loading');

        await waitFor(
          () => {
            expect(Page.loadingBarComponent!.getAttribute('status')).toBe(
              'error'
            );
            expect(Page.loadMoreComponent!.getAttribute('status')).toBe(
              'error'
            );
          },
          { interval: 1000 }
        );
      });

      it('should set `status` as loading then error on `retryClick`', async () => {
        act(() => {
          Page.loadMoreComponent!.dispatchEvent(new Event('retryClick'));
        });

        expect(Page.loadingBarComponent!.getAttribute('status')).toBe(
          'loading'
        );
        expect(Page.loadMoreComponent!.getAttribute('status')).toBe('loading');

        await waitFor(
          () => {
            expect(Page.loadingBarComponent!.getAttribute('status')).toBe(
              'error'
            );
            expect(Page.loadMoreComponent!.getAttribute('status')).toBe(
              'error'
            );
          },
          { interval: 1000 }
        );
      });
    });
  });
});

class Page {
  static get text(): HTMLElement {
    return screen.getByText(/Error states/);
  }

  static get loadingBarComponent(): HTMLElement | null {
    return comp.container.querySelector('component-loading-bar');
  }

  static get loadMoreComponent(): HTMLElement | null {
    return comp.container.querySelector('component-load-more');
  }
}

function setupTest(): void {
  comp = render(<LoadMore />);
}
