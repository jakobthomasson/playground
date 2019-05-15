import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { systemActions } from 'store/system';
import ContextMenu from 'components/common/ContextMenu';

const mapStateToProps = (state: Types.RootState, ownProps: OwnProps) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  createSystemItem: (type: System.SystemItemType) =>
    dispatch(systemActions.startCreateSystemItem({ type, contextPathId: 'iamroot' })),
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type OwnProps = { mousePosition: System.Coordinates; pageDimension: System.Dimension };

type Props = StateProps & DispatchProps & OwnProps;

const DesktopContextMenu: FunctionComponent<Props> = (props: Props) => {
  const { createSystemItem } = props;
  const menuGroups: System.ContextMenuGroup[] = [
    {
      items: [
        {
          text: 'view',
          action: () => console.log('view'),
          subgroups: [
            {
              items: [
                { text: 'small icons', action: () => console.log('small icon') },
                { text: 'medium icons', action: () => console.log('medium icon') },
                { text: 'large icons', action: () => console.log('large icon') },
              ],
            },
          ],
        },
        {
          text: 'sort by',
          action: () => console.log('sort by'),
          subgroups: [
            {
              items: [
                { text: 'name', action: () => console.log('name') },
                { text: 'size', action: () => console.log('size') },
                { text: 'file type', action: () => console.log('type') },
                { text: 'modified', action: () => console.log('modified') },
              ],
            },
          ],
        },
      ],
    },
    { items: [{ text: 'paste', action: () => console.log('paste') }] },
    {
      items: [
        {
          text: 'new',
          action: () => console.log('paste'),
          subgroups: [
            {
              items: [{ text: 'folder', action: () => createSystemItem('folder') }],
            },
            {
              items: [{ text: 'text document', action: () => createSystemItem('file') }],
            },
          ],
        },
      ],
    },
  ];

  const { mousePosition, pageDimension } = props;

  return (
    <ContextMenu
      startPosition={mousePosition}
      pageDimension={pageDimension}
      menuGroups={menuGroups}
      isSubMenu={false}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DesktopContextMenu);
