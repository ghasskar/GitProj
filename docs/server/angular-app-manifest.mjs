
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/AngEX01',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/AngEX01"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 439, hash: '851d6a840a294590960ca9dae6866c0dbaf2e651bc7d5557c38a6f370d19a1dc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 952, hash: 'ee47bbbc6b42245e9026ac488321adac38dcd4bd7e95d3e81456b2728e6b056a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20778, hash: '7963097ec0c38b72160f9ae616415b9de47f7e6fbd46a84053096fbed487a312', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
