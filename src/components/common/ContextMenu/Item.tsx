import React, { FunctionComponent } from 'react';
import { MenuItem } from './styled';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';
import { taskbar_height } from 'variables/size';
import useComponentSize from '@rehooks/component-size';

type Props = {
  menuItem: System.ContextMenuItem;
};

const ContextMenuItem: FunctionComponent<Props> = (props: Props) => {
  const { menuItem } = props;

  return (
    <MenuItem>
      <Icon theme={{ type: 'icon', size: 'small', icon: menuItem.icon ? menuItem.icon : 'placeholder' }} />
      <Text theme={{ type: 'text', mood: 'menu' }} text={menuItem.text} />
      {menuItem.subgroups ? (
        <Icon theme={{ type: 'icon', size: 'small', icon: 'next' }} />
      ) : (
        <Icon theme={{ type: 'icon', size: 'small', icon: 'placeholder' }} />
      )}
    </MenuItem>
  );
};

export default ContextMenuItem;
