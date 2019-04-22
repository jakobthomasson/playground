declare namespace System {
  export interface Map<T> {
    [key: string]: Readonly<T>;
  }

  export interface Coordinates {
    x: number;
    y: number;
  }

  export interface Dimension {
    width: number;
    height: number;
  }

  export interface NormalizedDomain<T> {
    byId: Record<string, T>;
    allIds: string[];
  }

  export type NotificationType = 'SUCCESS' | 'ERROR' | 'INFO';

  export interface Notification {
    timestamp: number;
    type: NotificationType;
    message: string;
  }

  export type Domain = 'window';

  export type FetchStatus = 'unstarted' | 'loading' | 'error' | 'done';
  export type FetchRequest = 'All';
  export type FetchStatuses = Record<FetchRequest, FetchStatus>;

  export interface Window {
    id: string;
    zIndex: number;
    dimensions: Dimension;
    position: Coordinates;
  }

  export interface File {
    id: string;
    name: string;
  }

  export interface Folder {
    id: string;
    name: string;
    fileIds: string[];
    folderIds: string;
    permissions: Permission[];
    settings: {
      iconSize: 'small' | 'medium' | 'large';
    };
  }

  export type FileType = 'folder' | 'file' | 'program';
  export type Permission = 'admin';
}

declare namespace Styles {
  type Type = 'button' | 'div' | 'span' | 'text' | 'svg';
  interface BaseTheme {
    type: Type;
  }
  /**
   * Button
   */
  export type ButtonMood = 'neutral' | 'abort' | 'danger' | 'great' | 'info';
  export type Size = 'small' | 'medium' | 'large';

  export interface ButtonTheme extends BaseTheme {
    type: 'button';
    mood: ButtonMood;
    size: Size;
  }
  export interface TextTheme extends BaseTheme {
    type: 'text';
    textValue: string;
  }

  export type Icon =
    | 'avatar-man'
    | 'avatar-female'
    | 'back'
    | 'book'
    | 'cancel'
    | 'chat-written'
    | 'chat-writing'
    | 'chat-heart'
    | 'copy'
    | 'dislike'
    | 'download'
    | 'download-detailed'
    | 'edit'
    | 'envelope'
    | 'folder'
    | 'garbage'
    | 'glasses'
    | 'hand'
    | 'headphones'
    | 'heart'
    | 'house'
    | 'like'
    | 'link'
    | 'logout'
    | 'monitor'
    | 'music-note'
    | 'next'
    | 'forward'
    | 'padlock'
    | 'paper-plane'
    | 'phone-call'
    | 'photo-camera'
    | 'pie-chart'
    | 'piggy-bank'
    | 'placeholder'
    | 'printer'
    | 'reload'
    | 'search'
    | 'settings-cogwheel'
    | 'settings-sliders'
    | 'share'
    | 'shopping-bag'
    | 'shopping-cart'
    | 'shuffle'
    | 'speaker'
    | 'star'
    | 'tag'
    | 'upload'
    | 'upload-detailed'
    | 'vector';

  export interface IconTheme extends BaseTheme {
    type: 'icon';
    size: Size;
    icon: Icon;
  }

  export interface ColorScheme {
    light: string;
    dark: string;
    normal: string;
    text: string;
  }
}
declare namespace PG {
  export interface Example {}
}

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}
