import { useState, useEffect } from 'react';
import { css } from 'styled-components';
import getButtonStyle from 'components/ui/Button/styled';
import getIconStyle from 'components/ui/Icon/styled';
import getTextStyle from 'components/ui/Text/styled';
import getInputStyle from 'components/ui/Input/styled';

type Props = {
  theme: Styles.Theme;
};

const defaultStyle = css``;

function useStyles(props: Props) {
  const [styledCss, setStyledCss] = useState(defaultStyle);
  const { theme } = props;
  useEffect(() => {
    switch (theme.element) {
      case 'button':
        setStyledCss(getButtonStyle(theme));
        break;
      case 'icon':
        setStyledCss(getIconStyle(theme));
        break;
      case 'text':
        setStyledCss(getTextStyle(theme));
        break;
      case 'input':
        setStyledCss(getInputStyle(theme));
        break;
      case 'no_element':
        setStyledCss(css``);

        break;
    }
  }, [theme]);
  return styledCss;
}

export default useStyles;
