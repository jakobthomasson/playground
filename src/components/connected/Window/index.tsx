import React, { FunctionComponent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { windowSelectors, windowActions } from 'store/window';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';

import { Wrapper } from './styled';
const mapStateToProps = (state: Types.RootState, ownProps: OwnProps) => ({
  window: windowSelectors.window(state, { windowId: ownProps.id }),
});


const mapDispatchToProps = (dispatch: Dispatch) => ({
  close: (id: string) => dispatch(windowActions.close({ id }))
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {
  id: string;
};
type Props = StateProps & DispatchProps;

const Window: FunctionComponent<Props> = (props: Props) => {
  const { window, close } = props;

  const [deltaPosition, setDeltaPosition] = useState<System.Coordinates>();
  const [position, setPosition] = useState<System.Coordinates>({ x: 0, y: 100 });
  const [dimension, setDimension] = useState<System.Dimension>({ width: 300, height: 400 });
  const [isMax, setIsMax] = useState(false)


  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  useEffect(() => {
    function mouseMoveListener(e: MouseEvent) {
      if (deltaPosition) {
        const newDelta = { x: e.clientX - deltaPosition.x, y: e.clientY - deltaPosition.y };
        setDeltaPosition({ x: e.clientX, y: e.clientY });
        setPosition({ x: position.x + newDelta.x, y: position.y + newDelta.y });
      } else {
        setDeltaPosition({ x: e.clientX, y: e.clientY });
      }
      e.preventDefault();
    }

    function mouseUpListener(e: MouseEvent) {
      setDeltaPosition(undefined);
      setIsMouseDown(false);
      e.preventDefault();
    }

    if (isMouseDown) {
      document.addEventListener('mousemove', mouseMoveListener);
      document.addEventListener('mouseup', mouseUpListener);
    }

    return () => {
      document.removeEventListener('mousemove', mouseMoveListener);
      document.removeEventListener('mouseup', mouseUpListener);
    };
  })

  function getStyle(): React.CSSProperties {

    let height = `${dimension.height}px`
    let width = `${dimension.width}px`;
    let top = `${position.y}px`;
    let left = `${position.x}px`;

    if (isMax) {
      height = '100%'
      width = '100%';
      top = '0';
      left = '0';
    }
    return {
      top,
      left,
      width,
      height,
    }
  }

  return (
    <Wrapper style={getStyle()}>
      <div className="titlebar" onMouseDown={() => setIsMouseDown(true)} onMouseUp={() => setIsMouseDown(false)}>
        <Text theme={{ type: 'text', mood: 'bread', }} text={window.id} />
        <div className="icon-wrapper">
          <Icon theme={{ icon: 'hide', size: 'small', type: 'icon' }} />
          {isMax ?
            <Icon theme={{ icon: 'minimize', size: 'small', type: 'icon' }} onClick={() => setIsMax(false)} />
            :
            <Icon theme={{ icon: 'maximize', size: 'small', type: 'icon' }} onClick={() => setIsMax(true)} />
          }
          <Icon theme={{ icon: 'close', size: 'small', type: 'icon' }} onClick={() => close(window.id)} />
        </div>
      </div>
      {
        // not static in future
      }
      <div className="content">

        <Text theme={{ type: 'text', mood: 'bread', }} text={`width: ${dimension.width}`} />
        <Text theme={{ type: 'text', mood: 'bread', }} text={`height: ${dimension.height}`} />
        <Text theme={{ type: 'text', mood: 'bread', }} text={`x: ${position.x}`} />
        <Text theme={{ type: 'text', mood: 'bread', }} text={`x: ${position.y}`} />
      </div>


    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Window);

