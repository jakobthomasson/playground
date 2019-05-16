import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import SystemItem from 'components/connected/SystemItem';
import { pathSelectors } from 'store/domain/path';
import { Wrapper } from './styled';
import { useTransition, config } from 'react-spring';

const mapStateToProps = (state: Types.RootState, ownProps: OwnProps) => ({
  path: pathSelectors.path(state, { pathId: ownProps.pathId }),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type OwnProps = {
  pathId: string;
  dimensions: System.Dimensions;
};
type Props = StateProps & DispatchProps & OwnProps;

const Path: FunctionComponent<Props> = (props: Props) => {
  const {
    path: { childIds },
  } = props;

  const transition = useTransition(childIds, childId => childId, {
    from: { opacity: 0, marginTop: -20 },
    enter: { opacity: 1, marginTop: 0 },
    config: config.stiff,
  });

  const {
    dimensions: { width },
  } = props;
  const size = 100;
  const maxRow = Math.floor(width / size);
  return (
    <Wrapper>
      {transition.map(({ item, key, props }, i) => (
        <SystemItem key={key} pathId={item} maxRow={maxRow} size={size} position={(i + 1) * 2} animatedProps={props} />
      ))}
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Path);
