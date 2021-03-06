type PartialNullable<T> = {
  [K in keyof T]?: PartialNullable<T[K]> | null;
};

declare module '@bit/rajansolanki.dev.load-more' {
  import setup from '@bit/rajansolanki.dev.load-more/dist/index';

  export = setup;
}

declare module '@bit/rajansolanki.dev.loading-bar' {
  import setup from '@bit/rajansolanki.dev.loading-bar/dist/index';

  export = setup;
}

declare module '@bit/rajansolanki.dev.error' {
  import setup from '@bit/rajansolanki.dev.error/dist/index';

  export = setup;
}

declare module '@bit/rajansolanki.dev.masonry' {
  import setup from '@bit/rajansolanki.dev.masonry/dist/index';

  export = setup;
}

declare module '@bit/rajansolanki.dev.hover' {
  import setup from '@bit/rajansolanki.dev.hover/dist/index';

  export = setup;
}

declare module '@bit/rajansolanki.dev.cart' {
  import setup from '@bit/rajansolanki.dev.cart/dist/index';

  export = setup;
}

declare module '@bit/rajansolanki.dev.search' {
  import setup from '@bit/rajansolanki.dev.search/dist/index';

  export = setup;
}

declare module '@bit/rajansolanki.dev.slide' {
  import setup from '@bit/rajansolanki.dev.slide/dist/index';

  export = setup;
}
