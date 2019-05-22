import React, { FunctionComponent } from 'react';
import styled, { SimpleInterpolation, css } from 'styled-components';
import { useStyles } from 'components/hooks';

const Span = styled.span<{ css: SimpleInterpolation; input: boolean }>`
  ${({ css }) => css}
`;

type Props = {
  theme: Styles.TextTheme;
  text: string;
  externalRef?: ((instance: HTMLSpanElement | null) => void) | React.RefObject<HTMLSpanElement>;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'label' | 'input' | 'span';
};
const TextComponent: FunctionComponent<
  Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = props => {
  const { theme, as, text, externalRef, ref, ...textProps } = props;

  let inputTheme: Styles.InputTheme | Styles.NoTheme = { element: 'no_element' };
  let situationalProps;
  if (as !== 'input') {
    situationalProps = { children: text };
  } else if (as === 'input') {
    inputTheme = {
      element: 'input',
      size: theme.size,
    } as Styles.InputTheme;
  }
  const styles = css`
    ${useStyles({ theme: theme })}
    ${useStyles({ theme: inputTheme })}
  `;

  return (
    <Span
      className="text"
      as={as}
      css={styles}
      ref={externalRef}
      {...textProps}
      {...situationalProps}
      input={as === 'input'}
    />
  );
};

export default TextComponent;
