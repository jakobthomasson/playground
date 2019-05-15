import React, { FunctionComponent, useRef } from 'react';
import { Wrapper } from './styled';
import { taskbar_height } from 'variables/size';
import useComponentSize from '@rehooks/component-size';
import Item from './Item';

type Props = {
  startPosition: System.Coordinates;
  pageDimension: System.Dimension;
  menuGroups: System.ContextMenuGroup[];
  isSubMenu: boolean;
};

const ContextMenu: FunctionComponent<Props> = (props: Props) => {
  const { startPosition, pageDimension, menuGroups, isSubMenu } = props;
  const ref = useRef(null);
  const dimension: System.Dimension = useComponentSize(ref);

  function getStyle(): React.CSSProperties {
    const position: System.Coordinates = !isSubMenu
      ? {
          x:
            startPosition.x + dimension.width > pageDimension.width
              ? pageDimension.width - dimension.width
              : startPosition.x,
          y:
            startPosition.y + dimension.height > pageDimension.height - taskbar_height
              ? startPosition.y > pageDimension.height - taskbar_height
                ? pageDimension.height - taskbar_height - dimension.height
                : startPosition.y - dimension.height
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
            <Item key={j} menuItem={item} pageDimension={pageDimension} />
          ))}
          {menuGroups.length !== i + 1 && <div className="border" />}
        </div>
      ))}
    </Wrapper>
  );
};

export default ContextMenu;
