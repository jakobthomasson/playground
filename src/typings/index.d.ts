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

  export type Path = LocationPath | FolderPath | FilePath | ProgramPath;
  export type PathType = 'location' | 'folder' | 'file' | 'program';

  export interface BasePath {
    id: string;
    name: string;
    parentId: string | null;
    type: PathType;
    icon: Icon;
  }
  export interface ContainerPath extends BasePath {
    childIds: string[];
    type: 'location' | 'folder';
  }
  export interface LocationPath extends ContainerPath {
    type: 'location';
    icon: 'placeholder';
  }

  export interface FolderPath extends ContainerPath {
    type: 'folder';
    icon: 'folder';
  }

  export interface FilePath extends BasePath {
    type: 'file';
    icon: 'file';
  }

  export interface ProgramPath extends BasePath {
    type: 'program';
    icon: 'maximize';
  }

  // export type SystemItemType = 'folder' | 'file';
  // export interface BaseSystemItem {
  //   id: string;
  //   type: SystemItemType;
  // }

  // export interface File extends BaseSystemItem {
  //   type: 'file';
  // }

  // export interface Folder extends BaseSystemItem {
  //   type: 'folder';
  // }

  // export type SystemItem = File | Folder;

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
  type ElementType = 'button' | 'wrapper' | 'text' | 'svg' | 'input' | 'textarea';

  export type Size = 'small' | 'medium' | 'large' | 'xlarge';

  export type ColorSchemeType = 'neutral';
  export interface ColorScheme {
    light: string;
    dark: string;
    normal: string;
    text: string;
  }

  export type Theme = ButtonTheme | TextTheme | IconTheme | InputTheme | TextAreaTheme;

  interface BaseTheme {
    element: Type;
  }

  // TODO, remove mood
  export interface ButtonTheme extends BaseTheme {
    element: 'button';
    mood: ColorSchemeType;
    size: Size;
  }

  export type TextType = 'bread' | 'menu';
  export interface TextTheme extends BaseTheme {
    element: 'text';
    type: TextType;
    size?: Size;
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
    element: 'icon';
    icon: Icon;
    size?: Size;
  }

  export type InputType = '';
  export interface InputTheme extends BaseTheme {
    element: 'input';
    size?: Size;
    type?: InputType;
  }
  export type TextAreaType = '';

  export interface TextAreaTheme extends BaseTheme {
    element: 'textarea';
    size?: Size;
    type?: TextAreaType;
  }
}

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

declare type PartialWithId<T> = Partial<T> & { id: string };

declare type PartialWithoutId<T> = Omit<T, 'id'>;

declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
