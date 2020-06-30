```ts
class MasonryDirective {
  private dimensions = new Map<number, Dimensions>();

  private getDimensions(index: number): Dimensions {
    const previousDimensions =
      this.dimensions.get(index - 1) ?? initialDimensions;

    const newDimensions = createDimensions(index, previousDimensions);
    this.dimensions.set(index, newDimensions);

    return newDimensions;
  }
}
```
