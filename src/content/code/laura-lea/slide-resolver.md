```ts
export const isActiveVariantResolver: ResolverFn<
  ResolverTypeWrapper<boolean>,
  ProductVariant,
  ResolverContext,
  {}
> = ({ id }, _args, { cache }) => {
  const activeData = cache.readQuery<ActiveVariantIdQuery>({
    query: ActiveVariantIdDocument,
  });

  return id === activeData?.active.variantId;
};
```
