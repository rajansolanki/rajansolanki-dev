```ts
export const addVariantToCache = (
  { product: { id, title }, variant }: CheckoutChangeAdd,
  cache: CheckoutMutationFragment | null
): CheckoutMutationFragment['lineItems']['edges'] => {
  const newItem: CheckoutMutationItem = {
    node: {
      id,
      title,
      variant,
      quantity: 1,
      __typename: 'CheckoutLineItem',
    },
    __typename: 'CheckoutLineItemEdge',
  };

  return cache ? [...cache.lineItems.edges, newItem] : [newItem];
};
```
