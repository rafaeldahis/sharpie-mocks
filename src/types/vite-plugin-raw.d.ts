
declare module 'vite-plugin-raw' {
  interface RawPluginOptions {
    include?: string | string[];
    exclude?: string | string[];
  }
  
  function rawPlugin(options?: RawPluginOptions): {
    name: string;
    transform: (code: string, id: string) => { code: string } | undefined;
  };
  
  export default rawPlugin;
}
