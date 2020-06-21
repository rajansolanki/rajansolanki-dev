import React from 'react';
import { render, screen } from '@testing-library/react';

import Absolutely from './absolutely';

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`Absolutely`', () => {
  beforeEach(setupTest);

  it('should display title', () => {
    expect(Page.title).toBeTruthy();
  });
});

class Page {
  static get title(): HTMLElement {
    return screen.getByText('Absolutely Studio');
  }
}

function setupTest(): void {
  render(<Absolutely />);
}
