import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';

import { Job } from './job';

let comp: RenderResult;

beforeEach(jest.clearAllMocks);
afterEach(() => expect.hasAssertions());

describe('`Job`', () => {
  beforeEach(setupTest);

  describe('Template', () => {
    it('should display `company`', () => {
      expect(Page.company).toHaveTextContent('Company');
    });

    describe('Date', () => {
      it('should display start and end date if has `date` `end`', () => {
        comp.rerender(
          <Job
            company="Company"
            date={{ start: 'Start', end: 'End' }}
            title="Title"
            description="Description"
          />
        );

        expect(Page.date).toHaveTextContent('Start – End');
      });

      it('should display start and present if no `date` `end`', () => {
        comp.rerender(
          <Job
            company="Company"
            date={{ start: 'Start' }}
            title="Title"
            description="Description"
          />
        );

        expect(Page.date).toHaveTextContent('Start – Present');
      });
    });

    it('should display `title`', () => {
      expect(Page.title).toBeTruthy();
    });

    it('should display `description`', () => {
      expect(Page.description).toBeTruthy();
    });
  });
});

class Page {
  static get company(): HTMLElement {
    return screen.getByRole('heading');
  }

  static get date(): HTMLElement {
    return screen.getByText(/Start/);
  }

  static get title(): HTMLElement {
    return screen.getByText(/Title/);
  }

  static get description(): HTMLElement {
    return screen.getByText('Description');
  }
}

function setupTest(): void {
  comp = render(
    <Job
      company="Company"
      date={{ start: 'Start', end: 'End' }}
      title="Title"
      description="Descrip<br/>tion"
    />
  );
}
