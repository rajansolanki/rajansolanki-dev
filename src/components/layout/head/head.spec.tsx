import React from 'react';
import { render, waitFor, RenderResult } from '@testing-library/react';

import { Head } from './head';

jest.mock('gatsby', () => ({
  graphql: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValue({
    site: { siteMetadata: { title: 'Title' } },
  }),
}));

let comp: RenderResult;

beforeEach(jest.clearAllMocks);
afterEach(() => expect.hasAssertions());

describe('`Head`', () => {
  beforeEach(setupTest);

  it('should set page title as site title if not passed `title`', async () => {
    comp.rerender(<Head />);

    await waitFor(() => {
      expect(document.title).toBe('Title');
    });
  });

  it('should set page title as combined if passed `title`', async () => {
    comp.rerender(<Head title="Project" />);

    await waitFor(() => {
      expect(document.title).toBe('Title – Project');
    });
  });
});

function setupTest(): void {
  comp = render(<Head />);
}
