import React, { FunctionComponent, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { uiSelectors } from 'store/ui';
import Window from 'components/connected/Window';
import Path from 'components/connected/Path';
import useComponentSize from '@rehooks/component-size';
import { Wrapper } from './styled';
import { useEventListener } from 'components/hooks';
import Taskbar from 'components/connected/Taskbar';
import DesktopContextMenu from './ContextMenu';

const mapStateToProps = (state: Types.RootState) => ({
  windowIds: uiSelectors.visibleWindowIds(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = StateProps & DispatchProps;

const Desktop: FunctionComponent<Props> = (props: Props) => {
  const { windowIds } = props;
  const ref = useRef(null);
  const dimension: System.Dimension = useComponentSize(ref);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState<System.Coordinates>({ x: 0, y: 0 });
  useEventListener<React.MouseEvent>('contextmenu', e => {
    e.stopPropagation();
    e.preventDefault();
    setMousePosition({ x: e.pageX, y: e.pageY });
    setIsContextMenuOpen(true);
    // createSystemItem();
  });

  return (
    <Wrapper ref={ref}>
      <Path dimension={dimension} pathId="iamroot" />
      {windowIds.map(id => {
        return <Window key={id} id={id} />;
      })}

      {isContextMenuOpen && <DesktopContextMenu pageDimension={dimension} mousePosition={mousePosition} />}

      <Taskbar />
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  null,
)(Desktop);
