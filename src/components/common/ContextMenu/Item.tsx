import React, { FunctionComponent } from 'react';
import { MenuItem } from './styled';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';
import Menu from './';
import { useEventListener, useRefCallback, useMouseOver } from 'components/hooks';

type Props = {
  menuItem: System.MenuItem;
  pageDimensions: System.Dimensions;
};

const ContextMenuItem: FunctionComponent<Props> = (props: Props) => {
  const { menuItem, pageDimensions } = props;
  const [element, ref] = useRefCallback<HTMLDivElement>();
  const [showMenu] = useMouseOver(element, 200);

  useEventListener(
    'click',
    e => {
      e.stopPropagation();
      menuItem.action();
    },
    element,
  );

  function getMenuPosition() {
    const boundingRect = element!.getBoundingClientRect() as DOMRect;
    const x = boundingRect.x + boundingRect.width;
    const y = boundingRect.y - 5; // spacing 4 + border
    return {
      x,
      y,
    };
  }
  return (
    <MenuItem ref={ref}>
      <Icon theme={{ element: 'icon', size: 'small', icon: menuItem.icon ? menuItem.icon : 'placeholder' }} />
      <Text theme={{ element: 'text', type: 'menu', size: 'small' }} text={menuItem.text} />
      {menuItem.subgroups ? (
        <>
          <Icon theme={{ element: 'icon', size: 'small', icon: 'next' }} />
          {showMenu && (
            <Menu
              menuGroups={menuItem.subgroups}
              pageDimensions={pageDimensions}
              coordinates={getMenuPosition()}
              isSubMenu={true}
            />
          )}
        </>
      ) : (
        <Icon theme={{ element: 'icon', size: 'small', icon: 'placeholder' }} />
      )}
    </MenuItem>
  );
};

export default ContextMenuItem;
