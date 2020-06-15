import React from 'react';
import { render, screen } from '@testing-library/react';

import Index from './index';

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`Index`', () => {
  beforeEach(setupTest);

  it('should display title', () => {
    expect(Page.title).toBeTruthy();
  });
});

class Page {
  static get title(): HTMLElement {
    return screen.getByText('Hello');
  }
}

function setupTest(): void {
  render(<Index />);
}
