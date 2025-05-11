
declare module 'vite-plugin-raw' {
  interface RawPluginOptions {
    include?: string[] | RegExp[];
    exclude?: string[] | RegExp[];
  }
  
  /**
   * Vite plugin for importing files as raw text
   * @param options - Configuration options for the plugin
   * @returns Vite plugin
   */
  function rawPlugin(options?: RawPluginOptions): {
    name: string;
    transform: (code: string, id: string) => { code: string } | undefined;
  };
  
  export default rawPlugin;
}
