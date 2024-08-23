// vite.config.ts
import { defineConfig } from "file:///Users/eugene/github/gdsc-client/node_modules/.pnpm/vite@5.1.4_sass@1.71.1/node_modules/vite/dist/node/index.js";
import react from "file:///Users/eugene/github/gdsc-client/node_modules/.pnpm/@vitejs+plugin-react-swc@3.6.0_vite@5.1.4/node_modules/@vitejs/plugin-react-swc/index.mjs";
import tsconfigPaths from "file:///Users/eugene/github/gdsc-client/node_modules/.pnpm/vite-tsconfig-paths@4.3.1_typescript@5.3.3_vite@5.1.4/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { sentryVitePlugin } from "file:///Users/eugene/github/gdsc-client/node_modules/.pnpm/@sentry+vite-plugin@2.21.1/node_modules/@sentry/vite-plugin/dist/esm/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    sentryVitePlugin({
      org: process.env.SENTRY_ORG_NAME,
      project: process.env.SENTRY_PROJECT_NAME,
      authToken: process.env.SENTRY_AUTH_TOKEN,
      sourcemaps: {
        assets: "./dist/**",
        filesToDeleteAfterUpload: "**/*.map"
      }
    })
  ],
  build: {
    sourcemap: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZXVnZW5lL2dpdGh1Yi9nZHNjLWNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2V1Z2VuZS9naXRodWIvZ2RzYy1jbGllbnQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2V1Z2VuZS9naXRodWIvZ2RzYy1jbGllbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5cbmltcG9ydCB7IHNlbnRyeVZpdGVQbHVnaW4gfSBmcm9tICdAc2VudHJ5L3ZpdGUtcGx1Z2luJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgICBzZW50cnlWaXRlUGx1Z2luKHtcbiAgICAgIG9yZzogcHJvY2Vzcy5lbnYuU0VOVFJZX09SR19OQU1FLFxuICAgICAgcHJvamVjdDogcHJvY2Vzcy5lbnYuU0VOVFJZX1BST0pFQ1RfTkFNRSxcbiAgICAgIGF1dGhUb2tlbjogcHJvY2Vzcy5lbnYuU0VOVFJZX0FVVEhfVE9LRU4sXG4gICAgICBzb3VyY2VtYXBzOiB7XG4gICAgICAgIGFzc2V0czogJy4vZGlzdC8qKicsXG4gICAgICAgIGZpbGVzVG9EZWxldGVBZnRlclVwbG9hZDogJyoqLyoubWFwJ1xuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgc291cmNlbWFwOiB0cnVlXG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrUixTQUFTLG9CQUFvQjtBQUMvUyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFFMUIsU0FBUyx3QkFBd0I7QUFHakMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLElBQ2QsaUJBQWlCO0FBQUEsTUFDZixLQUFLLFFBQVEsSUFBSTtBQUFBLE1BQ2pCLFNBQVMsUUFBUSxJQUFJO0FBQUEsTUFDckIsV0FBVyxRQUFRLElBQUk7QUFBQSxNQUN2QixZQUFZO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUiwwQkFBMEI7QUFBQSxNQUM1QjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxFQUNiO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
