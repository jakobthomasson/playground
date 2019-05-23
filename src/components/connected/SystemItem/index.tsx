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
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  });

  const [minRows, setMinRows] = useState(1);
  const [maxRows, setMaxRows] = useState(3);
  const [rows, setRows] = useState(1);

  function calculateRows(e: React.ChangeEvent<HTMLTextAreaElement> | React.FocusEvent<HTMLTextAreaElement>) {
    const textareaLineHeight = 20;

    const previousRows = e.target.rows;
    e.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      e.target.rows = maxRows;
      e.target.scrollTop = e.target.scrollHeight;
    }
    console.log('result: ', currentRows < maxRows ? currentRows : maxRows);
    setRows(currentRows < maxRows ? currentRows : maxRows);
  }
  function handleTextAreaOnFocus(e: React.FocusEvent<HTMLTextAreaElement>) {
    calculateRows(e);
    e.currentTarget.select();
  }
  function handleTextAreaOnKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.keyCode === 13) {
      e.preventDefault();
      updatePath({ id: pathId, name });
    }
  }
  function handleTextAreaOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    calculateRows(e);
    setName(e.target.value);
  }

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
          ref={textAreaRef}
          value={name}
          onKeyDown={handleTextAreaOnKeyDown}
          onChange={handleTextAreaOnChange}
          onFocus={handleTextAreaOnFocus}
          rows={rows}
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
