
declare module 'vite-plugin-raw' {
  // Use simpler type definition that avoids RegExp test() method calls
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
