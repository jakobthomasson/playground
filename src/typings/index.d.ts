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

declare namespace PG {
  export interface Example {}
}
// declare type ValueOf<T> = T[keyof T];

// declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

// declare type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
//   U[keyof U];

// declare type PartialWithId<T> = Partial<T> & { id: string };

// declare type PartialWithoutId<T> = Omit<T, "id">;

// declare type Constructor<T = {}> = new (...args: any[]) => T;

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}
