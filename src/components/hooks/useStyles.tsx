import { useState, useEffect } from 'react';
import { css } from 'styled-components';
import getButtonStyle from 'components/ui/Button/styled';
import getIconStyle from 'components/ui/Icon/styled';
import getWrapperStyle from 'components/ui/Wrapper/styled';
import getTextStyle from 'components/ui/Text/styled';


type Props = {
  style: Styles.ButtonTheme | Styles.TextTheme | Styles.IconTheme | Styles.WrapperTheme;
};

const defaultStyle = css``;


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
      case 'wrapper':
        setStyledCss(getWrapperStyle(style));
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
