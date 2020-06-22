import React from 'react';
import { render, screen } from '@testing-library/react';

import { Footer } from './footer';

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`Footer`', () => {
  beforeEach(setupTest);

  describe('Template', () => {
    it('should display link', () => {
      expect(Page.link).toBeTruthy();
    });
  });
});

class Page {
  static get link(): HTMLElement {
    return screen.getByRole('link');
  }
}

function setupTest(): void {
  render(<Footer />);
}
