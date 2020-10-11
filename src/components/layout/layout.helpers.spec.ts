import { AllJobProjectsQuery } from 'graphql-types';
import {
  getCurrentProject,
  getNextJob,
  getNextProject,
} from './layout.helpers';

beforeEach(jest.clearAllMocks);
afterEach(() => expect.hasAssertions());

describe('`getCurrentProject`', () => {
  describe('No `projectTitle`', () => {
    it('should return `null`', () => {
      const res = getCurrentProject({
        projectTitle: null,
        data: {
          projects: {
            group: [
              {
                edges: [
                  { node: { frontmatter: { title: 'title1' } } },
                  { node: { frontmatter: { title: 'title2' } } },
                ],
              },
            ],
          },
        } as AllJobProjectsQuery,
      });

      expect(res).toBe(null);
    });
  });

  describe('Has `projectTitle`', () => {
    it('should throw if project does not exist', () => {
      const res = () =>
        getCurrentProject({
          projectTitle: 'title',
          data: {
            projects: {
              group: [
                {
                  edges: [
                    { node: { frontmatter: { title: 'title1' } } },
                    { node: { frontmatter: { title: 'title2' } } },
                  ],
                },
              ],
            },
          } as AllJobProjectsQuery,
        });

      expect(res).toThrowError('No `project`');
    });

    it('should return project if project does exist', () => {
      const res = getCurrentProject({
        projectTitle: 'title2',
        data: {
          projects: {
            group: [
              {
                edges: [
                  { node: { frontmatter: { title: 'title1' } } },
                  { node: { frontmatter: { title: 'title2' } } },
                ],
              },
            ],
          },
        } as AllJobProjectsQuery,
      });

      expect(res).toEqual({ node: { frontmatter: { title: 'title2' } } });
    });
  });
});

describe('`getNextJob`', () => {
  describe('No `currentProject`', () => {
    it('should return first job', () => {
      const res = getNextJob({
        currentProject: null,
        data: {
          jobs: {
            edges: [
              {
                node: { frontmatter: { company: 'company1' } },
                next: { html: 'company1-next' },
              },
              {
                node: { frontmatter: { company: 'company2' } },
                next: { html: 'company2-next' },
              },
            ],
          },
        } as AllJobProjectsQuery,
      });

      expect(res).toEqual({ frontmatter: { company: 'company1' } });
    });
  });

  describe('Has `currentProject`', () => {
    describe('No `job`', () => {
      it('should throw', () => {
        const res = () =>
          getNextJob({
            currentProject: { node: { frontmatter: { company: 'company' } } },
            data: {
              jobs: {
                edges: [
                  {
                    node: { frontmatter: { company: 'company1' } },
                    next: { html: 'company1-next' },
                  },
                  {
                    node: { frontmatter: { company: 'company2' } },
                    next: { html: 'company2-next' },
                  },
                ],
              },
            } as AllJobProjectsQuery,
          });

        expect(res).toThrowError('No `job`');
      });
    });

    describe('Has `job`', () => {
      it('should return `job` `next` if has `job` `next`', () => {
        const res = getNextJob({
          currentProject: { node: { frontmatter: { company: 'company1' } } },
          data: {
            jobs: {
              edges: [
                {
                  node: { frontmatter: { company: 'company1' } },
                  next: { html: 'company1-next' },
                },
                {
                  node: { frontmatter: { company: 'company2' } },
                  next: { html: 'company2-next' },
                },
              ],
            },
          } as AllJobProjectsQuery,
        });

        expect(res).toEqual({ html: 'company1-next' });
      });

      it('should return `null` if no `job` `next`', () => {
        const res = getNextJob({
          currentProject: { node: { frontmatter: { company: 'company1' } } },
          data: {
            jobs: {
              edges: [
                {
                  node: { frontmatter: { company: 'company1' } },
                  next: undefined,
                },
                {
                  node: { frontmatter: { company: 'company2' } },
                  next: { html: 'company2-next' },
                },
              ],
            },
          } as AllJobProjectsQuery,
        });

        expect(res).toBe(null);
      });
    });
  });
});

describe('`getNextProject`', () => {
  describe('Has `currentProject` `next`', () => {
    it('should return `currentProject` `next`', () => {
      const res = getNextProject({
        currentProject: { node: {}, next: { html: 'next-html' } },
        nextJob: null,
        data: {
          projects: {
            group: [
              {
                edges: [{ node: { frontmatter: { company: 'company1' } } }],
              },
              {
                edges: [{ node: { frontmatter: { company: 'company2' } } }],
              },
            ],
          },
        } as AllJobProjectsQuery,
      });

      expect(res).toEqual({ html: 'next-html' });
    });
  });

  describe('No `currentProject` `next`', () => {
    describe('No `nextJob`', () => {
      it('should return `null`', () => {
        const res = getNextProject({
          currentProject: null,
          nextJob: null,
          data: {
            projects: {
              group: [
                {
                  edges: [{ node: { frontmatter: { company: 'company1' } } }],
                },
                {
                  edges: [{ node: { frontmatter: { company: 'company2' } } }],
                },
              ],
            },
          } as AllJobProjectsQuery,
        });

        expect(res).toBe(null);
      });
    });

    describe('Has `nextJob`', () => {
      it('should return `project` `node` if has `project` `node`', () => {
        const res = getNextProject({
          currentProject: null,
          nextJob: { frontmatter: { company: 'company1' } },
          data: {
            projects: {
              group: [
                {
                  edges: [{ node: { frontmatter: { company: 'company1' } } }],
                },
                {
                  edges: [{ node: { frontmatter: { company: 'company2' } } }],
                },
              ],
            },
          } as AllJobProjectsQuery,
        });

        expect(res).toEqual({ frontmatter: { company: 'company1' } });
      });

      it('should return `null` if no `project` `node`', () => {
        const res = getNextProject({
          currentProject: null,
          nextJob: { frontmatter: { company: 'company' } },
          data: {
            projects: {
              group: [
                {
                  edges: [{ node: { frontmatter: { company: 'company1' } } }],
                },
                {
                  edges: [{ node: { frontmatter: { company: 'company2' } } }],
                },
              ],
            },
          } as AllJobProjectsQuery,
        });

        expect(res).toBe(null);
      });
    });
  });
});
