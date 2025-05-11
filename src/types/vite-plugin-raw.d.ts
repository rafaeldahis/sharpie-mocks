
declare module 'vite-plugin-raw' {
  interface RawPluginOptions {
    include?: string[] | RegExp[];
    exclude?: string[] | RegExp[];
  }
  
  function rawPlugin(options?: RawPluginOptions): any;
  export default rawPlugin;
}
