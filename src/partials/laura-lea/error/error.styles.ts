import styled from '@emotion/styled';

export const Error = styled.div`
  overflow: visible;
  position: relative;
  min-height: 100vh;
  padding: 10vh 0;

  component-error {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 8;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`;
