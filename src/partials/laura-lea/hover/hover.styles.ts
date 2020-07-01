import styled from '@emotion/styled';

import { Code as CodeComponent } from 'components';

export const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  background: var(--grey-dark);

  component-hover {
    flex-shrink: 0;
    min-width: 175px;
    margin: 2em;
  }
`;

export const Code = styled(CodeComponent)`
  margin-left: 0;
  margin-right: 0;
  background: none;
`;
