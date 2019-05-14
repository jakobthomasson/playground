import React, { FunctionComponent } from 'react';
import { Wrapper } from './styled';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { systemItemSelectors } from 'store/domain/systemItem';
import { AnimatedValue } from 'react-spring';

const mapStateToProps = (state: Types.RootState, ownProps: OwnProps) => ({
  systemItem: systemItemSelectors.systemItem(state, { id: ownProps.systemItemId }),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {
  maxRow: number;
  size: number;
  position: number;
  systemItemId: string;
  animatedProps: AnimatedValue<React.CSSProperties>;
};
type Props = StateProps & DispatchProps & OwnProps;

const SystemItem: FunctionComponent<Props> = props => {
  const { maxRow, size, animatedProps } = props;
  const top = Math.floor((props.position - 1) / maxRow) * size;
  const left = Math.floor((props.position - 1) % maxRow) * size;

  return (
    <Wrapper draggable style={{ ...animatedProps, position: 'absolute', top: `${top}px`, left: `${left}px` }}>
      <Icon theme={{ type: 'icon', size: 'xlarge', icon: props.systemItem.type }} />
      <Text theme={{ type: 'text', mood: 'bread' }} text={'från path'} />
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SystemItem);
