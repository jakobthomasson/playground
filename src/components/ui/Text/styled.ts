import { css } from 'styled-components';
import { color, font } from 'variables';

const baseCss = css`
  color: ${color.text};
  font-family: ${font.fontFamily.standard};
`;

const breadTextCss = css`
  font-size: ${font.fontSize.medium};
  font-weight: ${font.fontWeight.regular};
`;

const menuTextCss = css`
  font-size: ${font.fontSize.small};
  font-weight: ${font.fontWeight.medium};
  letter-spacing: 1.2px;
`;
function getMoodStyle(textMood: Styles.TextMood) {
  switch (textMood) {
    case 'bread':
      return breadTextCss;
    case 'menu':
      return menuTextCss;

    default:
      return null;
  }
}

function getStyle(button: Styles.TextTheme) {
  const { mood } = button;
  const textCss = css`
    ${baseCss}
    ${getMoodStyle(mood)}
  `;
  return textCss;
}

export default getStyle;
