declare namespace System {
  export interface NormalizedDomain<T> {
    byId: Record<string, T>;
    allIds: string[];
  }

  export interface Coordinates {
    x: number;
    y: number;
  }

  export interface Dimension {
    width: number;
    height: number;
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
    dimension: Dimension;
    position: Coordinates;
    systemItemId: string;
  }

  export interface Path {
    id: string;
    name: string;
    parentId: string | null;
    childIds: string[] | null;
    systemItemId: string | null;
  }

  export type SystemItemType = 'folder' | 'file';
  export interface BaseSystemItem {
    id: string;
    type: SystemItemType;
  }

  export interface File extends BaseSystemItem {
    type: 'file';
  }

  export interface Folder extends BaseSystemItem {
    type: 'folder';
  }

  export type SystemItem = File | Folder;

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

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

declare type PartialWithId<T> = Partial<T> & { id: string };

declare type PartialWithoutId<T> = Omit<T, 'id'>;
