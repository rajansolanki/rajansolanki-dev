import React from 'react';
import { render, screen } from '@testing-library/react';

import { Error } from './error';

jest.mock('./load-more/load-more', () => ({
  LoadMore: jest.fn().mockReturnValue(<div>LoadMoreComponent</div>),
}));
jest.mock('./banner/banner', () => ({
  Banner: jest.fn().mockReturnValue(<div>BannerComponent</div>),
}));

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`Error`', () => {
  beforeEach(setupTest);

  it('should display `LoadMore`', () => {
    expect(Page.LoadMore).toBeTruthy();
  });

  it('should display `Banner`', () => {
    expect(Page.Banner).toBeTruthy();
  });
});

class Page {
  static get LoadMore(): HTMLElement {
    return screen.getByText('LoadMoreComponent');
  }

  static get Banner(): HTMLElement {
    return screen.getByText('BannerComponent');
  }
}

function setupTest(): void {
  render(<Error />);
}
