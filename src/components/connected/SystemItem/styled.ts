import styled from 'styled-components';
import { color, spacing } from 'variables';
import { animated } from 'react-spring';
/*

totalHeight

wrapper padding: small * 2
icon-height: xlarge: 64px; 
icon-margin-bottom: small 


*/

export const Wrapper = styled(animated.div)<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100px;
  border: 1px solid transparent;
  max-height: 140px;
  padding: ${spacing.small} 0;

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

  .text,
  .textarea {
    line-height: 20px;
    text-align: center;
    overflow: hidden;
  }
  .text {
    width: calc(100% - 2 * ${spacing.small});
  }
  .textarea {
    box-sizing: border-box;
    border: none;
    resize: none;
    height: auto;
    padding: 0 ${spacing.xsmall};
    width: calc(100% - 2 * ${spacing.xsmall});
  }
`;
