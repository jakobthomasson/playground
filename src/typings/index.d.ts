declare namespace System {
  export interface NormalizedDomain<T> {
    byId: Record<string, T>;
    allIds: string[];
  }

  export interface Coordinates {
    x: number;
    y: number;
  }

  export interface Dimensions {
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
    dimensions: Dimensions;
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

  // Menu stuff

  export type ContextMenuType = 'desktop';

  interface BaseContextMenu {
    type: ContextMenuType;
    coordinates: System.Coordinates;
  }

  export interface DesktopContextMenu extends BaseContextMenu {
    type: 'desktop';
  }

  export type ContextMenu = DesktopContextMenu;
  export interface MenuGroup {
    items: MenuItem[];
  }
  export interface MenuItem {
    icon?: Styles.Icon;
    text: string;
    subgroups?: MenuGroup[];
    action: () => void;
  }

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
  export type TextMood = 'bread' | 'menu';

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

  export type Icon =
    | 'close'
    | 'minimize'
    | 'maximize'
    | 'restore'
    | 'folder'
    | 'file'
    | 'next'
    | 'back'
    | 'placeholder';

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
