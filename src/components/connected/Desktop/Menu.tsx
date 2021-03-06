import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Types from 'Types';
import { systemActions } from 'store/system';
import { uiSelectors } from 'store/ui';

import ContextMenu from 'components/common/ContextMenu';

const mapStateToProps = (state: Types.RootState) => ({
  pageDimensions: uiSelectors.pageDimensions(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  createSystemItem: (type: System.PathType) =>
    dispatch(systemActions.startCreateSystemItem({ type, parentPathId: 'root' })),
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type OwnProps = { contextMenu: System.DesktopContextMenu };

type Props = StateProps & DispatchProps & OwnProps;

const DesktopMenu: FunctionComponent<Props> = (props: Props) => {
  const { createSystemItem } = props;
  const menuGroups: System.MenuGroup[] = [
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
          action: () => console.log('new'),
          subgroups: [
            {
              items: [{ text: 'folder', action: () => createSystemItem('folder'), icon: 'folder' }],
            },
            {
              items: [{ text: 'text document', action: () => createSystemItem('file'), icon: 'file' }],
            },
          ],
        },
      ],
    },
  ];

  const { contextMenu, pageDimensions } = props;

  return (
    <ContextMenu
      coordinates={contextMenu.coordinates}
      pageDimensions={pageDimensions}
      menuGroups={menuGroups}
      isSubMenu={false}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DesktopMenu);
