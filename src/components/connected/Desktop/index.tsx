import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { windowActions, windowSelectors } from 'store/window';
import Window from 'components/connected/Window';
import SystemLocation from 'components/connected/SystemLocation';
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
  const ref = useRef(null);
  const dimension: System.Dimension = useComponentSize(ref);
  return (
    <Wrapper ref={ref}>
      <SystemLocation dimension={dimension} locationId="" />

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
