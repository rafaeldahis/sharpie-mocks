
declare module 'vite-plugin-raw' {
  type FilterPattern = string | RegExp | (string | RegExp)[];
  
  interface RawPluginOptions {
    include?: FilterPattern;
    exclude?: FilterPattern;
  }
  
  function rawPlugin(options?: RawPluginOptions): {
    name: string;
    transform: (code: string, id: string) => { code: string } | undefined;
  };
  
  export default rawPlugin;
}
