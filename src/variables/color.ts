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

export const border_discreet = accent_gray_dark;
export const border = text;

export const buttonMoodColor: System.Map<Styles.ColorScheme> = {
  neutral: {
    light: primary_light,
    dark: primary_dark,
    normal: primary,
    text: primary_text,
  },
  abort: {
    light: accent_yellow_light,
    dark: accent_yellow_dark,
    normal: accent_yellow,
    text: accent_text,
  },
  danger: {
    light: accent_red_light,
    dark: accent_red_dark,
    normal: accent_red,
    text: accent_text,
  },
  great: {
    light: accent_green_light,
    dark: accent_green_dark,
    normal: accent_green,
    text: accent_text,
  },
  info: {
    light: accent_blue_light,
    dark: accent_blue_dark,
    normal: accent_blue,
    text: accent_text,
  },
};
