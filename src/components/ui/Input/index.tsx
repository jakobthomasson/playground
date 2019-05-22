import React, { FunctionComponent } from 'react';
import styled, { SimpleInterpolation, css } from 'styled-components';
import { useStyles } from 'components/hooks';

const Input = styled.input<{ css: SimpleInterpolation }>`
  ${({ css }) => css}
`;

type Props = {
  theme: Styles.InputTheme;
  value: string;
  externalRef?: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement>;
};

const InputComponent: FunctionComponent<
  Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = props => {
  const { theme, value, externalRef, ref, ...inputProps } = props;

  let textTheme: Styles.TextTheme = { element: 'text', size: theme.size, type: 'bread' };

  const styles = css`
    ${useStyles({ theme })}
    ${useStyles({ theme: textTheme })}
  `;

  let situationalProps;

  return <Input ref={externalRef} className="input" css={styles} {...inputProps} {...situationalProps} value={value} />;
};

export default InputComponent;
