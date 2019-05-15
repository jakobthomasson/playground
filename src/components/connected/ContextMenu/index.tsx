import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { Wrapper } from './styled';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';

import { useSpring, config } from 'react-spring';

const mapStateToProps = (state: Types.RootState, ownProps: OwnProps) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type OwnProps = { mousePosition: System.Coordinates; dimension: System.Dimension };
type Props = StateProps & DispatchProps & OwnProps;

const ContextMenu: FunctionComponent<Props> = (props: Props) => {
  const { mousePosition } = props;
  function getStyle(): React.CSSProperties {
    let top = `${mousePosition.y}px`;
    let left = `${mousePosition.x}px`;

    return {
      top,
      left,
    };
  }

  return (
    <Wrapper style={getStyle()}>
      <div className="group">
        <div className="menuitem">
          <Icon theme={{ type: 'icon', size: 'small', icon: 'file' }} />
          <Text theme={{ type: 'text', mood: 'bread' }} text="test" />
        </div>
        <div className="menuitem">
          <Icon theme={{ type: 'icon', size: 'small', icon: 'file' }} />
          <Text theme={{ type: 'text', mood: 'bread' }} text="test" />
        </div>
        <div className="menuitem">
          <Icon theme={{ type: 'icon', size: 'small', icon: 'file' }} />
          <Text theme={{ type: 'text', mood: 'bread' }} text="test" />
        </div>
      </div>

      <div className="group">
        <div className="menuitem">
          <Icon theme={{ type: 'icon', size: 'small', icon: 'file' }} />
          <Text theme={{ type: 'text', mood: 'bread' }} text="test" />
        </div>
      </div>

      <div className="group">
        <div className="menuitem">
          <Icon theme={{ type: 'icon', size: 'small', icon: 'file' }} />
          <Text theme={{ type: 'text', mood: 'bread' }} text="test" />
        </div>
        <div className="menuitem">
          <Icon theme={{ type: 'icon', size: 'small', icon: 'file' }} />
          <Text theme={{ type: 'text', mood: 'bread' }} text="test" />
        </div>
        <div className="menuitem">
          <Icon theme={{ type: 'icon', size: 'small', icon: 'file' }} />
          <Text theme={{ type: 'text', mood: 'bread' }} text="test" />
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
