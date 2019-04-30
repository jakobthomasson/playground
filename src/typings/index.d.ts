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

  export interface SystemItem {
    id: string;
    type: 'file' | 'folder';
    name: string;
    path: string[];
  }

  export interface File extends SystemItem {
    type: 'file';
  }

  export interface Folder extends SystemItem {
    type: 'folder';
  }

  export type FileType = 'folder' | 'file';
  export type Permission = 'admin';
}

declare namespace Styles {
  type Type = 'button' | 'wrapper' | 'text' | 'svg';
  interface BaseTheme {
    type: Type;
  }
  /**
   * Button
   */
  export type ButtonMood = 'neutral' | 'abort' | 'danger' | 'great' | 'info';
  export type TextMood = 'bread';

  export type Size = 'small' | 'medium' | 'large' | 'xlarge';
  export interface ButtonTheme extends BaseTheme {
    type: 'button';
    mood: ButtonMood;
    size: Size;
  }
  export interface TextTheme extends BaseTheme {
    type: 'text';
    mood: TextMood;
  }

  export type Icon = 'close' | 'minimize' | 'maximize' | 'hide' | 'folder' | 'file';

  export interface IconTheme extends BaseTheme {
    type: 'icon';
    size: Size;
    icon: Icon;
  }

  export interface WrapperTheme extends BaseTheme {
    type: 'wrapper';
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
