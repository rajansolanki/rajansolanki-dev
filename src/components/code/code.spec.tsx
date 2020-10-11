import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';

import { Code } from './code';

let comp: RenderResult;

beforeEach(jest.clearAllMocks);
afterEach(() => expect.hasAssertions());

describe('`Code`', () => {
  beforeEach(setupTest);

  describe('Template', () => {
    it('should display code', () => {
      expect(Page.code).toBeTruthy();
    });

    it('should set `className` if passed', () => {
      comp.rerender(<Code className="className" code="Cont<br/>ent." />);

      expect(Page.code).toHaveClass('className');
    });
  });
});

class Page {
  static get code(): HTMLElement {
    return screen.getByText('Content.');
  }
}

function setupTest(): void {
  comp = render(<Code code="Cont<br/>ent." />);
}
