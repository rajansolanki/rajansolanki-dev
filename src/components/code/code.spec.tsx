import React from 'react';
import { render, screen } from '@testing-library/react';

import { Code } from './code';

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`Code`', () => {
  beforeEach(setupTest);

  describe('Template', () => {
    it('should display code', () => {
      expect(Page.code).toBeTruthy();
    });
  });
});

class Page {
  static get code(): HTMLElement {
    return screen.getByText('Content.');
  }
}

function setupTest(): void {
  render(<Code code="<p>Cont<br/>ent.<p>" />);
}
