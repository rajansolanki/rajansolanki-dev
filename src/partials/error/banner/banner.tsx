import React, { FC, useState, useEffect } from 'react';

import { useComponent, useVisible } from 'shared';
import { Text } from 'components';
import { Banner as BannerStyled, Container } from './banner.styles';

const errorComponent = import('@bit/rajansolanki.dev.error');

type ErrorType = 'app' | 'global' | undefined;

const Banner: FC = () => {
  const [errorType, setErrorType] = useState<ErrorType>('app');

  const [appVisibleRef, appIsVisible] = useVisible();
  const [globalVisibleRef, globalIsVisible] = useVisible();
  const [endRef, endIsVisible] = useVisible();

  useEffect(() => {
    globalIsVisible && setErrorType('global');
  }, [globalIsVisible]);

  useEffect(() => {
    endIsVisible && setErrorType(undefined);
  }, [endIsVisible]);

  useComponent(errorComponent, appIsVisible);

  return (
    <BannerStyled>
      <component-error type={errorType} />

      <Container ref={appVisibleRef}>
        <Text heading="App errors">
          <p>Errors that affect the entire application</p>
        </Text>
      </Container>

      <Container ref={globalVisibleRef}>
        <Text heading="Global errors">
          <p>If things go south from there</p>
        </Text>
      </Container>

      <div ref={endRef} style={{ marginTop: '50vh' }} />
    </BannerStyled>
  );
};

export { Banner };
