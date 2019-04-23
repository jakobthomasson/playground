import React, { FunctionComponent } from 'react';
import styled, { SimpleInterpolation } from 'styled-components';
import { useStyles } from 'components/hooks';

const Wrapper = styled.div<{ css: SimpleInterpolation }>`
  ${({ css }) => css}
`;

type Props = {
  theme: Styles.WrapperTheme;
  as?: 'article'
};

const WrapperComponent: FunctionComponent<Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = (props) => {
  const { theme, ref, children, as, ...wrapperProps } = props;
  const css = useStyles({ style: theme });
  return (
    <Wrapper as={as} css={css} {...wrapperProps}>
      {children}
    </Wrapper>
  );
};

export default WrapperComponent;
