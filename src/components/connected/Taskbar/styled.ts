import styled from 'styled-components';
import { color, size, spacing } from 'variables';
import { animated } from 'react-spring';

export const Wrapper = styled(animated.div)`
  position: absolute;
  z-index: 1000;
  bottom: 0;
  width: 100%;
  height: ${size.footer_height}px;
  background-color: ${color.accent_gray};

  border-top: 2px solid ${color.text_light};
  position: absolute;
  box-shadow: 0px 0px 5px ${color.box_shadow};

  display: flex;
  align-items: center;
`;

export const Tab = styled.div`
  height: calc(100% - 2 * ${spacing.xsmall});
  border-radius: ${spacing.small};
  background-color: ${color.accent_gray_dark};
  margin-right: ${spacing.xsmall};

  display: flex;
  align-items: center;
  padding: 0 ${spacing.medium};
  :last-child {
    margin-right: 0;
  }
`;
