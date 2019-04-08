import React, { FunctionComponent } from 'react';
import styled, { SimpleInterpolation } from 'styled-components';
// import { color } from 'variables';
import { useStyles } from 'components/hooks';

const Button = styled.button<{ css: SimpleInterpolation }>`
  ${({ css }) => css}
`;

type Props = {
  theme: Styles.ButtonTheme;
  text?: string;
  icon?: string;
};

const StandardButton: FunctionComponent<React.HTMLProps<HTMLButtonElement> & Props> = (props: Props) => {
  const { theme, text, ...buttonProps } = props;
  const css = useStyles({ style: props.theme });
  return (
    <Button css={css} {...buttonProps}>
      {text && <span>{text}</span>}
    </Button>
  );
};

export default StandardButton;
