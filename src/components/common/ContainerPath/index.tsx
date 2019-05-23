import React, { FunctionComponent } from 'react';

import SystemItem from 'components/connected/SystemItem';
import { Wrapper } from './styled';
import { useTransition, config } from 'react-spring';

type OwnProps = {
  containerPath: System.LocationPath | System.FolderPath;
  dimensions: System.Dimensions;
};
type Props = OwnProps;

const ContainerPath: FunctionComponent<Props> = (props: Props) => {
  const {
    containerPath: { childIds },
  } = props;

  const transition = useTransition(childIds, childId => childId, {
    from: { opacity: 0, marginTop: -20 },
    enter: { opacity: 1, marginTop: 0 },
    config: config.stiff,
  });

  const {
    dimensions: { width },
  } = props;
  const size = 140;
  const maxRow = Math.floor(width / size);
  return (
    <Wrapper>
      {transition.map(({ item, key, props }, i) => (
        <SystemItem key={key} pathId={item} maxRow={maxRow} size={size} position={(i + 1) * 2} animatedProps={props} />
      ))}
    </Wrapper>
  );
};

export default ContainerPath;
