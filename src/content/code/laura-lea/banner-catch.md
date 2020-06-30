```ts
export const catchNetworkError = <T>(
  actionHandler: () => Observable<void>,
  query?: QueryRef<any, any>
): UnaryFunction<Observable<T>, Observable<T>> =>
  pipe(
    retryWhen((err) =>
      err.pipe(
        concatMap(actionHandler),
        tap((_) => query?.resetLastResults())
      )
    )
  );
```
