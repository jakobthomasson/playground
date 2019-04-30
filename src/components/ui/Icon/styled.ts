import { color, border, spacing, font, size } from 'variables';
import { css } from 'styled-components';

const baseCss = css`
  display: inline-flex;
`;
const smallIconCss = css`
  height: ${size.iconSize.small}px;
`;
const mediumIconCss = css`
  height: ${size.iconSize.medium}px;
`;
const largeIconCss = css`
  height: ${size.iconSize.large}px;
`;
const xlargeIconCss = css`
  height: ${size.iconSize.xlarge}px;
`;

function getSizeStyle(iconSize: Styles.Size) {
  switch (iconSize) {
    case 'small':
      return smallIconCss;
    case 'medium':
      return mediumIconCss;
    case 'large':
      return largeIconCss;
    case 'xlarge':
      return xlargeIconCss;
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

    color: ${colorScheme.text};
  `;
}

function getStyle(icon: Styles.IconTheme) {
  // const colorScheme = color.buttonMoodColor[button.mood];
  // const buttonSize = button.buttonSize;
  const iconSize = icon.size;
  const buttonCss = css`
    ${baseCss}

    > svg {
      ${getSizeStyle(iconSize)}
    }
  `;
  return buttonCss;
}

export default getStyle;
