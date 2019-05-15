import React, { FunctionComponent } from 'react';
import { Wrapper, Tab } from './styled';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { systemActions } from 'store/system';
import { useEventListener, useRefCallback } from 'components/hooks';
import { windowSelectors } from 'store/domain/window';

const mapStateToProps = (state: Types.RootState, ownProps: OwnProps) => ({
  windowTabIds: windowSelectors.allIds(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  selectWindow: (windowId: string) => dispatch(systemActions.startSelectWindow({ windowId })),
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {};

type Props = StateProps & DispatchProps & OwnProps;

const SystemItem: FunctionComponent<Props> = props => {
  const { windowTabIds } = props;
  return (
    <Wrapper>
      {windowTabIds.map(id => (
        <Tab>{id}</Tab>
      ))}
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SystemItem);
