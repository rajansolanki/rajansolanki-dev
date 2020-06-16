import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';

import { Text } from './text';

let comp: RenderResult;

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`Text`', () => {
  beforeEach(setupTest);

  describe('Template', () => {
    describe('Heading', () => {
      it('should be displayed if passed `heading`', () => {
        comp.rerender(
          <Text heading="Heading">
            <p>Content.</p>
          </Text>
        );

        expect(Page.heading).toHaveTextContent('Heading');
      });

      it('should not be displayed if not passed `heading`', () => {
        comp.rerender(
          <Text>
            <p>Content.</p>
          </Text>
        );

        expect(Page.heading).toBeFalsy();
      });
    });

    it('should display text', () => {
      expect(Page.text).toBeTruthy();
    });
  });
});

class Page {
  static get heading(): HTMLElement | null {
    return screen.queryByRole('heading');
  }

  static get text(): HTMLElement {
    return screen.getByText('Content.');
  }
}

function setupTest(): void {
  comp = render(
    <Text>
      <p>Content.</p>
    </Text>
  );
}
