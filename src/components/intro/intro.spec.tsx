import React from 'react';
import { render, screen } from '@testing-library/react';

import { Intro } from './intro';

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`Intro`', () => {
  beforeEach(setupTest);

  describe('Template', () => {
    it('should display `title`', () => {
      expect(Page.title).toHaveTextContent('Title');
    });

    it('should display `role`', () => {
      expect(Page.role).toBeTruthy();
    });

    it('should display `description`', () => {
      expect(Page.description).toBeTruthy();
    });
  });
});

class Page {
  static get title(): HTMLElement {
    return screen.getByRole('heading');
  }

  static get role(): HTMLElement {
    return screen.getByText('Role');
  }

  static get description(): HTMLElement {
    return screen.getByText('Content.');
  }
}

function setupTest(): void {
  render(<Intro title="Title" role="Role" description="Cont<br/>ent." />);
}
