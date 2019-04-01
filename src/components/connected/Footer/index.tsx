import React, { SFC, useState } from 'react';
import styled, { css } from 'styled-components';
import { color, zIndex, size } from 'variables';
import { accent_green_light } from 'variables/color';

const Wrapper = styled.footer`
  position: absolute;
  height: ${size.FooterHeight}px;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${color.accent_purple_light};
  border-top: 1px solid ${color.black};
`;

const Home = styled.div`
  position: relative;
  height: 100%;

  > button {
    height: 100%;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color.accent_green};
    border-right: 1px solid ${color.black};
    cursor: pointer;

    > span {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: bold;
      color: ${color.black};
    }

    :active {
      background: hotpink;
    }
    :hover {
      background-color: ${accent_green_light};
    }
  }
`;
const Footer: SFC = () => {
  return (
    <Wrapper>
      <Home>
        <button>
          <span>Home</span>
        </button>
        <ul>
          <li>Start</li>
          <li>2</li>
        </ul>
      </Home>
    </Wrapper>
  );
};
export default Footer;
