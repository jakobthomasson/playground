import styled from 'styled-components';
import { color, spacing } from 'variables';

export const Wrapper = styled.div<{ position: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  cursor: pointer;

  :hover {
    background-color: ${color.accent_gray};
  }
  :active {
    background-color: ${color.accent_gray_dark};
    border: 1px solid ${color.text_light};
  }
  .icon {
    margin-bottom: ${spacing.small};
  }

  .text {
  }
`;
