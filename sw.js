// Service worker cho app HSK 3: chạy offline, tự cập nhật ngầm.
const PREFIX = 'hsk3-app-';
const V = PREFIX + '3bf7efe861';
const FONTS = 'hsk-fonts';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  // cache: 'reload' để bỏ qua cache HTTP của GitHub Pages, luôn lấy bản mới nhất
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith(PREFIX) && k !== V).map(k => caches.delete(k))))  // chỉ dọn bộ đệm của app này (hsk3 và hsk5 chung domain)
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const u = new URL(req.url);

  // Font chữ Hán từ Google Fonts: lấy cache trước, lần đầu có mạng thì lưu lại
  if (u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FONTS).then(c => c.match(req).then(hit => hit || fetch(req).then(r => {
      if (r.ok || r.type === 'opaque') c.put(req, r.clone());
      return r;
    }).catch(() => hit))));
    return;
  }

  // GitHub API (đồng bộ) và các host khác: không can thiệp
  if (u.origin !== self.location.origin) return;

  // File của app: trả bản trong cache ngay (mở tức thì, chạy offline), đồng thời tải bản mới ngầm
  e.respondWith(caches.open(V).then(async c => {
    const key = req.mode === 'navigate' ? './index.html' : req;
    const hit = await c.match(key, { ignoreSearch: true });
    // request kiểu navigate không được tạo lại kèm option, nên tải thẳng index.html
    const fr = req.mode === 'navigate' ? new Request('./index.html', { cache: 'no-cache' }) : new Request(req, { cache: 'no-cache' });
    const net = fetch(fr).then(r => {
      if (r.ok && r.type === 'basic') c.put(key, r.clone());
      return r;
    }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const r = await net;
    return r || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }));
});
