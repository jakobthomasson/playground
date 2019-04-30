import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { windowActions, windowSelectors } from 'store/window';
import Window from 'components/connected/Window';
import SystemItem from 'components/connected/SystemItem';
import useComponentSize from '@rehooks/component-size';
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
  const list = [4, 9, 13, 16, 24, 1, 6, 21, 10];
  const ref = useRef(null);
  const size: System.Dimension = useComponentSize(ref);
  const { width, height } = size;

  // const list = [1];
  return (
    <Wrapper ref={ref}>
      {list.map(l => (
        <SystemItem position={l} systemItem={{ id: `${l}`, name: `file ${l}`, path: [], type: 'file' }} />
      ))}

      {/* <Button text="open" onClick={openWindow} theme={{ type: 'button', mood: 'great', size: 'large' }} /> */}
      {props.windows.map(window => (
        <Window key={window.id} id={`${window.id}`} />
      ))}
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Desktop);
