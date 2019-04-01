import React, { SFC } from 'react';
import styled from 'styled-components';
import { color, zIndex, spacing, size } from 'variables';
import Footer from 'components/connected/Footer';
import Desktop from 'components/connected/Desktop';

const Wrapper = styled.main`
  background-color: ${color.background_primary};
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  position: absolute;
  overflow: hidden;
  z-index: ${zIndex.base};
`;

const FooterWrapper = styled.footer``;

const App: SFC = () => {
  return (
    <Wrapper>
      <Desktop />
      <Footer />
    </Wrapper>
  );
};

export default App;