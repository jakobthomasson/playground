import React, { SFC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { color } from 'variables';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { windowActions, windowSelectors } from 'store/window';

const mapStateToProps = (state: Types.RootState, ownProps: OwnProps) => ({
  window: windowSelectors.windows(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  openWindow: (id: string) => dispatch(windowActions.open({ id })),
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {
  id: string;
};
type Props = StateProps & DispatchProps;

const Window: SFC<Props> = (props: Props) => {
  const [deltaPosition, setDeltaPosition] = useState<System.Coordinates>();
  // useEffect;
  const [position, setPosition] = useState<System.Coordinates>({ x: 100, y: 100 });
  const [dimension] = useState<System.Dimension>({ width: 300, height: 400 });

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
    }

    function mouseUpListener(e: MouseEvent) {
      setDeltaPosition(undefined);
      setIsMouseDown(false);
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
  return <Wrapper>asd</Wrapper>;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Window);

const Wrapper = styled.article`
  box-sizing: border-box;
  background: ${color.background_primary};
  border: 1px solid ${color.accent_orange};
  position: absolute;
  box-shadow: 0px 0px 5px ${color.box_shadow};
  border-radius: 4px;

  .titlebar {
    height: 32px;
    background-color: ${color.accent_orange_light};
    border-bottom: 1px solid ${color.accent_orange};
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
  }
`;