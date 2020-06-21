import React from 'react';
import { render, screen } from '@testing-library/react';

import HKFD from './hkfd';

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`HKFD`', () => {
  beforeEach(setupTest);

  it('should display title', () => {
    expect(Page.title).toBeTruthy();
  });
});

class Page {
  static get title(): HTMLElement {
    return screen.getByText('HKFD');
  }
}

function setupTest(): void {
  render(<HKFD />);
}
