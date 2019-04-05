import React from 'react';
import styled, { css } from 'styled-components';
import { color, spacing } from 'variables';
import button, { ButtonMoodColor } from 'helpers/button';

type ButtonSize = 'small' | 'medium';
type ButtonIcon = 'merge' | 'comment';

const small_button_size_text = css`
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.9px;
  margin: 0;
  padding: 0;
`;

const medium_button_size_text = css`
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1px;
`;
const Button: any = styled.button<{ color: ButtonMoodColor; buttonSize: ButtonSize }>`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  text-transform: uppercase;
  border-radius: ${props => (props.buttonSize === 'medium' ? '4 px' : '3px')};
  border-width: 0;
  cursor: pointer;
  outline: none;
  height: ${props => (props.buttonSize === 'medium' ? '24px' : '16px')};
  padding: 0 ${props => (props.buttonSize === 'medium' ? '6px' : '3px')};
  background-color: ${({ color }) => button.buttonMoodColor[color].normal};

  color: ${color.accent_text};

  &:disabled {
    background-color: ${color.accent_gray};
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: ${({ color }) => button.buttonMoodColor[color].light};
  }

  &:active:enabled {
    background-color: ${({ color }) => button.buttonMoodColor[color].dark};
  }

  span {
    ${({ buttonSize }) => (buttonSize === 'medium' ? medium_button_size_text : small_button_size_text)};
  }
`;
type Props = {
  ref?: any;
  text: string;
  buttonSize: ButtonSize;
  color: ButtonMoodColor;
};

export default class StandardButton extends React.Component<React.HTMLProps<HTMLButtonElement> & Props> {
  render() {
    const { children, buttonSize, color, text, ...buttonProps } = this.props;
    return (
      <Button {...buttonProps} buttonSize={buttonSize} color={color}>
        {text && <span>{text}</span>}
      </Button>
    );
  }
}
