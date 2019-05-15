import styled from 'styled-components';
import { size, color, spacing } from 'variables';

export const Wrapper = styled.div`
  position: absolute;
  width: ${size.context_menu_width}px;
  background-color: ${color.accent_gray_light};
  padding: 0 ${spacing.xsmall};
  border: 1px solid ${color.border_discreet};
  border-radius: 4px;

  .group {
    border-bottom: 1px solid ${color.border_discreet};
    padding: ${spacing.small} 0;
    margin :last-child {
      border-bottom: 0;
    }
  }

  .menuitem {
    display: flex;
    align-items: center;
    padding: ${spacing.small} 0;
    :hover {
      background-color: ${color.accent_gray};
    }
    .icon {
      padding-left: ${spacing.medium};
      margin-right: ${spacing.large};
    }
    .text {
    }
  }
`;
