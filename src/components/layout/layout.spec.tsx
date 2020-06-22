import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';

import { Job } from './job/job';
import { Intro } from './intro/intro';
import { Link } from './link/link';
import { useDataQuery } from './layout.hooks';
import * as LayoutHelpers from './layout.helpers';
import {
  getCurrentProject,
  getNextJob,
  getNextProject,
} from './layout.helpers';
import { Layout } from './layout';

jest.spyOn(LayoutHelpers, 'getCurrentProject');
jest.spyOn(LayoutHelpers, 'getNextJob');
jest.spyOn(LayoutHelpers, 'getNextProject');

jest.mock('./intro/intro', () => ({
  Intro: jest.fn().mockReturnValue(<div>IntroComponent</div>),
}));
jest.mock('./job/job', () => ({
  Job: jest.fn().mockReturnValue(<div>JobComponent</div>),
}));
jest.mock('./footer/footer', () => ({
  Footer: jest.fn().mockReturnValue(<div>FooterComponent</div>),
}));
jest.mock('./header/header', () => ({
  Header: jest.fn().mockReturnValue(<div>HeaderComponent</div>),
}));
jest.mock('./link/link', () => ({
  Link: jest.fn().mockReturnValue(<div>LinkComponent</div>),
}));
jest.mock('./layout.hooks', () => ({
  useDataQuery: jest.fn().mockReturnValue({
    jobs: {
      edges: [
        {
          node: {
            frontmatter: {
              title: 'job1-title',
              company: 'job1-company',
              date: {
                start: 'job1-date-start',
                end: 'job1-date-end',
              },
            },
            html: 'job1-html',
          },
          next: {
            frontmatter: {
              title: 'job2-title',
              company: 'job2-company',
              date: {
                start: 'job2-date-start',
                end: 'job2-date-end',
              },
            },
            html: 'job2-html',
          },
        },
        {
          node: {
            frontmatter: {
              title: 'job2-title',
              company: 'job2-company',
              date: {
                start: 'job2-date-start',
                end: 'job2-date-end',
              },
            },
            html: 'job2-html',
          },
          next: null,
        },
      ],
    },
    projects: {
      group: [
        {
          edges: [
            {
              node: {
                frontmatter: {
                  title: 'job1-project1-title',
                  slug: 'job1-project1-slug',
                  role: 'job1-project1-role',
                  company: 'job1-company',
                  overview: 'job1-project1-overview',
                },
                html: 'job1-project1-html',
              },
              next: {
                frontmatter: {
                  title: 'job1-project2-title',
                  slug: 'job1-project2-slug',
                  role: 'job1-project2-role',
                  company: 'job1-company',
                  overview: 'job1-project2-overview',
                },
                html: 'job1-project2-html',
              },
            },
            {
              node: {
                frontmatter: {
                  title: 'job1-project2-title',
                  slug: 'job1-project2-slug',
                  role: 'job1-project2-role',
                  company: 'job1-company',
                  overview: 'job1-project2-overview',
                },
                html: 'job1-project2-html',
              },
              next: null,
            },
          ],
        },
        {
          edges: [
            {
              node: {
                frontmatter: {
                  title: 'job2-project1-title',
                  slug: 'job2-project1-slug',
                  role: 'job2-project1-role',
                  company: 'job2-company',
                  overview: 'job2-project1-overview',
                },
                html: 'job2-project1-html',
              },
              next: {
                frontmatter: {
                  title: 'job2-project2-title',
                  slug: 'job2-project2-slug',
                  role: 'job2-project2-role',
                  company: 'job2-company',
                  overview: 'job2-project2-overview',
                },
                html: 'job2-project2-html',
              },
            },
            {
              node: {
                frontmatter: {
                  title: 'job2-project2-title',
                  slug: 'job2-project2-slug',
                  role: 'job2-project2-role',
                  company: 'job2-company',
                  overview: 'job2-project2-overview',
                },
                html: 'job2-project2-html',
              },
              next: null,
            },
          ],
        },
      ],
    },
  }),
}));

let comp: RenderResult;

beforeEach(jest.clearAllMocks);
afterEach(expect.hasAssertions);

