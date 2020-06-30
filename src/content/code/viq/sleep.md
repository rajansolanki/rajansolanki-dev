```ts
export const stopOnSleep = (
  bodies: Body[],
  render: Render,
  engine: Engine
): void => {
  const handleSleepStart = (): void => {
    if (!isAllSleeping(bodies)) return;

    Render.stop(render);
    Engine.clear(engine);
  };

  bodies.forEach((body) => Events.on(body, 'sleepStart', handleSleepStart));
};
```
