import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import EnvironmentPlugin from 'vite-plugin-environment';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /*
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
    EnvironmentPlugin('all'),
  ],
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    target: 'esnext',
  },
});
