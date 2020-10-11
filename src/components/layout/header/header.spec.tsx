import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from './header';

beforeEach(jest.clearAllMocks);
afterEach(() => expect.hasAssertions());

describe('`Header`', () => {
  beforeEach(setupTest);

  describe('Template', () => {
    it('should display headings', () => {
      expect(Page.headings).toHaveLength(2);
    });
  });
});

class Page {
  static get headings(): HTMLElement[] {
    return screen.getAllByRole('heading');
  }
}

function setupTest(): void {
  render(<Header />);
}
