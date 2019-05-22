import { css } from 'styled-components';
import { color, font } from 'variables';

const baseCss = css`
  color: ${color.text};
  font-family: ${font.fontFamily.standard};
`;

function getTypeStyle(type: Styles.TextType) {
  switch (type) {
    case 'bread':
      return css`
        font-weight: ${font.fontWeight.regular};
      `;
    case 'menu':
      return css`
        font-weight: ${font.fontWeight.medium};
        letter-spacing: 1.2px;
      `;

    default:
      return null;
  }
}

function getSizeStyle(size: Styles.Size) {
  switch (size) {
    case 'small':
      return css`
        font-size: ${font.fontSize.small};
      `;
    case 'medium':
      return css`
        font-size: ${font.fontSize.medium};
      `;
    default:
      return null;
  }
}

function getStyle(text: Styles.TextTheme) {
  const { type, size } = text;
  const textCss = css`
    ${baseCss}
    ${getTypeStyle(type)}
    ${getSizeStyle(size ? size : 'medium')}
  `;
  return textCss;
}

export default getStyle;
