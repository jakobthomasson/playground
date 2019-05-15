import React, { FunctionComponent, useState } from 'react';
import { MenuItem } from './styled';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';
import Menu from './';
import { useEventListener, useRefCallback } from 'components/hooks';

type Props = {
  menuItem: System.ContextMenuItem;
  pageDimension: System.Dimension;
};

const ContextMenuItem: FunctionComponent<Props> = (props: Props) => {
  const { menuItem, pageDimension } = props;
  const [element, ref] = useRefCallback<HTMLDivElement>();
  const [showMenu, setShowMenu] = useState(false);

  useEventListener(
    'mouseover',
    e => {
      menuItem.subgroups && setShowMenu(true);
    },
    element,
  );

  useEventListener(
    'mouseleave',
    e => {
      menuItem.subgroups && setShowMenu(false);
    },
    element,
  );

  useEventListener(
    'click',
    e => {
      console.log('action');
      menuItem.action();
      setShowMenu(false);
    },
    element,
  );
  function getMenuPosition() {
    const boundingRect = element!.getBoundingClientRect() as DOMRect;
    const x = boundingRect.x + boundingRect.width;
    const y = boundingRect.y - 5;
    return {
      x,
      y,
    };
  }
  return (
    <MenuItem ref={ref}>
      <Icon theme={{ type: 'icon', size: 'small', icon: menuItem.icon ? menuItem.icon : 'placeholder' }} />
      <Text theme={{ type: 'text', mood: 'menu' }} text={menuItem.text} />
      {menuItem.subgroups ? (
        <>
          <Icon theme={{ type: 'icon', size: 'small', icon: 'next' }} />
          {showMenu && (
            <Menu
              menuGroups={menuItem.subgroups}
              pageDimension={pageDimension}
              startPosition={getMenuPosition()}
              isSubMenu={true}
            />
          )}
        </>
      ) : (
        <Icon theme={{ type: 'icon', size: 'small', icon: 'placeholder' }} />
      )}
    </MenuItem>
  );
};

export default ContextMenuItem;
