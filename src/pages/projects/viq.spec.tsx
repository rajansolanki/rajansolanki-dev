import React from 'react';
import { render, screen } from '@testing-library/react';

import VIQ from './viq';

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`VIQ`', () => {
  beforeEach(setupTest);

  it('should display title', () => {
    expect(Page.title).toBeTruthy();
  });
});

class Page {
  static get title(): HTMLElement {
    return screen.getByText('VIQ');
  }
}

function setupTest(): void {
  render(<VIQ />);
}
