import React, { FunctionComponent } from 'react';
import CloseIcon from './Close';
import HideIcon from './Hide';
import MaximizeIcon from './Maximize';
import MinimizeIcon from './Minimize';


/**
 * https://www.flaticon.com/packs/multimedia-collection
 * https://www.flaticon.com/packs/essential-set-2/2
 */
type Props = {
  icon: Styles.Icon;
};

const SvgComponent: FunctionComponent<Props> = (props: Props) => {
  const { icon } = props;
  switch (icon) {
    case 'close':
      return <CloseIcon />;
    case 'hide':
      return <HideIcon />;
    case 'maximize':
      return <MaximizeIcon />;
    case 'minimize':
      return <MinimizeIcon />;
  }
};

export default SvgComponent;
