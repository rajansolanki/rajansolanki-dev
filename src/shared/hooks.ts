import { useState, useEffect, useCallback } from 'react';
import { NgModuleRef } from '@angular/core';

export const useComponent = (
  importPath: Promise<{
    default: () => Promise<NgModuleRef<unknown>>;
  }>,
  shouldInit: boolean | null = true
): void => {
  const [module, setModule] = useState<NgModuleRef<unknown> | null>(null);

  useEffect(() => {
    let isDestroyed = false;

    const createModule = async (): Promise<void> => {
      const { default: setup } = await importPath;
      const moduleRes = await setup();
      if (isDestroyed) return;

      setModule(moduleRes);
    };
    shouldInit && !module && createModule();

    return (): void | undefined => {
      isDestroyed = true;
      module?.destroy();
    };
  }, [importPath, module, shouldInit]);
};

export type useVisible = [(el: HTMLElement | null) => void, null | boolean];
export const useVisible = (): useVisible => {
  const [isVisible, setIsVisible] = useState<null | boolean>(null);

  useEffect(() => setIsVisible(false), []);

  const [observer] = useState(() => {
    const handleObserve: IntersectionObserverCallback = ([
      { isIntersecting },
    ]) => {
      if (!isIntersecting) return;

      setIsVisible(true);
      observer?.disconnect();
    };

    return typeof window !== 'undefined'
      ? new IntersectionObserver(handleObserve, {
          threshold: 1,
        })
      : null;
  });

  const refCallback = useCallback(
    (el: HTMLElement | null) => {
      if (!el) return observer?.disconnect();

      return observer?.observe(el);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [observer]
  );

  return [refCallback, isVisible];
};
