import React, { FunctionComponent, useRef } from 'react';
import { Wrapper } from './styled';
import { taskbar_height } from 'variables/size';
import useComponentSize from '@rehooks/component-size';
import Item from './Item';

type Props = {
  mousePosition: System.Coordinates;
  pageDimension: System.Dimension;
  menuGroups: System.ContextMenuGroup[];
};

const ContextMenu: FunctionComponent<Props> = (props: Props) => {
  const { mousePosition, pageDimension, menuGroups } = props;
  const ref = useRef(null);
  const dimension: System.Dimension = useComponentSize(ref);

  function getStyle(): React.CSSProperties {
    const position: System.Coordinates = {
      x:
        mousePosition.x + dimension.width > pageDimension.width
          ? pageDimension.width - dimension.width
          : mousePosition.x,
      y:
        mousePosition.y + dimension.height > pageDimension.height - taskbar_height
          ? mousePosition.y > pageDimension.height - taskbar_height
            ? pageDimension.height - taskbar_height - dimension.height
            : mousePosition.y - dimension.height
          : mousePosition.y,
    };

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
            <Item key={j} menuItem={item} />
          ))}
          {menuGroups.length !== i + 1 && <div className="border" />}
        </div>
      ))}
    </Wrapper>
  );
};

export default ContextMenu;
