```ts
class HoverDirective {
  private handleMove(event: MouseEvent | TouchEvent): void {
    if (!event.target || !(event.target instanceof HTMLElement)) return;

    const { pageX, pageY } = getPagePosition(event);
    const { left, top, width, height } = event.target.getBoundingClientRect();

    const x = pageX - left - width;
    const y = pageY - window.scrollY - top - height;

    this.setStyles(x, y);
  }

  private addListeners(): void {
    this.el.nativeElement.addEventListener('touchmove', this.handleMoveBound, {
      passive: true,
    });
    this.el.nativeElement.addEventListener('mousemove', this.handleMoveBound, {
      passive: true,
    });
  }
}
```
