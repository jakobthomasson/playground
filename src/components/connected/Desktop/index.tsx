import React, { SFC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { color } from 'variables';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { windowActions, windowSelectors } from 'store/window';
import Button from 'components/ui/Button/standard';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = StateProps & DispatchProps;

const mapStateToProps = (state: Types.RootState) => ({
  windows: windowSelectors.windows(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  openWindow: (id: string) => dispatch(windowActions.open({ id })),
});

const Desktop: SFC<Props> = (props: Props) => {
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
  });

  // onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
  //   const timestamp = Date.now().toString();
  //   console.log('- window/OPEN -');
  //   console.log(' open window with id: ', timestamp);
  //   console.log('....................');
  //   props.openWindow(timestamp);
  // }}
  return (
    <Wrapper>
      <Button theme={{ type: 'button', mood: 'abort', buttonSize: 'small' }} text="cancel" />
      <Button theme={{ type: 'button', mood: 'danger', buttonSize: 'small' }} text="danger" />
      <Button theme={{ type: 'button', mood: 'great', buttonSize: 'small' }} text="great" />
      <Button theme={{ type: 'button', mood: 'info', buttonSize: 'small' }} text="info" />
      <Button theme={{ type: 'button', mood: 'neutral', buttonSize: 'small' }} text="neutral" />

      <Button theme={{ type: 'button', mood: 'abort', buttonSize: 'medium' }} text="medium" />
      <Button theme={{ type: 'button', mood: 'danger', buttonSize: 'medium' }} text="medium" />
      <Button theme={{ type: 'button', mood: 'great', buttonSize: 'medium' }} text="medium" />
      <Button theme={{ type: 'button', mood: 'info', buttonSize: 'medium' }} text="medium" />
      <Button theme={{ type: 'button', mood: 'neutral', buttonSize: 'medium' }} text="medium" />

      <Button theme={{ type: 'button', mood: 'abort', buttonSize: 'large' }} text="large" />
      <Button theme={{ type: 'button', mood: 'danger', buttonSize: 'large' }} text="large" />
      <Button theme={{ type: 'button', mood: 'great', buttonSize: 'large' }} text="large" />
      <Button theme={{ type: 'button', mood: 'info', buttonSize: 'large' }} text="large" />
      <Button theme={{ type: 'button', mood: 'neutral', buttonSize: 'large' }} text="large" />
      {props.windows.map((window, i) => (
        <Window
          key={i}
          style={{
            width: `${dimension.width}px`,
            height: `${dimension.height}px`,
            top: `${position.y * (i * 0.2)}px`,
            left: `${position.x * (i * 0.2)}px`,
          }}
        >
          <div className="titlebar" onMouseDown={() => setIsMouseDown(true)} />
        </Window>
      ))}
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Desktop);

const Wrapper = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${color.background_primary};
`;

const Window = styled.article`
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
