import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import { Wrapper } from './styled';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';
import TextArea, { RefHandlers } from 'components/ui/TextArea';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { pathSelectors } from 'store/domain/path';

import { uiActions, uiSelectors } from 'store/ui';

import { AnimatedValue } from 'react-spring';
import { systemActions } from 'store/system';
import { useEventListener, useRefCallback } from 'components/hooks';

const mapStateToProps = (state: Types.RootState, ownProps: OwnProps) => ({
  isSelected: uiSelectors.isPathSelected(state, { pathId: ownProps.pathId }),
  isRenaming: uiSelectors.isPathRenaming(state, { pathId: ownProps.pathId }),
  path: pathSelectors.path(state, { pathId: ownProps.pathId }),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  openWindow: (pathId: string) => dispatch(systemActions.startOpenWindow({ pathId })),
  updatePath: (partialPath: PartialWithId<System.Path>) => dispatch(systemActions.startUpdatePath({ partialPath })),
  select: (pathId: string) => dispatch(uiActions.setSelectedPathIds({ pathIds: [pathId] })),
  ctrlSelect: (pathId: string) => dispatch(uiActions.toggleSelectedPathIds({ pathIds: [pathId] })),
  shiftSelect: (pathId: string) => dispatch(uiActions.toggleSelectedPathIds({ pathIds: [pathId] })),
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
      console.log('focus');
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
    const currentRows = Math.ceil(e.target.scrollHeight / textareaLineHeight);
    if (currentRows === 2) {
      console.log('what');
    }
    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      e.target.rows = maxRows;
      e.target.scrollTop = e.target.scrollHeight;
    }
    const lol = currentRows < maxRows ? currentRows : maxRows;
    if (lol === 2) {
      console.log('result: ', lol);
    }
    setRows(currentRows < maxRows ? currentRows : maxRows);
  }
  function handleTextAreaOnFocus(e: React.FocusEvent<HTMLTextAreaElement>) {
    console.log('change');

    calculateRows(e);
    e.currentTarget.select();
  }
  function handleTextAreaOnKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    console.log('change');

    if (e.keyCode === 13) {
      e.preventDefault();
      updatePath({ id: pathId, name });
    }
  }
  function handleTextAreaOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    console.log('change');

    calculateRows(e);
    setName(e.target.value);
  }

  useEventListener<React.MouseEvent>(
    'dblclick',
    e => {
      openWindow(pathId);
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
  console.log('why?');
  return (
    <Wrapper
      draggable
      style={{ ...animatedProps, position: 'absolute', top: `${top}px`, left: `${left}px` }}
      ref={ref}
      selected={isSelected}
    >
      <Icon theme={{ element: 'icon', size: 'xlarge', icon: path.icon }} />
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
