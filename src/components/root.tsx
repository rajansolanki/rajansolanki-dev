import React, { CSSProperties, FC, ReactNode } from 'react';
import { InferProps, shape, string } from 'prop-types';
import { WrapPageElementBrowserArgs } from 'gatsby';

import {
  animated,
  useTransition,
  config,
  UseTransitionResult,
} from 'react-spring';

const propTypes = {
  path: string.isRequired,
  children: shape({}).isRequired,
};
type Props = InferProps<typeof propTypes>;

const Root: FC<Props> = ({ path, children }) => {
  const transitions = useTransition(children, path, {
    from: { transform: 'translateY(0%)' },
    leave: { transform: 'translateY(-100%)' },
    config: config.slow,
  });

  const transition = ({
    item,
    key,
    props,
  }: UseTransitionResult<ReactNode, CSSProperties>): ReactNode => (
    <animated.div key={key} style={props}>
      {item}
    </animated.div>
  );

  return <>{transitions.map(transition)}</>;
};

Root.propTypes = propTypes;

const wrapPageElement = ({
  element,
  props: { path },
}: WrapPageElementBrowserArgs): ReactNode => <Root path={path}>{element}</Root>;

export { Root, wrapPageElement };
