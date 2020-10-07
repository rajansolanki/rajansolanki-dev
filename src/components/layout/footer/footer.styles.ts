import styled from '@emotion/styled';

const height = '100vh';

export const Spacer = styled.div`
  margin-bottom: ${height};
  padding-top: 50vh;
  background: var(--white);
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${height};
  font-size: 1.5em;
  background: var(--black);
  z-index: -1;
`;
