import { css } from '@emotion/core';

export const GUTTER = 16;
export const MAX_WIDTH = 1800;

export const SIZES = {
  sm: '544px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export const PADDING = {
  xs: GUTTER,
  sm: 20,
  md: 60,
  lg: 80,
  xl: 100,
};

export const GRID = {
  sm: `@media all and (min-width: ${SIZES.sm})`,
  md: `@media all and (min-width: ${SIZES.md})`,
  lg: `@media all and (min-width: ${SIZES.lg})`,
  xl: `@media all and (min-width: ${SIZES.xl})`,
};

export const GRID_PADDING = css`
  padding-left: ${PADDING.xs}px;
  padding-right: ${PADDING.xs}px;
  ${GRID.sm} {
    padding-left: ${PADDING.sm}px;
    padding-right: ${PADDING.sm}px;
  }
  ${GRID.md} {
    padding-left: ${PADDING.md}px;
    padding-right: ${PADDING.md}px;
  }
  ${GRID.lg} {
    padding-left: ${PADDING.lg}px;
    padding-right: ${PADDING.lg}px;
  }
  ${GRID.xl} {
    padding-left: ${PADDING.xl}px;
    padding-right: ${PADDING.xl}px;
  }
`;

export const CONTAINER = css`
  overflow: hidden;
  max-width: ${MAX_WIDTH}px;
  margin-left: auto;
  margin-right: auto;
  ${GRID_PADDING};
`;
