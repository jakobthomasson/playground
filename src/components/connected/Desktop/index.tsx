import React, { FunctionComponent } from 'react';
import debounce from 'lodash.debounce';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { uiSelectors, uiActions } from 'store/ui';
import { pathSelectors } from 'store/domain/path';

import Window from 'components/connected/Window';

import ContainerPath from 'components/common/ContainerPath';

import { Wrapper } from './styled';
import { useEventListener, useRefCallback, useComponentSize } from 'components/hooks';
import Taskbar from 'components/connected/Taskbar';
import DesktopContextMenu from './Menu';

const mapStateToProps = (state: Types.RootState) => ({
  windowIds: uiSelectors.visibleWindowIds(state),
  contextMenu: uiSelectors.contextMenu(state),
  containerPath: pathSelectors.containerPath(state, { pathId: 'root' }),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  openDesktopContextMenu: (coordinates: System.Coordinates) =>
    dispatch(uiActions.setContextMenu({ contextMenu: { type: 'desktop', coordinates } })),
  closeContextMenu: () => dispatch(uiActions.setContextMenu({ contextMenu: null })),
  setPageDimension: debounce(
    (pageDimensions: System.Dimensions) => dispatch(uiActions.setPageDimensions({ pageDimensions })),
    100,
  ),
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = StateProps & DispatchProps;

const Desktop: FunctionComponent<Props> = props => {
  const { windowIds, contextMenu, openDesktopContextMenu, setPageDimension, closeContextMenu, containerPath } = props;
  const [element, ref] = useRefCallback<HTMLElement>();
  const dimensions: System.Dimensions = useComponentSize(element, setPageDimension);

  useEventListener<React.MouseEvent>(
    'contextmenu',
    e => {
      e.stopPropagation();
      e.preventDefault();
      openDesktopContextMenu({ x: e.pageX, y: e.pageY });
    },
    element,
  );

  useEventListener<React.MouseEvent>('click', e => {
    contextMenu && closeContextMenu();
  });

  return (
    <Wrapper ref={ref}>
      {containerPath && <ContainerPath dimensions={dimensions} containerPath={containerPath} />}
      {windowIds.map(id => {
        return <Window key={id} id={id} />;
      })}

      {contextMenu && <ContextMenu contextMenu={contextMenu} />}
      <Taskbar />
    </Wrapper>
  );
};

const ContextMenu: FunctionComponent<{ contextMenu: System.ContextMenu }> = props => {
  const { contextMenu } = props;
  switch (contextMenu.type) {
    case 'desktop':
      return <DesktopContextMenu contextMenu={contextMenu} />;
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Desktop);
