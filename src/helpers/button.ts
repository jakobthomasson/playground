import { color } from 'variables';

export type ButtonMoodColor = 'neutral' | 'abort' | 'danger' | 'great' | 'info';

const buttonMoodColor: System.Map<color.ColorScheme> = {
  neutral: {
    light: color.primary_light,
    dark: color.primary_dark,
    normal: color.primary,
  },
  abort: {
    light: color.accent_yellow_light,
    dark: color.accent_yellow_dark,
    normal: color.accent_yellow,
  },
  danger: {
    light: color.accent_red_light,
    dark: color.accent_red_dark,
    normal: color.accent_red,
  },
  great: {
    light: color.accent_green_light,
    dark: color.accent_green_dark,
    normal: color.accent_green,
  },
  info: {
    light: color.accent_blue_light,
    dark: color.accent_blue_dark,
    normal: color.accent_blue,
  },
};
export default { buttonMoodColor };
