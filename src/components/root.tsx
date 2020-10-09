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
    from: {
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      background: '#fff',
      transform: 'translateY(100vh)',
    },
    leave: { transform: 'translateY(-125vh)', zIndex: -1 },
    enter: [
      { position: 'fixed', transform: 'translateY(100vh)' },
      { position: 'fixed', transform: 'translateY(0vh)' },
      { position: 'relative' },
    ],
    config: config.stiff,
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
