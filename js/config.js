/* ============================================================================
 * Chocopei — 全局配置（config.js）
 * ----------------------------------------------------------------------------
 * 所有可配置项集中于此：品牌信息、曲目、图片、支付、爱好档案、热爱视频、
 * 徽章、语录、API Key 占位等。修改网站内容时优先改这里，无需动逻辑代码。
 * 资源一律使用相对路径，可直接部署到 GitHub Pages 根目录。
 * ==========================================================================*/

const CONFIG = {
  /* ---- 品牌与基础信息 ---- */
  domain: 'https://hstop.top',          // 唯一操作域名 — v5.0 ULTIMATE
  siteName: 'Hương Đang Lớn 💨 | Chocopei',
  nickname: 'Chocopei',
  terminal: 'chocopei@music:~',
  tiktok: 'https://www.tiktok.com/@chocopei.3108',
  facebook: 'https://www.facebook.com/huong.pee.79',
  instagram: 'https://www.instagram.com/huong.pei',
  youtube: 'https://www.youtube.com/@chocopei3108',
  threads: 'https://www.threads.net/@huong.pei',
  telegram: 'https://t.me/+0RDVl3Cx_zljZWJl',
  soundcloud: 'https://soundcloud.com/vu-dinhdieu',

  /* ---- 主视觉 / OG 图片 ---- */
  hero: {
    webp: 'assets/thumbnails/login_avatar.webp',     // 全尺寸 Hero 背景
    small: 'assets/thumbnails/login_particle.webp' // 小屏响应式版本
  },
  ogImage: 'assets/thumbnails/login_avatar.webp', // 1200×630 OG 图（相对路径，部署后拼绝对 URL）

  /* ---- 登录层 4 素材（第二部分第三章） ---- */
  login: {
  bg: 'assets/thumbnails/login_bg.webp',          // 素材1：主背景（缓慢缩放）
  transition: 'assets/thumbnails/login_transition.webp', // 素材2：转场画面
  particle: 'assets/thumbnails/login_particle.webp',     // 素材3：装饰粒子（轨道漂浮）
  avatar: 'assets/thumbnails/login_avatar.webp'          // 素材4：中央头像（呼吸灯边框）
  },

  /* ---- 相册轮播（三张照片） ---- */
  album: [
    { src: 'assets/thumbnails/album-1.webp', caption: '🎵 Thư giãn cùng nhạc' },
    { src: 'assets/thumbnails/album-2.webp', caption: '🎬 Hậu trường quay' },
    { src: 'assets/thumbnails/album-3.webp', caption: '🎤 Âm nhạc & Đam mê' }
  ],
  albumInterval: 8000, // 自动播放间隔 8 秒

  /* ---- 图片墙（57 张，Masonry 瀑布流） ---- */
  gallery: [
      { src: 'assets/photos/gallery-01.webp', date: '2026', alt: 'Khoanh khac 1' },
      { src: 'assets/photos/gallery-02.webp', date: '2026', alt: 'Khoanh khac 2' },
      { src: 'assets/photos/gallery-03.webp', date: '2026', alt: 'Khoanh khac 3' },
      { src: 'assets/photos/gallery-04.webp', date: '2026', alt: 'Khoanh khac 4' },
      { src: 'assets/photos/gallery-05.webp', date: '2026', alt: 'Khoanh khac 5' },
      { src: 'assets/photos/gallery-06.webp', date: '2026', alt: 'Khoanh khac 6' },
      { src: 'assets/photos/gallery-07.webp', date: '2026', alt: 'Khoanh khac 7' },
      { src: 'assets/photos/gallery-08.webp', date: '2026', alt: 'Khoanh khac 8' },
      { src: 'assets/photos/gallery-09.webp', date: '2026', alt: 'Khoanh khac 9' },
      { src: 'assets/photos/gallery-10.webp', date: '2026', alt: 'Khoanh khac 10' },
      { src: 'assets/photos/gallery-11.webp', date: '2026', alt: 'Khoanh khac 11' },
      { src: 'assets/photos/gallery-12.webp', date: '2026', alt: 'Khoanh khac 12' },
      { src: 'assets/photos/gallery-13.webp', date: '2026', alt: 'Khoanh khac 13' },
      { src: 'assets/photos/gallery-14.webp', date: '2026', alt: 'Khoanh khac 14' },
      { src: 'assets/photos/gallery-15.webp', date: '2026', alt: 'Khoanh khac 15' },
      { src: 'assets/photos/gallery-16.webp', date: '2026', alt: 'Khoanh khac 16' },
      { src: 'assets/photos/gallery-17.webp', date: '2026', alt: 'Khoanh khac 17' },
      { src: 'assets/photos/gallery-18.webp', date: '2026', alt: 'Khoanh khac 18' },
      { src: 'assets/photos/gallery-19.webp', date: '2026', alt: 'Khoanh khac 19' },
      { src: 'assets/photos/gallery-20.webp', date: '2026', alt: 'Khoanh khac 20' },
      { src: 'assets/photos/gallery-21.webp', date: '2026', alt: 'Khoanh khac 21' },
      { src: 'assets/photos/gallery-22.webp', date: '2026', alt: 'Khoanh khac 22' },
      { src: 'assets/photos/gallery-23.webp', date: '2026', alt: 'Khoanh khac 23' },
      { src: 'assets/photos/gallery-24.webp', date: '2026', alt: 'Khoanh khac 24' },
      { src: 'assets/photos/gallery-25.webp', date: '2026', alt: 'Khoanh khac 25' },
      { src: 'assets/photos/gallery-26.webp', date: '2026', alt: 'Khoanh khac 26' },
      { src: 'assets/photos/gallery-27.webp', date: '2026', alt: 'Khoanh khac 27' },
      { src: 'assets/photos/gallery-28.webp', date: '2026', alt: 'Khoanh khac 28' },
      { src: 'assets/photos/gallery-29.webp', date: '2026', alt: 'Khoanh khac 29' },
      { src: 'assets/photos/gallery-30.webp', date: '2026', alt: 'Khoanh khac 30' },
      { src: 'assets/photos/gallery-31.webp', date: '2026', alt: 'Khoanh khac 31' },
      { src: 'assets/photos/gallery-32.webp', date: '2026', alt: 'Khoanh khac 32' },
      { src: 'assets/photos/gallery-33.webp', date: '2026', alt: 'Khoanh khac 33' },
      { src: 'assets/photos/gallery-34.webp', date: '2026', alt: 'Khoanh khac 34' },
      { src: 'assets/photos/gallery-35.webp', date: '2026', alt: 'Khoanh khac 35' },
      { src: 'assets/photos/gallery-36.webp', date: '2026', alt: 'Khoanh khac 36' },
      { src: 'assets/photos/gallery-37.webp', date: '2026', alt: 'Khoanh khac 37' },
      { src: 'assets/photos/gallery-38.webp', date: '2026', alt: 'Khoanh khac 38' },
      { src: 'assets/photos/gallery-39.webp', date: '2026', alt: 'Khoanh khac 39' },
      { src: 'assets/photos/gallery-40.webp', date: '2026', alt: 'Khoanh khac 40' },
      { src: 'assets/photos/gallery-41.webp', date: '2026', alt: 'Khoanh khac 41' },
      { src: 'assets/photos/gallery-42.webp', date: '2026', alt: 'Khoanh khac 42' },
      { src: 'assets/photos/gallery-43.webp', date: '2026', alt: 'Khoanh khac 43' },
      { src: 'assets/photos/gallery-44.webp', date: '2026', alt: 'Khoanh khac 44' },
      { src: 'assets/photos/gallery-45.webp', date: '2026', alt: 'Khoanh khac 45' },
      { src: 'assets/photos/gallery-46.webp', date: '2026', alt: 'Khoanh khac 46' },
      { src: 'assets/photos/gallery-47.webp', date: '2026', alt: 'Khoanh khac 47' },
      { src: 'assets/photos/gallery-48.webp', date: '2026', alt: 'Khoanh khac 48' },
      { src: 'assets/photos/gallery-49.webp', date: '2026', alt: 'Khoanh khac 49' },
      { src: 'assets/photos/gallery-50.webp', date: '2026', alt: 'Khoanh khac 50' },
      { src: 'assets/photos/gallery-51.webp', date: '2026', alt: 'Khoanh khac 51' },
      { src: 'assets/photos/gallery-52.webp', date: '2026', alt: 'Khoanh khac 52' },
      { src: 'assets/photos/gallery-53.webp', date: '2026', alt: 'Khoanh khac 53' },
      { src: 'assets/photos/gallery-54.webp', date: '2026', alt: 'Khoanh khac 54' },
      { src: 'assets/photos/gallery-55.webp', date: '2026', alt: 'Khoanh khac 55' },
      { src: 'assets/photos/gallery-56.webp', date: '2026', alt: 'Khoanh khac 56' },
      { src: 'assets/photos/gallery-57.webp', date: '2026', alt: 'Khoanh khac 57' }
    ],

  /* ---- 音乐曲目 ----
   * main：主背景音乐（Chocopei Theme）；alt：备选（爱的回归线.mp3）；
   * extra：扩展曲库（素材库精选）；pure：彩蛋纯净版（禅意白噪音）。 */
  audio: {
    main: { name: 'Chocopei Theme', src: 'assets/audio/bgm-main.mp3' },
    alt:  { name: '爱的回归线', src: 'assets/audio/bgm-alt.mp3' },
    extra: [
      { name: '山丘', src: 'assets/audio/track-1.mp3' },
      { name: '海阔天空', src: 'assets/audio/track-2.mp3' },
      { name: '人间', src: 'assets/audio/track-3.mp3' },
      { name: '夜巴黎', src: 'assets/audio/track-4.mp3' }
    ],
    pure: { name: '禅意·纯净版', src: 'assets/audio/pure-zen.mp3' },
    defaultVolume: 0.7,   // 默认音量 70%
    fadeInSeconds: 2.5    // 载入后 0→70% 渐入时长
  },

  /* ---- 音效（按需加载） ---- */
  sfx: {
    click: 'assets/audio/sfx-click.mp3',      // 咔哒
    woodfish: 'assets/audio/sfx-woodfish.mp3',   // 木鱼敲击
    incense: 'assets/audio/sfx-incense.mp3',    // 香炉点燃
    levelup: 'assets/audio/sfx-levelup.mp3',    // 功德升级
    peach: 'assets/audio/sfx-peach.mp3',      // 桃花雨
    login: 'assets/audio/sfx-login.mp3',      // 登录成功
    transition: 'assets/audio/sfx-transition.mp3', // 转场
    bell: 'assets/audio/sfx-bell.mp3'        // 钟声
  },

  /* ---- 功德段位 ---- */
  meritRanks: [
    { name: '尘世散修', need: 0 },
    { name: '静心居士', need: 100 },
    { name: '大悲行者', need: 500 },
    { name: '般若行者', need: 2000 },
    { name: '功德无量', need: 10000 },
    { name: '赛博斗战胜佛', need: 50000 }
  ],

  /* ---- 木鱼飘字 ---- */
  floatGain: ['功德 +1', '升职加薪 +1 💸', '逢考必过 +1 🎓', '逆天改命 +99 🔥'],
  floatLoss: ['压力 -1', '烦恼 -1', 'Bug -1', '脂肪 -1', '脱发 -1', '水逆 -1'],

  /* ---- 赛博香炉：免费 30 秒 / 付费四档 ---- */
  incense: {
    freeDuration: 30, // 秒
    tiers: [
      { amount: '6.66',  label: '¥6.66',  durationText: '1 小时', hours: 1 },
      { amount: '9.99',  label: '¥9.99',  durationText: '3 小时', hours: 3 },
      { amount: '66.66', label: '¥66.66', durationText: '2 天',   hours: 48 },
      { amount: '188.88',label: '¥188.88',durationText: '5 天',   hours: 120 }
    ],
    wishMaxLen: 10,   // 心愿最长 10 字
    nameMaxLen: 5,    // 留名最长 5 字
    wishQueueMax: 8   // 心愿泡泡 FIFO 队列容量
  },

  /* ---- 功德送礼四档（礼物 + 功德暴增 + 特效） ---- */
  gifts: [
    { amount: '6.66',   label: '¥6.66',   name: '赛博莲花',     merit: 1000,  effect: 'lotus' },
    { amount: '9.99',   label: '¥9.99',   name: '禅意香炉',     merit: 3000,  effect: 'incense' },
    { amount: '66.66',  label: '¥66.66',  name: '功德金身',     merit: 20000, effect: 'golden' },
    { amount: '188.88', label: '¥188.88', name: '赛博斗战胜佛', merit: 50000, effect: 'wukong' }
  ],

  /* ---- 热爱板块：3D 旋转视频墙 ---- */
  passionVideos: [
    { id: 'passion-1', title: 'Bi nhac bip', thumb: 'assets/thumbnails/login_bg.webp', tiktokId: '7560694125347998997', views: '1.6M' },
    { id: 'passion-2', title: 'Nhac Khu 13', thumb: 'assets/thumbnails/login_avatar.webp', tiktokId: '7657214962464541972', views: '503.8K' },
    { id: 'passion-3', title: 'Nhac go lu', thumb: 'assets/thumbnails/login_particle.webp', tiktokId: '7655362099589238036', views: '563.6K' },
    { id: 'passion-4', title: 'Nhac hot TikTok', thumb: 'assets/thumbnails/hobby-music.webp', tiktokId: '7663485614003834133', views: '45.5K' },
    { id: 'passion-5', title: 'World Cup 2026', thumb: 'assets/thumbnails/hobby-tennis.webp', tiktokId: '7659792192080203028', views: '236.3K' },
    { id: 'passion-6', title: 'LIVE vui ve', thumb: 'assets/thumbnails/login_transition.webp', tiktokId: '7660880367674526997', views: '86.7K' },
    { id: 'passion-7', title: 'Hot khong Vinahouse', thumb: 'assets/thumbnails/hobby-social.webp', tiktokId: '7662352260042902805', views: '166.8K' },
    { id: 'passion-8', title: 'Nhac chuong Zalo', thumb: 'assets/thumbnails/hobby-travel.webp', tiktokId: '7657890791741951253', views: '143.3K' }
  ],

  /* ---- 关于我 — 爱好档案（五大模块，终端风格） ---- */
  hobbies: [
    {
      id: 'music', command: 'cat bg_music.log', icon: 'note',
      title: '🎵 Am nhac moi ngay',
      content: 'Moi ngay mang den nhung giai dieu hay nhat cho cong dong 683.8K nguoi yeu nhac tren TikTok!',
      tags: ['TikTok', 'Am nhac', 'Sang tao'], color: '#ff2d8a',
      expandContent: { playlist: ['Nhac hot TikTok', 'Ballad', 'Remix'], mood: 'Soi dong' }
    },
    {
      id: 'live', command: 'cat live_stream.log', icon: 'note',
      title: '🎤 LIVE moi tuan',
      content: 'Lich LIVE: Thu Hai nhac buon, Thu Ba & Nam Ballad, cuoi tuan Weekend Party!',
      tags: ['LIVE', 'Giao luu', 'Hat'], color: '#8b5cf6',
      expandContent: { recommendations: ['Thu Hai 19:00', 'Thu Ba 20:00', 'Cuoi tuan 21:00'] }
    },
    {
      id: 'create', command: 'cat content_creator.log', icon: 'note',
      title: '🎬 Sang tao noi dung',
      content: '12M luot thich tren TikTok. Luon tim toi xu huong moi!',
      tags: ['Sang tao', 'Xu huong', 'Trieu view'], color: '#ff6baf',
      expandContent: { progress: '683.8K Followers', goal: '1 Trieu Followers' }
    },
    {
      id: 'social', command: 'cat community.log', icon: 'handshake',
      title: '💜 Cong dong',
      content: 'Cac trang chinh chu chi co trong link bio! Cam on moi nguoi!',
      tags: ['Facebook', 'Instagram', 'YouTube', 'Telegram'], color: '#22c55e',
      expandContent: { communities: ['TikTok', 'Facebook', 'Instagram', 'YouTube', 'Telegram'] }
    }
  ],

  /* ---- 加载禅意语录（10 条） ---- */
  quotes: [
    'Dang tai the gioi am nhac cua Chocopei...',
    '683.8K nguoi yeu thich dang cho ban!',
    'Cac trang chinh chu chi co trong link bio!',
    'Moi ngay la mot giai dieu moi!',
    'Cam on cac ban da dong hanh!',
    'Tha tim de gui yeu thuong!',
    'Nghe nhac va tan huong cuoc song!',
    'Trieu view va dang tiep tuc!',
    'Ung ho de minh sang tao nhe!',
    'Huong Dang Lon - Chocopei Music!'
  ]
};

/* 供其他模块读取的全局命名空间 */
window.CONFIG = CONFIG;

/* WebP 降级：不支持 WebP 的浏览器（Telegram 内置浏览器等）自动将所有 .webp 路径替换为 .jpg */
(function(){
  if (document.documentElement.classList.contains('no-webp')) {
    (function walk(obj) {
      if (!obj || typeof obj !== 'object') return;
      Object.keys(obj).forEach(function(k) {
        var v = obj[k];
        if (typeof v === 'string' && v.endsWith('.webp')) {
          obj[k] = v.replace(/\.webp$/i, '.jpg');
        } else if (Array.isArray(v)) {
          v.forEach(function(item) { walk(item); });
        } else if (typeof v === 'object') {
          walk(v);
        }
      });
    })(CONFIG);
  }
})();
