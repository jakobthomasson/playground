import React, { SFC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { color } from 'variables';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { windowActions, windowSelectors } from 'store/window';
import Button from 'components/ui/Button';
import IconComponent from 'components/ui/Icon';
import Window from 'components/connected/Window';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = StateProps & DispatchProps;

const mapStateToProps = (state: Types.RootState) => ({
  windows: windowSelectors.windows(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  openWindow: (id: string) => dispatch(windowActions.open({ id })),
});

const Desktop: SFC<Props> = (props: Props) => {
  return (
    <Wrapper>
      <Button theme={{ type: 'button', mood: 'abort', size: 'small' }} text="share" icon="share" />
      {props.windows.map((window, i) => (
        <Window key={i} id={`${i}`} />
      ))}
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Desktop);

const Wrapper = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${color.background_primary};
`;
