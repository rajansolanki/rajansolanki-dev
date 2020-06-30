```ts
class ProductsComponent {
  private getQueryData(
    query: string
  ): Observable<
    [ApolloQueryResult<ProductsQuery>, ApolloQueryResult<ProductTagsQuery>]
  > {
    return combineLatest([
      this.getProducts(query),
      this.getProductTags(query),
    ]).pipe(takeUntil(this.search$.pipe(skip(1))));
  }
}
```
