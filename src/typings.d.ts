/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module 'marked' {
  const Marked: any;

  export = Marked;
}