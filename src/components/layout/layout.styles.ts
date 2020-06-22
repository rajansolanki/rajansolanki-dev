import styled from '@emotion/styled';
import { css } from '@emotion/core';

type TimelineProps = {
  type: 'job' | 'project';
};

const CircleRadius = 10;
const Pseudo = css`
  content: '';
  display: block;
  margin: 0 auto;
  background: var(--grey-medium);
`;

const TimelineDot = css`
  &::before {
    ${Pseudo}
    height: ${CircleRadius}px;
    width: ${CircleRadius}px;
    margin-top: 0.5rem;
    border-radius: ${CircleRadius / 2}px;
  }
`;

export const Timeline = styled.div<TimelineProps>`
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  width: 10%;

  ${({ type }) => type === 'job' && TimelineDot}

  &::after {
    ${Pseudo}
    height: 100%;
    width: 1.5px;
  }
`;
