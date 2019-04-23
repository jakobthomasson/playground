import React, { FunctionComponent } from 'react';
import styled, { SimpleInterpolation } from 'styled-components';
import { useStyles } from 'components/hooks';

const Span = styled.span<{ css: SimpleInterpolation }>`
  ${({ css }) => css}
`;

type Props = {
  theme: Styles.TextTheme;
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'label'
};

const TextComponent: FunctionComponent<Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = (props) => {
  const { theme, as, ref, text, ...textProps } = props;
  const css = useStyles({ style: theme });
  return (
    <Span className="text" as={as} css={css} {...textProps}>
      {text}
    </Span>
  );
};

export default TextComponent;
