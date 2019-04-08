import { color, border, spacing, font } from 'variables';
import { css } from 'styled-components';

const baseCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
  box-sizing: border-box;

  &:disabled {
    background-color: ${color.accent_gray_light};
    cursor: not-allowed;
  }
`;

function getColorStyle(colorScheme: Styles.ColorScheme) {
  return css`
    background-color: ${colorScheme.normal};

    &:hover:enabled {
      background-color: ${colorScheme.light};
    }

    &:active:enabled {
      background-color: ${colorScheme.dark};
    }

    color: ${colorScheme.text};
  `;
}
const smallButtonSizeCss = css`
  border: ${border.normal};
  border-radius: ${border.radius_small};
  height: 20px;
  padding: 0 ${spacing.small};
  > span {
    ${font.small_button_text}
  }
`;
const mediumButtonSizeCss = css`
  border: ${border.normal};
  border-radius: ${border.radius_medium};

  height: 24px;
  padding: 0 ${spacing.small};

  > span {
    ${font.medium_button_text}
  }
`;
const largeButtonSizeCss = css`
  border: ${border.normal};
  border-radius: ${border.radius_large};

  height: 32px;
  padding: 0 ${spacing.medium};

  > span {
    ${font.large_button_text}
  }
`;

function getSizeStyle(buttonSize: Styles.Size) {
  switch (buttonSize) {
    case 'small':
      return smallButtonSizeCss;
    case 'medium':
      return mediumButtonSizeCss;
    case 'large':
      return largeButtonSizeCss;
  }
}

function getButtonStyle(button: Styles.ButtonTheme) {
  const colorScheme = color.buttonMoodColor[button.mood];
  const buttonSize = button.buttonSize;

  const buttonCss = css`
    ${baseCss}

    ${getColorStyle(colorScheme)}
    ${getSizeStyle(buttonSize)}
  `;
  return buttonCss;
}

export default { getButtonStyle };
