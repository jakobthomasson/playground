import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import { Wrapper } from './styled';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';
import TextArea, { RefHandlers } from 'components/ui/TextArea';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { systemSelectors } from 'store/system';
import { pathSelectors } from 'store/domain/path';

import { uiActions, uiSelectors } from 'store/ui';

import { AnimatedValue } from 'react-spring';
import { systemActions } from 'store/system';
import { useEventListener, useRefCallback } from 'components/hooks';

const mapStateToProps = (state: Types.RootState, ownProps: OwnProps) => ({
  systemItem: systemSelectors.systemItemFromPathId(state, { pathId: ownProps.pathId }),
  isSelected: uiSelectors.isPathSelected(state, { pathId: ownProps.pathId }),
  isRenaming: uiSelectors.isPathRenaming(state, { pathId: ownProps.pathId }),
  path: pathSelectors.path(state, { pathId: ownProps.pathId }),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  openWindow: (systemItemId: string) => dispatch(systemActions.startOpenWindow({ systemItemId })),
  updatePath: (partialPath: PartialWithId<System.Path>) => dispatch(systemActions.startUpdatePath({ partialPath })),
  select: (systemItemId: string) => dispatch(uiActions.setSelectedPathIds({ pathIds: [systemItemId] })),
  ctrlSelect: (systemItemId: string) => dispatch(uiActions.toggleSelectedPathIds({ pathIds: [systemItemId] })),
  shiftSelect: (systemItemId: string) => dispatch(uiActions.toggleSelectedPathIds({ pathIds: [systemItemId] })),
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {
  pathId: string;
  maxRow: number;
  size: number;
  position: number;
  animatedProps: AnimatedValue<React.CSSProperties>;
};

type Props = StateProps & DispatchProps & OwnProps;

const SystemItem: FunctionComponent<Props> = props => {
  const {
    maxRow,
    size,
    animatedProps,
    openWindow,
    select,
    shiftSelect,
    ctrlSelect,
    systemItem,
    isSelected,
    pathId,
    isRenaming,
    path,
    updatePath,
  } = props;

  const [name, setName] = useState(path.name);
  const [element, ref] = useRefCallback<HTMLDivElement>();

  const textAreaRef = useRef<RefHandlers>(null);

  function inputKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.keyCode === 13) {
      console.log('hej');
      updatePath({ id: pathId, name });
    }
  }

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  });

  useEventListener<React.MouseEvent>(
    'dblclick',
    e => {
      openWindow(systemItem.id);
    },
    element,
  );

  useEventListener<React.MouseEvent>(
    'click',
    e => {
      if (e.ctrlKey) {
        ctrlSelect(pathId);
      } else if (e.shiftKey) {
        shiftSelect(pathId);
      } else {
        select(pathId);
      }
    },
    element,
  );

  useEventListener<React.MouseEvent>(
    'contextmenu',
    e => {
      // props.openWindow(props.systemItem.id);
    },
    element,
  );

  const top = Math.floor((props.position - 1) / maxRow) * size;
  const left = Math.floor((props.position - 1) % maxRow) * size;

  return (
    <Wrapper
      draggable
      style={{ ...animatedProps, position: 'absolute', top: `${top}px`, left: `${left}px` }}
      ref={ref}
      selected={isSelected}
    >
      <Icon theme={{ element: 'icon', size: 'xlarge', icon: systemItem.type }} />
      {isRenaming ? (
        <TextArea
          theme={{ element: 'textarea', size: 'small' }}
          value="hej"
          ref={textAreaRef}
          onKeyDown={inputKeyDown}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setName(e.target.value)}
        />
      ) : (
        <Text theme={{ element: 'text', type: 'bread', size: 'small' }} text={name} />
      )}
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SystemItem);
