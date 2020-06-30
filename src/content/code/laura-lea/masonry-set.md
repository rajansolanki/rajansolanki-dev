```ts
class MasonryDirective {
  private setDimensions(el: ElementRef<HTMLElement>, index: number): void {
    const { height, width } = this.getDimensions(index);

    this.renderer.setStyle(
      el.nativeElement,
      'grid-column-end',
      `span ${width}`
    );
    this.renderer.setStyle(el.nativeElement, 'grid-row-end', `span ${height}`);
  }
}
```
