import React from 'react';
import { render, screen } from '@testing-library/react';

import { Link } from './link';

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`Link`', () => {
  beforeEach(setupTest);

  describe('Template', () => {
    describe('Link', () => {
      it('should be displayed', () => {
        expect(Page.link).toBeTruthy();
      });

      it('should set `href`', () => {
        expect(Page.link).toHaveAttribute('href', '/projects/slug');
      });
    });

    it('should display `title`', () => {
      expect(Page.title).toHaveTextContent('Title');
    });

    it('should display `overview`', () => {
      expect(Page.overview).toBeTruthy();
    });
  });
});

class Page {
  static get link(): HTMLElement {
    return screen.getByRole('link');
  }

  static get title(): HTMLElement {
    return screen.getByRole('heading');
  }

  static get overview(): HTMLElement {
    return screen.getByText('Overview');
  }
}

function setupTest(): void {
  render(<Link slug="slug" title="Title" overview="Overview" />);
}
