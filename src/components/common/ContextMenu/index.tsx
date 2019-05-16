import React, { FunctionComponent } from 'react';
import { Wrapper } from './styled';
import { taskbar_height, context_menu_item_height } from 'variables/size';
import { useComponentSize, useRefCallback } from 'components/hooks';
import Item from './Item';

type Props = {
  coordinates: System.Coordinates;
  pageDimensions: System.Dimensions;
  menuGroups: System.MenuGroup[];
  isSubMenu: boolean;
};

const ContextMenu: FunctionComponent<Props> = (props: Props) => {
  const { coordinates, pageDimensions, menuGroups, isSubMenu } = props;
  const [element, ref] = useRefCallback<HTMLDivElement>();
  const menu: System.Dimensions = useComponentSize(element);
  function getStyle(): React.CSSProperties {
    let position: System.Coordinates;
    const height = pageDimensions.height - taskbar_height;
    const width = pageDimensions.width;
    const xOverflow = coordinates.x + menu.width > width;
    const yOverflow = coordinates.y + menu.height > height;
    const yOnTaskbar = coordinates.y > height;

    if (!isSubMenu) {
      const x: number = xOverflow ? width - menu.width : coordinates.x;
      const y: number = yOverflow ? (yOnTaskbar ? height - menu.height : coordinates.y - menu.height) : coordinates.y;
      position = {
        x,
        y,
      };
    } else {
      const x: number = xOverflow ? coordinates.x - 2 * menu.width + 2 * 4 : coordinates.x; //spacing 4 * 2
      const isOver = coordinates.y + menu.height > height;
      const y = isOver ? coordinates.y - menu.height + context_menu_item_height + 10 : coordinates.y; // spacing 4 * 2 + border
      position = { x, y };
    }

    let top = `${position.y}px`;
    let left = `${position.x}px`;
    return {
      top,
      left,
    };
  }

  return (
    <Wrapper style={getStyle()} ref={ref}>
      {menuGroups.map((group, i) => (
        <div key={i} className="group">
          {group.items.map((item, j) => (
            <Item key={j} menuItem={item} pageDimensions={pageDimensions} />
          ))}
          {menuGroups.length !== i + 1 && <div className="border" />}
        </div>
      ))}
    </Wrapper>
  );
};

export default ContextMenu;
