import styled from 'styled-components';
import { size, color, spacing } from 'variables';

export const Wrapper = styled.div`
  position: absolute;
  width: ${size.context_menu_width}px;
  background-color: ${color.accent_gray_light};
  padding: ${spacing.small} ${spacing.xsmall};
  border: 1px solid ${color.border_discreet};
  border-radius: 4px;

  .group {
    /* border-bottom: 1px solid ${color.border_discreet};
    padding: ${spacing.small} 0;

    :last-child {
      border-bottom: 0;
    } */

    width: 100%;
    display: flex; 
    flex-direction: column;
    align-items: center;
    .border {
      margin: ${spacing.small} 0; 
      width: calc(100% - 2*${spacing.medium});
      border-bottom: 1px solid ${color.border_discreet}; 
     
    }
  }

  .menuitem {
    width: 100%;
    display: flex;
    align-items: center;
    padding: ${spacing.small} 0;
    :hover {
      background-color: ${color.accent_gray};
    }
    .icon {
      padding-left: ${spacing.medium};
    }
    .text {
      flex-grow: 1;
      margin-left: ${spacing.medium};
      text-transform: capitalize;
    }
  }
`;
