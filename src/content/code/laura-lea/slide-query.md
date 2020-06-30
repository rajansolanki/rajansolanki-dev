```graphql
query ProductInfoVariant($id: ID!) {
  active @client {
    variantId @export(as: "id")
  }
  node(id: $id) {
    ... on ProductVariant {
      id
      title
      price
    }
  }
}
```
