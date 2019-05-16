import React, { FunctionComponent, useRef } from 'react';
import { Wrapper } from './styled';
import { taskbar_height } from 'variables/size';
import { useComponentSize } from 'components/hooks';
import Item from './Item';

type Props = {
  startPosition: System.Coordinates;
  pageDimensions: System.Dimensions;
  menuGroups: System.MenuGroup[];
  isSubMenu: boolean;
};

const ContextMenu: FunctionComponent<Props> = (props: Props) => {
  const { startPosition, pageDimensions, menuGroups, isSubMenu } = props;
  const ref = useRef(null);
  const dimensions: System.Dimensions = useComponentSize(ref);

  function getStyle(): React.CSSProperties {
    const position: System.Coordinates = !isSubMenu
      ? {
          x:
            startPosition.x + dimensions.width > pageDimensions.width
              ? pageDimensions.width - dimensions.width
              : startPosition.x,
          y:
            startPosition.y + dimensions.height > pageDimensions.height - taskbar_height
              ? startPosition.y > pageDimensions.height - taskbar_height
                ? pageDimensions.height - taskbar_height - dimensions.height
                : startPosition.y - dimensions.height
              : startPosition.y,
        }
      : { x: startPosition.x, y: startPosition.y };

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
