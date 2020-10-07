import React, { CSSProperties, FC, ReactNode } from 'react';
import { InferProps, element } from 'prop-types';

import {
  animated,
  useTransition,
  config,
  UseTransitionResult,
} from 'react-spring';

const propTypes = {
  children: element.isRequired,
};
type Props = InferProps<typeof propTypes>;

const Root: FC<Props> = ({ children }) => {
  const transitions = useTransition(children, children.key, {
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

export { Root };
