import React, { FunctionComponent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { windowActions, windowSelectors } from 'store/window';
import Button from 'components/ui/Button';
import Window from 'components/connected/Window';
import { Wrapper } from './styled';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = StateProps & DispatchProps;

const mapStateToProps = (state: Types.RootState) => ({
  windows: windowSelectors.windows(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  openWindow: () => dispatch(windowActions.open()),
});

const Desktop: FunctionComponent<Props> = (props: Props) => {
  const { openWindow } = props;
  return (
    <Wrapper>
      <Button text="open" theme={{ type: 'button', mood: 'abort', size: 'large' }} onClick={openWindow} />
      {props.windows.map((window, i) => (
        <Window key={i} id={`${window.id}`} />
      ))}
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Desktop);

