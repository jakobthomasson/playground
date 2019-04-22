import React, { FunctionComponent } from 'react';
import styled, { SimpleInterpolation } from 'styled-components';
import { useStyles } from 'components/hooks';
import Icon from 'components/ui/Icon';
const Button = styled.button<{ css: SimpleInterpolation }>`
  ${({ css }) => css}
`;

type Props = {
  theme: Styles.ButtonTheme;
  text?: string;
  icon?: Styles.Icon;
};

const ButtonComponent: FunctionComponent<React.HTMLProps<HTMLButtonElement> & Props> = (props: Props) => {
  const { theme, text, icon, ...buttonProps } = props;

  const css = useStyles({ style: theme });
  return (
    <Button css={css} {...buttonProps}>
      {icon && <Icon className="icon" theme={{ icon, size: theme.size, type: 'icon' }} />}
      {text && <span className="text">{text}</span>}
    </Button>
  );
};

export default ButtonComponent;
