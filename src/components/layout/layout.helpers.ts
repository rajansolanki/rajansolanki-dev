import {
  AllJobProjectsQuery,
  ProjectEdgeFragment,
  ProjectFragment,
  JobFragment,
} from 'graphql-types';

export const getCurrentProject = ({
  projectTitle,
  data: {
    projects: { group },
  },
}: {
  projectTitle: string | null | undefined;
  data: AllJobProjectsQuery;
}): ProjectEdgeFragment | null => {
  if (!projectTitle) return null;

  const [project] = group
    .map(({ edges }) =>
      edges.find(
        ({ node: { frontmatter } }) => frontmatter?.title === projectTitle
      )
    )
    .filter(Boolean);
  if (!project) throw new Error('No `project`');

  return project;
};

export const getNextJob = ({
  currentProject,
  data: {
    jobs: { edges },
  },
}: {
  currentProject: ProjectEdgeFragment | null;
  data: AllJobProjectsQuery;
}): JobFragment | null => {
  if (!currentProject) return edges[0].node;

  const job = edges.find(
    ({ node: { frontmatter } }) =>
      frontmatter?.company === currentProject.node.frontmatter?.company
  );
  if (!job) throw new Error('No `job`');

  return job.next || null;
};

export const getNextProject = ({
  currentProject,
  nextJob,
  data: {
    projects: { group },
  },
}: {
  currentProject: ProjectEdgeFragment | null;
  nextJob: JobFragment | null;
  data: AllJobProjectsQuery;
}): ProjectFragment | null => {
  if (currentProject?.next) return currentProject.next;
  if (!nextJob) return null;

  const [project] = group
    .map(({ edges }) =>
      edges.find(
        ({ node: { frontmatter } }) =>
          frontmatter?.company === nextJob?.frontmatter?.company
      )
    )
    .filter(Boolean);

  return project?.node || null;
};
