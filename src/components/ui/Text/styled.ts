import { color, border, spacing, font } from 'variables';
import { css } from 'styled-components';

const baseCss = css`


`;

function getStyle(button: Styles.TextTheme) {
  const textCss = css`
    ${baseCss}
  `;
  return textCss;
}

export default getStyle;
