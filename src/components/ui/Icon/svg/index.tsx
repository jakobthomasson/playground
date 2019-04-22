import React, { FunctionComponent } from 'react';
import AvatarManIcon from './AvatarMan';
import AvatarFemaleIcon from './AvatarFemale';
import BackIcon from './Back';
import BookIcon from './Book';
import CancelIcon from './Cancel';
import ChatHeartIcon from './ChatHeart';
import ChatWritingIcon from './ChatWriting';
import ChatWrittenIcon from './ChatWritten';
import CopyIcon from './Copy';
import DislikeIcon from './Dislike';
import DownloadIcon from './Download';
import DownloadDetailedIcon from './DownloadDetailed';
import EditIcon from './Edit';
import EnvelopeIcon from './Envelope';
import FolderIcon from './Folder';
import GarbageIcon from './Garbage';
import GlassesIcon from './Glasses';
import HandIcon from './Hand';
import HeadphonesIcon from './Headphones';
import HeartIcon from './Heart';
import HouseIcon from './House';
import LikeIcon from './Like';
import LinkIcon from './Link';
import LogoutIcon from './Logout';
import MonitorIcon from './Monitor';
import MusicNoteIcon from './MusicNote';
import NextIcon from './Next';
import ForwardIcon from './Forward';
import PadlockIcon from './Padlock';
import PaperPlaneIcon from './PaperPlane';
import PhoneCallIcon from './PhoneCall';
import PhotoCameraIcon from './PhotoCamera';
import PieChartIcon from './PieChart';
import PiggyBankIcon from './PiggyBank';
import PlaceholderIcon from './Placeholder';
import PrinterIcon from './Printer';
import ReloadIcon from './Reload';
import SearchIcon from './Search';
import SettingsCogwheelIcon from './SettingsCogwheel';
import SettingsSlidersIcon from './SettingsSliders';
import ShareIcon from './Share';
import ShoppingBagIcon from './ShoppingBag';
import ShoppingCartIcon from './ShoppingCart';
import ShuffleIcon from './Shuffle';
import SpeakerIcon from './Speaker';
import StarIcon from './Star';
import TagIcon from './Tag';
import UploadIcon from './Upload';
import UploadDetailedIcon from './UploadDetailed';
import VectorIcon from './Vector';

/**
 * https://www.flaticon.com/packs/multimedia-collection
 */
type Props = {
  icon: Styles.Icon;
};

const SvgComponent: FunctionComponent<Props> = (props: Props) => {
  const { icon } = props;
  switch (icon) {
    case 'avatar-man':
      return <AvatarManIcon />;
    case 'avatar-female':
      return <AvatarFemaleIcon />;
    case 'back':
      return <BackIcon />;
    case 'book':
      return <BookIcon />;
    case 'cancel':
      return <CancelIcon />;
    case 'chat-heart':
      return <ChatHeartIcon />;
    case 'chat-writing':
      return <ChatWritingIcon />;
    case 'chat-written':
      return <ChatWrittenIcon />;
    case 'copy':
      return <CopyIcon />;
    case 'dislike':
      return <DislikeIcon />;
    case 'download':
      return <DownloadIcon />;
    case 'download-detailed':
      return <DownloadDetailedIcon />;
    case 'edit':
      return <EditIcon />;
    case 'envelope':
      return <EnvelopeIcon />;
    case 'folder':
      return <FolderIcon />;
    case 'garbage':
      return <GarbageIcon />;
    case 'glasses':
      return <GlassesIcon />;
    case 'hand':
      return <HandIcon />;
    case 'headphones':
      return <HeadphonesIcon />;
    case 'heart':
      return <HeartIcon />;
    case 'house':
      return <HouseIcon />;
    case 'like':
      return <LikeIcon />;
    case 'link':
      return <LinkIcon />;
    case 'logout':
      return <LogoutIcon />;
    case 'monitor':
      return <MonitorIcon />;
    case 'music-note':
      return <MusicNoteIcon />;
    case 'next':
      return <NextIcon />;
    case 'forward':
      return <ForwardIcon />;
    case 'padlock':
      return <PadlockIcon />;
    case 'paper-plane':
      return <PaperPlaneIcon />;
    case 'phone-call':
      return <PhoneCallIcon />;
    case 'photo-camera':
      return <PhotoCameraIcon />;
    case 'pie-chart':
      return <PieChartIcon />;
    case 'piggy-bank':
      return <PiggyBankIcon />;
    case 'placeholder':
      return <PlaceholderIcon />;
    case 'printer':
      return <PrinterIcon />;
    case 'reload':
      return <ReloadIcon />;
    case 'search':
      return <SearchIcon />;
    case 'settings-cogwheel':
      return <SettingsCogwheelIcon />;
    case 'settings-sliders':
      return <SettingsSlidersIcon />;
    case 'share':
      return <ShareIcon />;
    case 'shopping-bag':
      return <ShoppingBagIcon />;
    case 'shopping-cart':
      return <ShoppingCartIcon />;
    case 'shuffle':
      return <ShuffleIcon />;
    case 'speaker':
      return <SpeakerIcon />;
    case 'star':
      return <StarIcon />;
    case 'tag':
      return <TagIcon />;
    case 'upload':
      return <UploadIcon />;
    case 'upload-detailed':
      return <UploadDetailedIcon />;
    case 'vector':
      return <VectorIcon />;
  }
};

export default SvgComponent;
