export const primary = '#42487F';
export const primary_light = '#6167A0';
export const primary_dark = '#272B54';

export const accent_green_dark = '#3e935b';
export const accent_green = '#6bc189';
export const accent_green_light = '#97d3ac';

export const accent_blue_dark = '#1e89c3';
export const accent_blue = '#5db6e6';
export const accent_blue_light = '#8dcbed';

export const accent_orange_dark = '#ce3114';
export const accent_orange = '#ee6e56';
export const accent_orange_light = '#f39988';

export const accent_purple_dark = '#5a4580';
export const accent_purple = '#846baf';
export const accent_purple_light = '#a897c7';

export const accent_yellow_dark = '#df7c0a';
export const accent_yellow = '#f7ad57';
export const accent_yellow_light = '#f9c589';

export const accent_red_dark = '#af1122';
export const accent_red = '#ea2a3f';
export const accent_red_light = '#f06978';

export const black = 'rgb(5,5,5)';
export const white = 'rgb(255,255,255)';

export const background_primary = '#fff';
export const background_secondary = '#f5f5f5';

export const box_shadow = 'rgba(251, 254, 252, 0.4)';

export const accent_gray = '#F1F4F7';
export const accent_gray_light = '#FBFBFB';
export const accent_gray_dark = '#D7DCE1';

export const primary_text = '#FFFFFF';
export const accent_text = '#FFFFFF';
export const text = '#201F1F';
export const text_dark = '#050505';
export const text_light = '#939393';

export const border = accent_gray_dark;
export const border_dark = text;
export const border_light = text_light;

export type BUTTON_TYPE = 'primary' | '';

export interface ColorScheme {
  light: string;
  dark: string;
  normal: string;
}

/*

const black: string = '#000000';
const white: string = '#FFFFFF';

  white,
  black,

  menuitem_active: colorHelpers.getOpacity(0.72, '#272B54'),

  accent_gray: '#F1F4F7',
  accent_gray_light: '#FBFBFB',
  accent_gray_dark: '#D7DCE1',
  accent_text: '#FFFFFF',

  accent_orange: '#F05F35', // FIXME: Not relevant anymore?

  background_primary: '#FFFFFF',
  background_secondary: '#E6E6F0',
  text: '#201F1F',
  text_light: '#939393',

  text_highlight: '#B0D7EE',
  box_shadow: colorHelpers.getOpacity(0.5, black),
  border: '#979797',
*/
