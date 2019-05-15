import { css } from 'styled-components';
import { color } from 'variables';

const baseCss = css`
  color: ${color.text};
`;

function getStyle(button: Styles.TextTheme) {
  const textCss = css`
    ${baseCss}
  `;
  return textCss;
}

export default getStyle;
