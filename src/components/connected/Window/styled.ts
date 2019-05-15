import styled from 'styled-components';
import { color, spacing } from 'variables';
import { animated } from 'react-spring';

export const Wrapper = styled(animated.article)`
  box-sizing: border-box;
  background: ${color.background_primary};
  border: 1px solid ${color.text_light};
  position: absolute;
  box-shadow: 0px 0px 5px ${color.box_shadow};
  border-radius: 4px;

  .titlebar {
    height: 32px;
    background-color: ${color.accent_gray};
    border-bottom: 1px solid ${color.text_light};
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      margin-left: ${spacing.small};
    }
    .icon-wrapper {
      display: flex;
      height: 100%;
      align-items: center;

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 32px;
        cursor: pointer;

        &:hover {
          background: white;
        }
      }
      .icon:last-child {
        border-top-right-radius: 6px;
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: ${spacing.medium};

    .text {
      margin-bottom: ${spacing.small};
    }
  }
`;