describe('`Layout`', () => {
  beforeEach(setupTest);

  it('should call `useDataQuery`', () => {
    expect(useDataQuery).toHaveBeenCalled();
  });

  it('should call `getCurrentProject` with args', () => {
    expect(getCurrentProject).toHaveBeenCalledWith({
      projectTitle: 'job1-project1-title',
      data: useDataQuery(),
    });
  });

  it('should call `getNextJob` with args', () => {
    expect(getNextJob).toHaveBeenCalledWith({
      currentProject: {
        node: {
          frontmatter: {
            title: 'job1-project1-title',
            slug: 'job1-project1-slug',
            role: 'job1-project1-role',
            company: 'job1-company',
            overview: 'job1-project1-overview',
          },
          html: 'job1-project1-html',
        },
        next: {
          frontmatter: {
            title: 'job1-project2-title',
            slug: 'job1-project2-slug',
            role: 'job1-project2-role',
            company: 'job1-company',
            overview: 'job1-project2-overview',
          },
          html: 'job1-project2-html',
        },
      },
      data: useDataQuery(),
    });
  });

  it('should call `getNextProject` with args', () => {
    expect(getNextProject).toHaveBeenCalledWith({
      currentProject: {
        node: {
          frontmatter: {
            title: 'job1-project1-title',
            slug: 'job1-project1-slug',
            role: 'job1-project1-role',
            company: 'job1-company',
            overview: 'job1-project1-overview',
          },
          html: 'job1-project1-html',
        },
        next: {
          frontmatter: {
            title: 'job1-project2-title',
            slug: 'job1-project2-slug',
            role: 'job1-project2-role',
            company: 'job1-company',
            overview: 'job1-project2-overview',
          },
          html: 'job1-project2-html',
        },
      },
      nextJob: {
        frontmatter: {
          title: 'job2-title',
          company: 'job2-company',
          date: {
            start: 'job2-date-start',
            end: 'job2-date-end',
          },
        },
        html: 'job2-html',
      },
      data: useDataQuery(),
    });
  });

  describe('Template', () => {
    it('should render children', () => {
      expect(Page.children).toHaveTextContent('Content');
    });

    describe('`Intro`', () => {
      describe('Index page', () => {
        beforeEach(() =>
          comp.rerender(
            <Layout>
              <div data-testid="children">Content</div>
            </Layout>
          )
        );

        it('should not be displayed', () => {
          expect(Page.Intro).toBeFalsy();
        });
      });

      describe('Project page', () => {
        beforeEach(() =>
          comp.rerender(
            <Layout projectTitle="job1-project1-title">
              <div data-testid="children">Content</div>
            </Layout>
          )
        );

        it('should be displayed', () => {
          expect(Page.Intro).toBeTruthy();
        });

        it('should pass props', () => {
          expect(Intro).toHaveBeenCalledWith(
            {
              title: 'job1-project1-title',
              role: 'job1-project1-role',
              description: 'job1-project1-html',
            },
            {}
          );
        });
      });
    });

    describe('`Header`', () => {
      describe('Project page', () => {
        beforeEach(() =>
          comp.rerender(
            <Layout projectTitle="job1-project1-title">
              <div data-testid="children">Content</div>
            </Layout>
          )
        );

        it('should not be displayed', () => {
          expect(Page.Header).toBeFalsy();
        });
      });

      describe('Index page', () => {
        beforeEach(() =>
          comp.rerender(
            <Layout>
              <div data-testid="children">Content</div>
            </Layout>
          )
        );

        it('should be displayed', () => {
          expect(Page.Header).toBeTruthy();
        });
      });
    });

    describe('`Job`', () => {
      describe('No more jobs', () => {
        beforeEach(() =>
          comp.rerender(
            <Layout projectTitle="job2-project1-title">
              <div data-testid="children">Content</div>
            </Layout>
          )
        );

        it('should not be displayed', () => {
          expect(Page.Job).toBeFalsy();
        });
      });

      describe('Has more jobs', () => {
        describe('Has next project', () => {
          beforeEach(() =>
            comp.rerender(
              <Layout projectTitle="job1-project1-title">
                <div data-testid="children">Content</div>
              </Layout>
            )
          );

          it('should not be displayed', () => {
            expect(Page.Job).toBeFalsy();
          });
        });

        describe('No next project', () => {
          beforeEach(() =>
            comp.rerender(
              <Layout projectTitle="job1-project2-title">
                <div data-testid="children">Content</div>
              </Layout>
            )
          );

          it('should be displayed', () => {
            expect(Page.Job).toBeTruthy();
          });

          it('should pass props', () => {
            expect(Job).toHaveBeenCalledWith(
              {
                company: 'job2-company',
                date: {
                  start: 'job2-date-start',
                  end: 'job2-date-end',
                },
                title: 'job2-title',
                description: 'job2-html',
              },
              {}
            );
          });
        });
      });
    });

    describe('`Link`', () => {
      describe('No next project', () => {
        beforeEach(() =>
          comp.rerender(
            <Layout projectTitle="job2-project2-title">
              <div data-testid="children">Content</div>
            </Layout>
          )
        );

        it('should not be displayed', () => {
          expect(Page.Link).toBeFalsy();
        });
      });

      describe('Has next project', () => {
        beforeEach(() =>
          comp.rerender(
            <Layout projectTitle="job1-project2-title">
              <div data-testid="children">Content</div>
            </Layout>
          )
        );

        it('should be displayed', () => {
          expect(Page.Link).toBeTruthy();
        });

        it('should pass props', () => {
          expect(Link).toHaveBeenCalledWith(
            {
              slug: 'job2-project1-slug',
              title: 'job2-project1-title',
              overview: 'job2-project1-overview',
            },
            {}
          );
        });
      });
    });

    describe('`Footer`', () => {
      describe('Has next project', () => {
        beforeEach(() =>
          comp.rerender(
            <Layout projectTitle="job1-project2-title">
              <div data-testid="children">Content</div>
            </Layout>
          )
        );

        it('should not be displayed', () => {
          expect(Page.Footer).toBeFalsy();
        });
      });

      describe('No next project', () => {
        beforeEach(() =>
          comp.rerender(
            <Layout projectTitle="job2-project2-title">
              <div data-testid="children">Content</div>
            </Layout>
          )
        );

        it('should be displayed', () => {
          expect(Page.Footer).toBeTruthy();
        });
      });
    });
  });
});

class Page {
  static get children(): HTMLElement {
    return screen.getByTestId('children');
  }

  static get Intro(): HTMLElement | null {
    return screen.queryByText('IntroComponent');
  }

  static get Header(): HTMLElement | null {
    return screen.queryByText('HeaderComponent');
  }

  static get Job(): HTMLElement | null {
    return screen.queryByText('JobComponent');
  }

  static get Footer(): HTMLElement | null {
    return screen.queryByText('FooterComponent');
  }

  static get Link(): HTMLElement | null {
    return screen.queryByText('LinkComponent');
  }
}

function setupTest(): void {
  comp = render(
    <Layout projectTitle="job1-project1-title">
      <div data-testid="children">Content</div>
    </Layout>
  );
}
