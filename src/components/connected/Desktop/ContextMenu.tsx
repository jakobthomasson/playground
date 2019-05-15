import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { systemActions } from 'store/system';
import ContextMenu from 'components/common/ContextMenu';

const mapStateToProps = (state: Types.RootState, ownProps: OwnProps) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  createSystemItem: () => dispatch(systemActions.startCreateSystemItem({ contextPathId: 'iamroot', type: 'file' })),
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type OwnProps = { mousePosition: System.Coordinates; pageDimension: System.Dimension };

type Props = StateProps & DispatchProps & OwnProps;

const DesktopContextMenu: FunctionComponent<Props> = (props: Props) => {
  const menuGroups: System.ContextMenuGroup[] = [
    {
      items: [
        { text: 'view', action: () => console.log('view'), subgroups: [] },
        { text: 'sort by', action: () => console.log('sort by'), subgroups: [] },
      ],
    },
    { items: [{ text: 'paste', action: () => console.log('paste') }] },
    { items: [{ text: 'new', action: () => console.log('paste') }] },
  ];
  const { mousePosition, pageDimension } = props;
  return <ContextMenu mousePosition={mousePosition} pageDimension={pageDimension} menuGroups={menuGroups} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DesktopContextMenu);
