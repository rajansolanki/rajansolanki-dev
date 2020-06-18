import React, { FC, useState, useEffect, useRef } from 'react';

import { useComponent, useVisible } from 'shared';
import { Text } from 'components';
import {
  LoadMore as LoadMoreStyled,
  ComponentContainer,
  Container,
} from './load-more.styles';

const loadingBarComponent = import('@bit/rajansolanki.dev.loading-bar');
const loadMoreComponent = import('@bit/rajansolanki.dev.load-more');

type Status = 'idle' | 'loading' | 'error';

const LoadMore: FC = () => {
  const [status, setStatus] = useState<Status>('idle');

  const componentRef = useRef<HTMLElement | null>(null);
  const [visibleRef, isVisible] = useVisible();

  const handleRetryClick = (): void => {
    setStatus('loading');

    setTimeout(() => setStatus('error'), 1000);
  };

  useEffect(() => {
    const component = componentRef.current;
    component && component.addEventListener('retryClick', handleRetryClick);

    return (): void =>
      component?.removeEventListener('retryClick', handleRetryClick);
  }, [componentRef]);

  useEffect(() => {
    isVisible && handleRetryClick();
  }, [isVisible]);

  useComponent(loadingBarComponent);
  useComponent(loadMoreComponent, isVisible);

  return (
    <LoadMoreStyled>
      <component-loading-bar status={status} />

      <Container>
        <Text heading="Pagination errors">
          <p>Loading errors are handled within the component itself</p>
        </Text>

        <ComponentContainer ref={visibleRef}>
          <component-load-more ref={componentRef} status={status} />
        </ComponentContainer>
      </Container>
    </LoadMoreStyled>
  );
};

export { LoadMore };
