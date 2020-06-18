import styled from '@emotion/styled';

export const LoadMore = styled.div`
  overflow: visible;
  position: relative;
  padding: 10vh 0;

  component-loading-bar {
    position: sticky;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 120vh;
`;

export const ComponentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;
