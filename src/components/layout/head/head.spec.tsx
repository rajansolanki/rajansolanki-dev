import React from 'react';
import { render, waitFor } from '@testing-library/react';

import { Head } from './head';

jest.mock('gatsby', () => ({
  graphql: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValue({
    site: { siteMetadata: { title: 'Title' } },
  }),
}));

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`Head`', () => {
  beforeEach(setupTest);

  it('should set page title', async () => {
    await waitFor(() => {
      expect(document.title).toBe('Title');
    });
  });
});

function setupTest(): void {
  render(<Head />);
}
