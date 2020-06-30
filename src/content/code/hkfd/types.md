```ts
export interface TextAttributes {
  bold?: boolean;
  italic?: boolean;
  heading?: boolean;
}

export interface Sentence {
  text: string;
  url?: string;
  attributes?: TextAttributes;
}

export interface Text {
  paragraph?: Sentence[];
  list?: Sentence[];
}

export interface TextBlock extends Block {
  type: 'text';
  data: Text[];
}

interface Content {
  title?: string;
  data: (
    | TextBlock
    | ImageBlock
    | GalleryBlock
    | VideoBlock
    | AudioBlock
    | DuoBlock
  )[];
}
```
