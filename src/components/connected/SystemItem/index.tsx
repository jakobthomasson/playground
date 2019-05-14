import React, { FunctionComponent, useCallback, useState, useRef } from 'react';
import { Wrapper } from './styled';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { systemSelectors } from 'store/system';
import { AnimatedValue } from 'react-spring';
import { systemActions } from 'store/system';
import { useEventListener, useRefCallback } from 'components/hooks';
const mapStateToProps = (state: Types.RootState, ownProps: OwnProps) => ({
  systemItem: systemSelectors.systemItemFromPathId(state, { pathId: ownProps.pathId }),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  openWindow: (systemItemId: string) => dispatch(systemActions.startOpenWindow({ systemItemId })),
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {
  maxRow: number;
  size: number;
  position: number;
  pathId: string;
  animatedProps: AnimatedValue<React.CSSProperties>;
};

type Props = StateProps & DispatchProps & OwnProps;

const SystemItem: FunctionComponent<Props> = props => {
  const { maxRow, size, animatedProps } = props;
  const top = Math.floor((props.position - 1) / maxRow) * size;
  const left = Math.floor((props.position - 1) % maxRow) * size;

  const [element, ref] = useRefCallback<HTMLDivElement>();
  useEventListener<React.MouseEvent>(
    'dblclick',
    e => {
      e.stopPropagation();
      e.preventDefault();
      props.openWindow(props.systemItem.id);
    },
    element,
  );

  return (
    <Wrapper draggable style={{ ...animatedProps, position: 'absolute', top: `${top}px`, left: `${left}px` }} ref={ref}>
      <Icon theme={{ type: 'icon', size: 'xlarge', icon: props.systemItem.type }} />
      <Text theme={{ type: 'text', mood: 'bread' }} text={'från path'} />
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SystemItem);
