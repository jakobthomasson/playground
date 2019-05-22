import React, { FunctionComponent } from 'react';
import styled, { SimpleInterpolation } from 'styled-components';
import { useStyles } from 'components/hooks';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';

const Button = styled.button<{ css: SimpleInterpolation }>`
  ${({ css }) => css}
`;

type Props = {
  theme: Styles.ButtonTheme;
  text?: string;
  icon?: Styles.Icon;
};

const ButtonComponent: FunctionComponent<
  Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props: Props) => {
  const { theme, text, icon, ...buttonProps } = props;

  const css = useStyles({ theme });
  return (
    <Button className="button" css={css} {...buttonProps}>
      {icon && <Icon theme={{ icon, size: theme.size, element: 'icon' }} />}
      {text && <Text theme={{ element: 'text', type: 'bread' }} text={text} />}
    </Button>
  );
};

export default ButtonComponent;
