import { useState, useEffect } from 'react';
import { css } from 'styled-components';
import { buttonHelper } from 'helpers';
// import {button} from 'helpers/styles';
type Props = {
  style: Styles.ButtonTheme | Styles.TextTheme;
};

const defaultStyle = css``;

function getTextStyle(text: Styles.TextTheme) {
  return defaultStyle;
}

function useStyles(props: Props) {
  const [styledCss, setStyledCss] = useState(defaultStyle);
  useEffect(() => {
    const { style } = props;
    switch (style.type) {
      case 'button':
        setStyledCss(buttonHelper.getButtonStyle(style));
        break;
      case 'text':
        setStyledCss(getTextStyle(style));
        break;
      default:
        console.warn('Style non-existing');
        break;
    }
  }, []);
  return styledCss;
}

export default useStyles;
