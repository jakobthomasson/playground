import React, { FunctionComponent, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { systemActions } from 'store/system';
import { windowSelectors } from 'store/domain/window';
import { useRefCallback, useDraggable } from 'components/hooks';

import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';
import { Wrapper } from './styled';

const mapStateToProps = (state: Types.RootState, ownProps: OwnProps) => ({
  window: windowSelectors.window(state, { windowId: ownProps.id }),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  close: (windowId: string) => dispatch(systemActions.startCloseWindow({ windowId })),
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {
  id: string;
};
type Props = StateProps & DispatchProps;

const Window: FunctionComponent<Props> = (props: Props) => {
  const { window, close } = props;

  const [dimension] = useState<System.Dimension>(window.dimension);
  const [isMax, setIsMax] = useState(false);
  const [titlebar, titlebarRef] = useRefCallback<HTMLDivElement>();
  const [position] = useDraggable(titlebar, window.position);

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
      top,
      left,
      width,
      height,
      zIndex: props.window.zIndex,
    };
  }

  return (
    <Wrapper style={getStyle()}>
      <div draggable className="titlebar" ref={titlebarRef}>
        <Text theme={{ type: 'text', mood: 'bread' }} text={window.id} />
        <div className="icon-wrapper">
          <Icon theme={{ icon: 'hide', size: 'small', type: 'icon' }} />
          {isMax ? (
            <Icon theme={{ icon: 'minimize', size: 'small', type: 'icon' }} onClick={() => setIsMax(false)} />
          ) : (
            <Icon theme={{ icon: 'maximize', size: 'small', type: 'icon' }} onClick={() => setIsMax(true)} />
          )}
          <Icon theme={{ icon: 'close', size: 'small', type: 'icon' }} onClick={() => close(window.id)} />
        </div>
      </div>
      {
        // not static in future
      }
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
