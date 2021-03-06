import { color, border, spacing } from 'variables';
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

const smallButtonSizeCss = css`
  border: ${border.normal};
  border-radius: ${border.radius_small};
  height: 20px;
  padding: 0 ${spacing.small};
`;
const mediumButtonSizeCss = css`
  border: ${border.normal};
  border-radius: ${border.radius_medium};
  height: 24px;
  padding: 0 ${spacing.small};
`;
const largeButtonSizeCss = css`
  border: ${border.normal};
  border-radius: ${border.radius_large};

  height: 32px;
  padding: 0 ${spacing.medium};
`;

function getSizeStyle(buttonSize: Styles.Size) {
  switch (buttonSize) {
    case 'small':
      return smallButtonSizeCss;
    case 'medium':
      return mediumButtonSizeCss;
    case 'large':
      return largeButtonSizeCss;
    case 'xlarge':
      return largeButtonSizeCss;
    default:
      return null;
  }
}

function getColorStyle(colorScheme: Styles.ColorScheme) {
  return css`
    background-color: ${colorScheme.normal};

    &:hover:enabled {
      background-color: ${colorScheme.light};
    }

    &:active:enabled {
      background-color: ${colorScheme.dark};
    }
  `;
}

function getStyle(button: Styles.ButtonTheme) {
  const colorScheme = color.colorScheme[button.mood];
  const buttonSize = button.size;

  const buttonCss = css`
    ${baseCss}
    ${getColorStyle(colorScheme)}
    ${getSizeStyle(buttonSize)}
  `;
  return buttonCss;
}

export default getStyle;
