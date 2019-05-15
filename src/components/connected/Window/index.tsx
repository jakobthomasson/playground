import React, { FunctionComponent, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { systemActions } from 'store/system';
import { uiSelectors } from 'store/ui';
import { windowActions } from 'store/domain/window';

import { windowSelectors } from 'store/domain/window';
import { useRefCallback, useDraggable } from 'components/hooks';
import { useSpring } from 'react-spring';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';
import { Wrapper } from './styled';

const mapStateToProps = (state: Types.RootState, ownProps: OwnProps) => ({
  window: windowSelectors.window(state, { windowId: ownProps.id }),
  zIndex: uiSelectors.windowZNumber(state, { windowId: ownProps.id }),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  close: (windowId: string) => dispatch(systemActions.startCloseWindow({ windowId })),
  select: (windowId: string) => dispatch(systemActions.startSelectWindow({ windowId })),
  minimize: (windowId: string) => dispatch(systemActions.startMinimizeWindow({ windowId })),
  update: (partialWindow: PartialWithId<System.Window>) => dispatch(windowActions.update({ partialWindow })),
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {
  id: string;
};
type Props = OwnProps & StateProps & DispatchProps;

const Window: FunctionComponent<Props> = (props: Props) => {
  const { window, close, id, select, zIndex, minimize, update } = props;
  const [dimension] = useState<System.Dimension>(window.dimension);
  const [isMax, setIsMax] = useState(false);
  const [titlebar, titlebarRef] = useRefCallback<HTMLDivElement>();
  const [position] = useDraggable(titlebar, window.position, () => {
    update({ id, position });
  });

  const styleProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });

  function getStyle(): React.CSSProperties {
    let height = `${dimension.height}px`;
    let width = `${dimension.width}px`;
    let top = `${position.y}px`;
    let left = `${position.x}px`;

    if (isMax) {
      height = '100%';
      width = '100%';
      top = '0';
      left = '0';
    }
    return {
      ...styleProps,
      top,
      left,
      width,
      height,
      zIndex,
    };
  }

  function stopEvent(e: React.MouseEvent<Element>) {
    e.stopPropagation();
    e.preventDefault();
  }

  return (
    <Wrapper style={getStyle()} onMouseDown={() => select(id)}>
      <div draggable className="titlebar" ref={titlebarRef}>
        <Text theme={{ type: 'text', mood: 'bread' }} text={window.id} />
        <div className="icon-wrapper">
          <Icon
            theme={{ icon: 'minimize', size: 'small', type: 'icon' }}
            onMouseUp={e => minimize(id)}
            onMouseDown={stopEvent}
          />
          {isMax ? (
            <Icon
              theme={{ icon: 'restore', size: 'small', type: 'icon' }}
              onMouseUp={e => {
                setIsMax(false);
                select(id);
              }}
              onMouseDown={stopEvent}
            />
          ) : (
            <Icon
              theme={{ icon: 'maximize', size: 'small', type: 'icon' }}
              onMouseUp={e => {
                setIsMax(true);
                select(id);
              }}
              onMouseDown={stopEvent}
            />
          )}
          <Icon
            theme={{ icon: 'close', size: 'small', type: 'icon' }}
            onMouseUp={() => close(window.id)}
            onMouseDown={stopEvent}
          />
        </div>
      </div>
      {}
      <div className="content">
        <Text theme={{ type: 'text', mood: 'bread' }} text={`width: ${dimension.width}`} />
        <Text theme={{ type: 'text', mood: 'bread' }} text={`height: ${dimension.height}`} />
        <Text theme={{ type: 'text', mood: 'bread' }} text={`x: ${position.x}`} />
        <Text theme={{ type: 'text', mood: 'bread' }} text={`x: ${position.y}`} />
      </div>
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Window);
