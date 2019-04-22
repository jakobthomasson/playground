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

const IconComponent: FunctionComponent<React.HTMLProps<HTMLSpanElement> & Props> = (props: Props) => {
  const { theme, ...restProps } = props;
  const css = useStyles({ style: props.theme });
  return (
    <Wrapper css={css} {...restProps}>
      <SvgComponent icon={theme.icon} />
    </Wrapper>
  );
};

export default IconComponent;
