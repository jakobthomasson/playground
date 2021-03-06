import { size, color } from 'variables';
import { css } from 'styled-components';

const baseCss = css`
  display: inline-flex;
  fill: ${color.text};
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
    default:
      return null;
  }
}

function getStyle(icon: Styles.IconTheme) {
  const { size } = icon;

  const buttonCss = css`
    ${baseCss}

    > svg {
      ${getSizeStyle(size ? size : 'medium')}
    }
  `;
  return buttonCss;
}

export default getStyle;
