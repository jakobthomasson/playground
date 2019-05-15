import React, { FunctionComponent } from 'react';
import { Wrapper } from './styled';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { systemActions } from 'store/system';
import { useEventListener, useRefCallback } from 'components/hooks';

const mapStateToProps = (state: Types.RootState, ownProps: OwnProps) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  openWindow: (systemItemId: string) => dispatch(systemActions.startOpenWindow({ systemItemId })),
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {};

type Props = StateProps & DispatchProps & OwnProps;

const SystemItem: FunctionComponent<Props> = props => {
  return <Wrapper>Taskbar, wonderful</Wrapper>;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SystemItem);
