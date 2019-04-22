import { useState, useEffect } from 'react';
import { css } from 'styled-components';
import getButtonStyle from 'components/ui/Button/styles';
import getIconStyle from 'components/ui/Icon/styles';

// import {button} from 'helpers/styles';
type Props = {
  style: Styles.ButtonTheme | Styles.TextTheme | Styles.IconTheme;
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
        setStyledCss(getButtonStyle(style));
        break;
      case 'icon':
        setStyledCss(getIconStyle(style));
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
