import styled from '@emotion/styled';

export const Banner = styled.div`
  overflow: auto;
  position: relative;
  min-height: 100vh;
  padding: 10vh 0;

  component-error {
    position: fixed;
    left: 0;
    right: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`;
