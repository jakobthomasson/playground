import React, { FunctionComponent, useRef } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { Wrapper } from './styled';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';
import { taskbar_height } from 'variables/size';
import useComponentSize from '@rehooks/component-size';

import { useSpring, config } from 'react-spring';

const mapStateToProps = (state: Types.RootState, ownProps: OwnProps) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type OwnProps = { mousePosition: System.Coordinates; pageDimension: System.Dimension };
type Props = StateProps & DispatchProps & OwnProps;

const ContextMenu: FunctionComponent<Props> = (props: Props) => {
  const { mousePosition, pageDimension } = props;
  const ref = useRef(null);
  const dimension: System.Dimension = useComponentSize(ref);
  function getStyle(): React.CSSProperties {
    const position: System.Coordinates = {
      x:
        mousePosition.x + dimension.width > pageDimension.width
          ? pageDimension.width - dimension.width
          : mousePosition.x,
      y:
        mousePosition.y + dimension.height > pageDimension.height - taskbar_height
          ? mousePosition.y > pageDimension.height - taskbar_height
            ? pageDimension.height - taskbar_height - dimension.height
            : mousePosition.y - dimension.height
          : mousePosition.y,
    };

    let top = `${position.y}px`;
    let left = `${position.x}px`;
    console.log();
    return {
      top,
      left,
    };
  }

  return (
    <Wrapper style={getStyle()} ref={ref}>
      <div className="group">
        <div className="menuitem">
          <Icon theme={{ type: 'icon', size: 'small', icon: 'file' }} />
          <Text theme={{ type: 'text', mood: 'menu' }} text="view" />
        </div>
        <div className="menuitem">
          <Icon theme={{ type: 'icon', size: 'small', icon: 'file' }} />
          <Text theme={{ type: 'text', mood: 'menu' }} text="sort by" />
        </div>
        <div className="menuitem">
          <Icon theme={{ type: 'icon', size: 'small', icon: 'file' }} />
          <Text theme={{ type: 'text', mood: 'menu' }} text="refresh" />
        </div>

        <div className="border" />
      </div>

      <div className="group">
        <div className="menuitem">
          <Icon theme={{ type: 'icon', size: 'small', icon: 'file' }} />
          <Text theme={{ type: 'text', mood: 'menu' }} text="test" />
        </div>
        <div className="border" />
      </div>

      <div className="group">
        <div className="menuitem">
          <Icon theme={{ type: 'icon', size: 'small', icon: 'file' }} />
          <Text theme={{ type: 'text', mood: 'menu' }} text="test" />
        </div>
        <div className="menuitem">
          <Icon theme={{ type: 'icon', size: 'small', icon: 'file' }} />
          <Text theme={{ type: 'text', mood: 'menu' }} text="test" />
        </div>
        <div className="menuitem">
          <Icon theme={{ type: 'icon', size: 'small', icon: 'file' }} />
          <Text theme={{ type: 'text', mood: 'menu' }} text="test" />
          <Icon theme={{ type: 'icon', size: 'small', icon: 'next' }} />
        </div>
      </div>
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContextMenu);
