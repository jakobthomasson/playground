import React, { FunctionComponent } from 'react';
import styled, { SimpleInterpolation, css } from 'styled-components';
import { useStyles } from 'components/hooks';

const Span = styled.span<{ css: SimpleInterpolation }>`
  ${({ css }) => css}
`;

type Props = {
  theme: Styles.TextTheme;
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'label' | 'span';
};
const TextComponent: FunctionComponent<
  Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = props => {
  const { theme, as, text, ref, ...textProps } = props;

  const styles = css`
    ${useStyles({ theme: theme })}
  `;

  return (
    <Span className="text" as={as} css={styles} {...textProps}>
      {text}
    </Span>
  );
};

export default TextComponent;
