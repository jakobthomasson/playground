import { css } from 'styled-components';
import { border } from 'variables';

const baseCss = css`
  resize: none;
  border: ${border.normal_discreet};
`;

function getSizeStyle(size: Styles.Size) {
  switch (size) {
    case 'small':
      return css`
        height: 24px;
      `;
    case 'medium':
      return css`
        height: 24px;
      `;
    default:
      return null;
  }
}

function getStyle(input: Styles.TextAreaTheme) {
  const { size } = input;
  const inputCss = css`
    ${baseCss}
    ${getSizeStyle(size ? size : 'medium')}
  `;
  return inputCss;
}

export default getStyle;
