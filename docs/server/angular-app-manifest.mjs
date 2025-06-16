
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/GitProj/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/GitProj"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 440, hash: '95dc70d1ad1faebf0cb5219b4928bf52f0c91b015572e7bd56ce750b7c52996b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 953, hash: '369d03d54c0f55e1d9589b3beab338fc7664a1c898f534d11887ed9ac1cf0f3d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20779, hash: '8bcf288b407fd922d60b4f4660cf3fe0e7c87d4f65e47b50e29cf664ad89279b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
