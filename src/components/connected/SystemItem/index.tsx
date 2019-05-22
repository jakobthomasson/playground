import React, { FunctionComponent, useState } from 'react';
import { Wrapper } from './styled';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';
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
  const top = Math.floor((props.position - 1) / maxRow) * size;
  const left = Math.floor((props.position - 1) % maxRow) * size;

  const [element, ref] = useRefCallback<HTMLDivElement>();
  const [textElement, textRef] = useRefCallback<HTMLElement>();

  const [name, setName] = useState(path.name);
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

  useEventListener<React.KeyboardEvent>(
    'keydown',
    e => {
      if (e.keyCode === 13) {
        updatePath({ id: pathId, name });
      }
    },
    textElement,
  );
  let situationalProps;
  if (isRenaming) {
    textElement && textElement.focus();
    situationalProps = {
      as: 'input',
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
      },
    } as { as: 'input' };
  } else {
    situationalProps = {
      as: 'span',
    } as { as: 'span' };
  }

  return (
    <Wrapper
      draggable
      style={{ ...animatedProps, position: 'absolute', top: `${top}px`, left: `${left}px` }}
      ref={ref}
      selected={isSelected}
    >
      <Icon theme={{ element: 'icon', size: 'xlarge', icon: systemItem.type }} />
      <Text
        theme={{ element: 'text', type: 'bread', size: 'small' }}
        text={name}
        externalRef={textRef}
        {...situationalProps}
      />
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SystemItem);
