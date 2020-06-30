```ts
this.query.pipe(
  catchNetworkError(
    () => this.bannerService.displayError(`Couldn't load product`),
    this.activeProductQuery
  )
);
```
