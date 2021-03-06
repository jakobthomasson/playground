import { css } from 'styled-components';

export const fontSize = {
  small: '12px',
  medium: '14px',
  large: '16px',
  huge: '24px',
};

export const fontFamily = {
  standard: "'Montserrat', sans-serif",
};
// const label =

export const fontWeight = {
  extra_light: 200,
  regular: 400,
  medium: 500,
  bold: 700,
};

// TODO remove, button is not responsible for text
export const small_button_text = css`
  font-family: ${fontFamily.standard};
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.medium};
  letter-spacing: 2px;
`;

export const medium_button_text = css`
  font-family: ${fontFamily.standard};
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.medium};
`;

export const large_button_text = css`
  font-family: ${fontFamily.standard};
  font-size: ${fontSize.large};
  font-weight: ${fontWeight.medium};
`;
