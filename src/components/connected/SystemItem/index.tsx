import React, { FunctionComponent } from 'react';
import { Wrapper } from './styled';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';

type Props = {
  systemItem: System.File | System.Folder;
  position: number;
};

const SystemItem: FunctionComponent<Props> = props => {
  const size = 100;
  // const position = 14;
  const maxRow = 10;

  const top = Math.floor((props.position - 1) / maxRow) * size;
  const left = Math.floor((props.position - 1) % maxRow) * size;

  return (
    <Wrapper
      draggable
      position={props.systemItem.id}
      style={{ position: 'absolute', top: `${top}px`, left: `${left}px` }}
    >
      <Icon theme={{ type: 'icon', size: 'xlarge', icon: props.systemItem.type }} />
      <Text theme={{ type: 'text', mood: 'bread' }} text={props.systemItem.name} />
    </Wrapper>
  );
};

export default SystemItem;
