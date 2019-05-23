import React, { forwardRef, useRef, useImperativeHandle, RefForwardingComponent } from 'react';
import styled, { SimpleInterpolation, css } from 'styled-components';
import { useStyles } from 'components/hooks';

const TextArea = styled.textarea<{ css: SimpleInterpolation }>`
  ${({ css }) => css}
`;

type Props = {
  theme: Styles.TextAreaTheme;
};

export type RefHandlers = Pick<HTMLTextAreaElement, 'focus'>;
const TextAreaComponent: RefForwardingComponent<
  RefHandlers,
  Props & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
> = (props, ref) => {
  const { theme, ...textAreaProps } = props;
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  let textTheme: Styles.TextTheme = { element: 'text', size: theme.size, type: 'bread' };
  const styles = css`
    ${useStyles({ theme })}
    ${useStyles({ theme: textTheme })}
  `;

  return <TextArea className="textarea" css={styles} {...textAreaProps} ref={inputRef} />;
};

export default forwardRef(TextAreaComponent);
