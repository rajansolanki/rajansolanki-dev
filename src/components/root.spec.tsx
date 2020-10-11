import React from 'react';
import { render, screen } from '@testing-library/react';

import { Root } from './root';

beforeEach(jest.clearAllMocks);
afterEach(() => expect.hasAssertions());

describe('`Root`', () => {
  beforeEach(setupTest);

  describe('Template', () => {
    it('should render children', () => {
      expect(Page.children).toBeTruthy();
    });
  });
});

class Page {
  static get children(): HTMLElement {
    return screen.getByText('Content');
  }
}

function setupTest(): void {
  render(
    <Root path="/path">
      <div>Content</div>
    </Root>
  );
}
