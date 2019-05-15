import React, { FunctionComponent, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { windowSelectors } from 'store/domain/window';
import Window from 'components/connected/Window';
import Path from 'components/connected/Path';
import useComponentSize from '@rehooks/component-size';
import { Wrapper } from './styled';
import { useEventListener } from 'components/hooks';
import { systemActions } from 'store/system';
import { useTransition, config } from 'react-spring';

const mapStateToProps = (state: Types.RootState) => ({
  windows: windowSelectors.windows(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  createSystemItem: () => dispatch(systemActions.startCreateSystemItem({ contextPathId: 'iamroot', type: 'file' })),
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = StateProps & DispatchProps;

const Desktop: FunctionComponent<Props> = (props: Props) => {
  const ref = useRef(null);
  const dimension: System.Dimension = useComponentSize(ref);
  const [, setIsContextMenuOpen] = useState(false);

  useEventListener<React.MouseEvent>('contextmenu', e => {
    e.stopPropagation();
    e.preventDefault();
    setIsContextMenuOpen(true);
    props.createSystemItem();
  });

  const transition = useTransition(props.windows, window => window.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: config.slow,
  });

  return (
    <Wrapper ref={ref}>
      <Path dimension={dimension} pathId="iamroot" />
      {transition.map(({ item, key, props }, i) => (
        <Window key={key} id={item.id} animatedProps={props} />
      ))}
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Desktop);
