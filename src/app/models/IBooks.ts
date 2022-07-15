export interface IBooks {
  id: number;
  iframe: Iframe;
  title: string;
  listInfo: string[];
}

export interface Iframe {
  width: number;
  height: number;
  src: string;
}
