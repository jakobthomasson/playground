import styled from 'styled-components';
import { color, size } from 'variables';
import { animated } from 'react-spring';

export const Wrapper = styled(animated.div)`
  position: absolute;
  z-index: 1000;
  bottom: 0;
  width: 100%;
  height: ${size.footer_height}px;
  background-color: ${color.accent_gray_dark};

  border-top: 2px solid ${color.text_light};
  position: absolute;
  box-shadow: 0px 0px 5px ${color.box_shadow};
`;
