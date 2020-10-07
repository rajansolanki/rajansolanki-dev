import styled from '@emotion/styled';

import { CONTAINER } from 'styles';

export const Job = styled.div`
  ${CONTAINER}
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 0;
  min-height: 100vh;

  h2 {
    margin: 0;
  }
`;

export const JobMeta = styled.div`
  color: var(--grey-dark-text);

  p {
    margin-top: 0.5em;
  }
`;

export const JobDescription = styled.div`
  margin: 5vh 0;

  ul {
    list-style: none;
  }
`;
