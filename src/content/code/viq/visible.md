```ts
export const onVisible = (
  el: HTMLElement,
  handleVisible: () => unknown
): void => {
  const handleObserved: IntersectionObserverCallback = (
    [{ isIntersecting }],
    observer
  ) => {
    if (!isIntersecting) return;

    observer.disconnect();
    handleVisible();
  };

  const observer = new IntersectionObserver(handleObserved, {
    threshold: 0,
  });
  observer.observe(el);
};
```
