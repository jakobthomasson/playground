import React, { FunctionComponent } from 'react';
import styled, { SimpleInterpolation } from 'styled-components';
// import { color } from 'variables';
import { useStyles } from 'components/hooks';
import SvgComponent from './svg';

const Wrapper = styled.span<{ css: SimpleInterpolation }>`
  ${({ css }) => css}
`;

type Props = {
  theme: Styles.IconTheme;
};

const IconComponent: FunctionComponent<Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>> = (props) => {
  const { theme, ref, ...restProps } = props;
  const css = useStyles({ theme: props.theme });
  return (
    <Wrapper className="icon" css={css} {...restProps} >
      <SvgComponent icon={theme.icon} />
    </Wrapper>
  );
};

export default IconComponent;
