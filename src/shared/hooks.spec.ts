import { renderHook, act } from '@testing-library/react-hooks';

import { useVisible, useComponent } from './hooks';

beforeEach(jest.clearAllMocks);
afterEach(() => expect.hasAssertions());

describe('`useComponent`', () => {
  it('should setup component if `shouldInit` is `true`', async () => {
    const setup = jest.fn().mockResolvedValue({ destroy: jest.fn() });
    const { waitForNextUpdate } = renderHook(() =>
      useComponent(
        new Promise((moduleResolve) =>
          moduleResolve({
            default: setup,
          })
        ),
        true
      )
    );

    try {
      await waitForNextUpdate({ timeout: 1 });
      // eslint-disable-next-line no-empty
    } catch {
    } finally {
      expect(setup).toHaveBeenCalled();
    }
  });

  it('should not setup component if `shouldInit` is `false`', async () => {
    const setup = jest.fn().mockResolvedValue({ destroy: jest.fn() });
    const { waitForNextUpdate } = renderHook(() =>
      useComponent(
        new Promise((moduleResolve) =>
          moduleResolve({
            default: setup,
          })
        ),
        false
      )
    );

    try {
      await waitForNextUpdate({ timeout: 1 });
      // eslint-disable-next-line no-empty
    } catch {
    } finally {
      expect(setup).not.toHaveBeenCalled();
    }
  });

  it('should not setup again on rerender', async () => {
    const setup = jest.fn().mockResolvedValue({ destroy: jest.fn() });
    const { waitForNextUpdate, rerender } = renderHook(() =>
      useComponent(
        new Promise((moduleResolve) =>
          moduleResolve({
            default: setup,
          })
        )
      )
    );

    await waitForNextUpdate();
    rerender();

    expect(setup).toHaveBeenCalledTimes(1);
  });

  it('should not set state on unmount if promises are pending', async () => {
    const { unmount } = renderHook(() =>
      useComponent(
        new Promise((moduleResolve) =>
          moduleResolve({
            default: jest.fn().mockResolvedValue({ destroy: jest.fn() }),
          })
        )
      )
    );

    unmount();
    expect(true).toBe(true);
  });

  it('should destroy module on unmount if promises are resolved', async () => {
    const destroy = jest.fn();
    const { waitForNextUpdate, unmount } = renderHook(() =>
      useComponent(
        new Promise((moduleResolve) =>
          moduleResolve({
            default: jest.fn().mockResolvedValue({ destroy }),
          })
        )
      )
    );

    await waitForNextUpdate();
    unmount();

    expect(destroy).toHaveBeenCalled();
  });
});

describe('`useVisible`', () => {
  describe('No `window`', () => {
    beforeEach(() =>
      jest.spyOn(global as any, 'window', 'get').mockReturnValueOnce(undefined)
    );

    it('should not call new `IntersectionObserver`', () => {
      renderHook(() => useVisible());

      expect(IntersectionObserver).not.toHaveBeenCalled();
    });

    it('should return `isVisible` as `false`', () => {
      const { result } = renderHook(() => useVisible());

      expect(result.current[1]).toBe(false);
    });
  });

  describe('Has `window`', () => {
    beforeEach(() =>
      jest.spyOn(global as any, 'window', 'get').mockReturnValueOnce({
        IntersectionObserver: jest
          .fn()
          .mockReturnValue({ observe: jest.fn(), disconnect: jest.fn() }),
      })
    );

    it('should call new `IntersectionObserver` with `handleObserve` and threshold args', () => {
      renderHook(() => useVisible());

      expect(IntersectionObserver).toHaveBeenCalledWith(expect.any(Function), {
        threshold: 1,
      });
    });

    it('should not call new `IntersectionObserver` on rerender', () => {
      const { rerender } = renderHook(() => useVisible());
      expect(IntersectionObserver).toHaveBeenCalledTimes(1);
      rerender();
      expect(IntersectionObserver).toHaveBeenCalledTimes(1);
    });

    it('should return `isVisible` as `false`', () => {
      const { result } = renderHook(() => useVisible());

      expect(result.current[1]).toBe(false);
    });

    describe('`handleObserve`', () => {
      describe('`isIntersecting` is `false`', () => {
        it('should return `isVisible` as `false`', () => {
          const { result } = renderHook(() => useVisible());

          const [
            [handleObserve],
          ] = (IntersectionObserver as jest.Mock).mock.calls;
          act(() => handleObserve([{ isIntersecting: false }]));

          expect(result.current[1]).toBe(false);
        });

        it('should not call `observer` `disconnect`', () => {
          renderHook(() => useVisible());

          const [
            [handleObserve],
          ] = (IntersectionObserver as jest.Mock).mock.calls;
          act(() => handleObserve([{ isIntersecting: false }]));

          expect(
            new IntersectionObserver(jest.fn()).disconnect
          ).not.toHaveBeenCalled();
        });
      });

      describe('`isIntersecting` is `true`', () => {
        it('should return `isVisible` as `true`', () => {
          const { result } = renderHook(() => useVisible());

          const [
            [handleObserve],
          ] = (IntersectionObserver as jest.Mock).mock.calls;
          act(() => handleObserve([{ isIntersecting: true }]));

          expect(result.current[1]).toBe(true);
        });

        it('should call `observer` `disconnect`', () => {
          renderHook(() => useVisible());

          const [
            [handleObserve],
          ] = (IntersectionObserver as jest.Mock).mock.calls;
          act(() => handleObserve([{ isIntersecting: true }]));

          expect(
            new IntersectionObserver(jest.fn()).disconnect
          ).toHaveBeenCalled();
        });
      });
    });

    describe('`refCallback`', () => {
      describe('`ref` passed `null`', () => {
        it('should call `observer` `disconnect`', () => {
          const { result } = renderHook(() => useVisible());
          result.current[0](null);

          expect(
            new IntersectionObserver(jest.fn()).disconnect
          ).toHaveBeenCalled();
        });

        it('should not call `observer` `observe`', () => {
          const { result } = renderHook(() => useVisible());
          result.current[0](null);

          expect(
            new IntersectionObserver(jest.fn()).observe
          ).not.toHaveBeenCalled();
        });
      });

      describe('`ref` passed `HTMLElement`', () => {
        it('should call `observer` `observe` with `el` arg', () => {
          const { result } = renderHook(() => useVisible());
          result.current[0]('el' as any);

          expect(
            new IntersectionObserver(jest.fn()).observe
          ).toHaveBeenCalledWith('el');
        });

        it('should not call `observer` `disconnect`', () => {
          const { result } = renderHook(() => useVisible());
          result.current[0]('el' as any);

          expect(
            new IntersectionObserver(jest.fn()).disconnect
          ).not.toHaveBeenCalled();
        });
      });
    });
  });
});
