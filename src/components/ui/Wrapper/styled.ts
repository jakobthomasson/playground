import { color, border, spacing, font } from 'variables';
import { css } from 'styled-components';

// export const Wrapper = styled.article`
//   background: ${color.background_primary};
//   border: 1px solid ${color.accent_orange};
//   position: absolute;
//   box-shadow: 0px 0px 5px ${color.box_shadow};
//   border-radius: 4px;
// `;

const baseCss = css`
  display: flex;
`;

function getStyle(button: Styles.WrapperTheme) {
  const wrapperCss = css`
    ${baseCss}
  `;
  return wrapperCss;
}

export default getStyle;
