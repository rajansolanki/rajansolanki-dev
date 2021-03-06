import styled from '@emotion/styled';

import { Code as CodeComponent } from 'components';

export const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  min-height: 70vh;
  background: var(--grey-dark);

  component-slide {
    min-width: 30%;
    margin: 2em;
  }

  & > div {
    overflow: hidden;
  }
`;

export const Code = styled(CodeComponent)`
  margin-left: 0;
  margin-right: 0;
  background: none;
`;
