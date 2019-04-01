import React, { SFC, useState } from 'react';
import styled, { css } from 'styled-components';
import { color, zIndex, size } from 'variables';

const Wrapper = styled.footer`
  position: absolute;
  height: ${size.FooterHeight}px;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: pink;
`;

const Footer: SFC = () => {
  return <Wrapper />;
};
export default Footer;
