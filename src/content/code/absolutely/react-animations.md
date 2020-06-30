```ts
const [ref, getHeight] = useHeight<HTMLDivElement>();
const transitions = useTransition(isOpen, null, {
  from: {
    height: 0,
    transform: 'translateY(-100%)',
  },
  enter: (item) => async (next) => {
    if (!item) return;

    await next({
      height: getHeight(),
      transform: 'translateY(0%)',
    });
  },
  config: config.stiff,
});
```
