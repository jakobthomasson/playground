import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import SystemItem from 'components/connected/SystemItem';
import { pathSelectors } from 'store/domain/path';
import { Wrapper } from './styled';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {
  pathId: string;
  dimension: System.Dimension;
};
type Props = StateProps & DispatchProps & OwnProps;

const mapStateToProps = (state: Types.RootState, ownProps: OwnProps) => ({
  path: pathSelectors.path(state, { id: ownProps.pathId }),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

const SystemLocation: FunctionComponent<Props> = (props: Props) => {
  // const list = [4, 9, 13, 16, 24, 1, 6, 21, 10];
  const { path } = props;
  const {
    dimension: { height, width },
  } = props;
  const size = 100;
  const maxRow = Math.floor(width / size);
  return (
    <Wrapper>
      {path.systemItemIds.map((id, i) => (
        <SystemItem key={id} systemItemId={id} maxRow={maxRow} size={size} position={(i + 1) * 2} />
      ))}
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SystemLocation);
