import React from 'react';
import { render, screen } from '@testing-library/react';

import Index from './index';

jest.mock('components', () => ({
  Layout: jest.fn().mockReturnValue(<div>LayoutComponent</div>),
}));

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`Index`', () => {
  beforeEach(setupTest);

  it('should display `Layout`', () => {
    expect(Page.Layout).toBeTruthy();
  });
});

class Page {
  static get Layout(): HTMLElement {
    return screen.getByText('LayoutComponent');
  }
}

function setupTest(): void {
  render(<Index />);
}
