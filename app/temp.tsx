'use client';

import React from 'react';

import dynamic from 'next/dynamic'

// import { useComponent, useVisible } from 'shared';
// import { Text, Code } from 'components';
import { Container } from './masonry.styles';
import { useVisible, useComponent } from 'src/shared/hooks';


console.log('temp.tsx');

(function() {
    if (
        // No Reflect, no classes, no need for shim because native custom elements
        // require ES2015 classes or Reflect.
        typeof window === 'undefined' ||
      window.Reflect === undefined ||
      window.customElements === undefined ||
      // The webcomponentsjs custom elements polyfill doesn't require
      // ES2015-compatible construction (`super()` or `Reflect.construct`).
      window.customElements.polyfillWrapFlushCallback
    ) {
      return;
    }
    const BuiltInHTMLElement = HTMLElement;
    /**
     * With jscompiler's RECOMMENDED_FLAGS the function name will be optimized away.
     * However, if we declare the function as a property on an object literal, and
     * use quotes for the property name, then closure will leave that much intact,
     * which is enough for the JS VM to correctly set Function.prototype.name.
     */
    const wrapperForTheName = {
      'HTMLElement': /** @this {!Object} */ function HTMLElement() {
        return Reflect.construct(
            BuiltInHTMLElement, [], /** @type {!Function} */ (this.constructor));
      }
    };
    window.HTMLElement = wrapperForTheName['HTMLElement'];
    HTMLElement.prototype = BuiltInHTMLElement.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
  })();

    // import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';

// if (typeof window !== 'undefined') {
    
    // }
    import 'zone.js/dist/zone';
const Temp3 = dynamic(() => import('@webcomponents/webcomponentsjs/custom-elements-es5-adapter'), {
    ssr: false,

});
Temp3();

import { NgModuleRef, getPlatform, Type, Injector } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

// console.log('platform', getPlatform(), platformBrowser());


const masonryComponent = import('@rajansolanki/ll-slide');

// console.log('masonry', masonryComponent)


// WORKING
// need to run `yarn temp` && `yarn temp2`, copy over package.json files and replace .mjs in package.json with .js

const Temp = () => {
    const [visibleRef, isVisible] = useVisible();

    useComponent(masonryComponent, true);

return <>
<h1>asdasd</h1>
<div>
      {/* <Text heading="Masonry"> */}
        <p ref={visibleRef}>
          The first challenge was producing a layout that could showcase a large
          number of images. A masonry layout seemed like the best fit, but
          existing solutions fell short. A CSS only layout was too rigid, and JS
          based layouts were either not performant, or did not work well with
          pagination.
        </p>
        <p>
          A hybrid masonry/grid solution was created, utilising CSS Grid and
          dynamically calculated <code>span</code>s.
        </p>
      {/* </Text> */}

      <Container>
        <component-slide />
      </Container>

      {/* <Text> */}
        <p>
          The index-based cache ensures that as products are added and removed,
          they maintain their dimensions and prevent the layout from needing to
          be recalculated.
        </p>
      {/* </Text> */}
    </div>
</>
};

export { Temp as default }