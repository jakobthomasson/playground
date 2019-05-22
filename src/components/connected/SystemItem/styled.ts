import styled from 'styled-components';
import { color, spacing } from 'variables';
import { animated } from 'react-spring';

export const Wrapper = styled(animated.div)<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100px;
  border: 1px solid transparent;
  max-height: 140px;
  padding: ${spacing.small};
  
  cursor: pointer;

  :hover {
    background-color: ${color.accent_gray_light};
    border: 1px solid ${color.border_light};
  }

  ${({ selected }) =>
    selected &&
    `
    background-color: ${color.accent_gray};
    border: 1px solid ${color.border};
    :hover {
      background-color: ${color.accent_gray_dark};
        border: 1px solid ${color.border_dark};
    }
  `}

  .icon {
    margin-bottom: ${spacing.small};
  }

  .text {
    width: calc(100% - ${spacing.small});
    min-height: 24px;
    text-align: center;
    overflow: hidden;
  }
`;
