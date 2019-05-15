import React, { FunctionComponent } from 'react';
import CloseIcon from './Close';
import RestoreIcon from './Restore';
import MaximizeIcon from './Maximize';
import MinimizeIcon from './Minimize';
import FolderIcon from './Folder';
import FileIcon from './File';
import NextIcon from './Next';
import BackIcon from './Back';
import PlaceholderIcon from './Placeholder';

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
    case 'restore':
      return <RestoreIcon />;
    case 'maximize':
      return <MaximizeIcon />;
    case 'minimize':
      return <MinimizeIcon />;
    case 'folder':
      return <FolderIcon />;
    case 'file':
      return <FileIcon />;
    case 'next':
      return <NextIcon />;
    case 'back':
      return <BackIcon />;
    case 'placeholder':
      return <PlaceholderIcon />;
    default:
      return null;
  }
};

export default SvgComponent;
