import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import Window from 'components/connected/Window';
import SystemItem from 'components/connected/SystemItem';
import useComponentSize from '@rehooks/component-size';
import { Wrapper } from './styled';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {
  location?: string[];
  dimension: System.Dimension;
};
type Props = StateProps & DispatchProps & OwnProps;

const mapStateToProps = (state: Types.RootState) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

const SystemLocation: FunctionComponent<Props> = (props: Props) => {
  const list = [4, 9, 13, 16, 24, 1, 6, 21, 10];

  const {
    dimension: { height, width },
  } = props;
  const size = 100;
  const maxRow = Math.floor(width / size);

  return (
    <Wrapper>
      {list.map(l => (
        <SystemItem
          key={l}
          position={l}
          systemItem={{ id: `${l}`, name: `file ${l}`, path: [], type: 'file' }}
          maxRow={maxRow}
          size={size}
        />
      ))}
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SystemLocation);
