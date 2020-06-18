```typescript
export const getImageWidth = (): number => {
  const width = window.innerWidth;
  if (!width || width < IMAGE_XS) return IMAGE_XS;

  return Math.ceil(width / 100) * 100;
};
```
