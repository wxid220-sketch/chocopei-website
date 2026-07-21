---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 50e7e72eb6f76763a4495dd48da7cb2b_012a7b2784c111f1be89525400287e28
    ReservedCode1: PEYW2AXSMveiNykbjBJ14hBUOZfKYaD0SgDtBklmfssp5b9muUkzTNqFUSMLC8J0LPd5/tjoJdNjAq7pROiSIEaUILa7hrz1BEmqgHBytaaFGS88zZQi2LBVqCcfzeBUXsVAhv7htCN0eVxu+1zLhSMmfrK4uz9zai+YIhJGEv8G8Mp4hVscqqOb+fM=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 50e7e72eb6f76763a4495dd48da7cb2b_012a7b2784c111f1be89525400287e28
    ReservedCode2: PEYW2AXSMveiNykbjBJ14hBUOZfKYaD0SgDtBklmfssp5b9muUkzTNqFUSMLC8J0LPd5/tjoJdNjAq7pROiSIEaUILa7hrz1BEmqgHBytaaFGS88zZQi2LBVqCcfzeBUXsVAhv7htCN0eVxu+1zLhSMmfrK4uz9zai+YIhJGEv8G8Mp4hVscqqOb+fM=
---

# Chocopei Website — 开发者快速上手指南 (Developer Guide)

> **目标读者**: 接手此项目的开发者  
> **预计阅读**: 15 分钟即可上手  
> **前置要求**: 熟悉 HTML/CSS/JavaScript（ES6+），了解 Git 和 GitHub Pages  

---

## 快速开始（5 分钟）

### 1. 克隆并打开项目

```bash
git clone https://github.com/wxid220-sketch/chocopei-website.git
cd chocopei-website
```

主源码位于 `chocopei-website-final` 目录中，已修复语法错误和品牌残留，可直接部署。

### 2. 启动本地开发服务器

```bash
# 方式一：Node.js serve
npx serve chocopei-website-final

# 方式二：Python
cd chocopei-website-final
python -m http.server 8080

# 方式三：VS Code
# 安装 Live Server 插件，右键 index.html → Open with Live Server
```

然后浏览器打开 `http://localhost:8080`（或 serve 提示的端口）。

### 3. 开始开发

项目使用以下命令启动本地服务器后即可预览：

---

## 项目架构速览

```
chocopei-website-final/
├── index.html          ← 唯一的 HTML 入口（SPA 架构）
├── 404.html            ← GitHub Pages 404 页面
├── sw.js               ← Service Worker（PWA 离线缓存）
├── manifest.json       ← PWA 应用清单
├── CNAME               ← 域名绑定文件（hstop.top）
├── robots.txt          ← SEO robots
├── sitemap.xml         ← SEO sitemap
├── favicon.svg         ← SVG 矢量图标
├── favicon.ico         ← ICO 图标
│
├── css/
│   ├── style.css       ← 全部样式（暗黑赛博主题）
│   └── responsive.css  ← 响应式断点（320px~1440px+）
│
├── js/
│   ├── config.js       ← ✅ 所有可配置项集中于此（语法已修复）
│   ├── app.js          ← 主控制器：启动流程/SPA路由/木鱼/香炉
│   ├── utils.js        ← 工具函数：XSS过滤/加密/Toast/打字机
│   ├── audio.js        ← 音频引擎：BGM/音效/可视化/Cross-fade
│   ├── effects.js      ← 特效+支付+功德+徽章+段位
│   ├── particles.js    ← 粒子特效：火花/飘字/光标/桃花雨
│   ├── about.js        ← 关于我板块
│   ├── passion.js      ← 热爱板块：3D视频墙/弹幕
│   ├── guestbook.js    ← 留言板：公开/私密AES-GCM加密
│   ├── starmap.js      ← 星空足迹：Leaflet地图
│   ├── cloud.js        ← 云端同步：jsonblob免Key共享
│   ├── earth.js        ← 3D地球：Three.js
│   └── admin.js        ← 管理后台
│
├── assets/
│   ├── audio/          ← BGM + 音效（16个文件）
│   │   └── music/      ← 扩展曲库（23首MP3）
│   ├── photos/         ← 照片墙素材（57张 .webp）
│   │   └── memories/   ← 回忆录照片（57张 .jpg 源文件）
│   ├── thumbnails/     ← 缩略图/封面（73张 .webp）
│   ├── avatars/        ← 登录头像（4张）
│   ├── videos/         ← 热爱视频（8条 .mp4）
│   └── portraits/      ← 动画质感人像（10张）
│
└── docs/
    ├── DEVELOPER_GUIDE.md   ← 开发者指南（本文件）
    ├── PROJECT_GUIDE.md     ← 项目全景指南
    ├── README.md            ← 交接总入口
    ├── 修改完善.docx        ← 完整需求文档（320项验收标准）
    ├── 00-开发者先看.md ~ 05-需求文档阅读摘要.md  ← 交接文档（6份）
    └── reference/           ← 参考网站源码（原 ZXW.LAT）
```

### JS 模块加载顺序

`index.html` 中 `<script>` 标签的加载顺序即为依赖关系：

```
config.js  →  utils.js  →  particles.js  →  earth.js  →  effects.js
                                                          →  about.js
                                                          →  audio.js
                                                          →  cloud.js
                                                          →  starmap.js
                                                          →  guestbook.js
                                                          →  passion.js
                                                          →  admin.js
                                                          →  app.js (最后加载，协调一切)
```

**依赖关系**: `app.js` 依赖所有其他模块；各功能模块之间通过 `window` 全局命名空间通信（`window.CONFIG`, `window.Utils`, `window.ZXAudio`, `window.App` 等）。

---

## 核心数据流

```
用户访问
  │
  ├─ 预加载页（进度条 + 语录轮换）
  │
  ├─ 登录层（可选跳过：已登录用户直接进入）
  │   ├─ 输入昵称 → localStorage.setItem('user', name)
  │   └─ 设备指纹 + 访问计数
  │
  └─ 主应用 SPA
      ├─ 首页（默认）
      │   ├─ Hero: CONFIG.hero.webp
      │   ├─ 木鱼: Merit.add() → localStorage → renderRank()
      │   ├─ 香炉: localStorage incense状态 → _incenseTick()
      │   ├─ 相册: CONFIG.album → renderAlbum()
      │   └─ 碎碎念: localStorage murmurs → renderMurmur()
      │
      ├─ 图片墙: CONFIG.gallery → Masonry + IntersectionObserver
      ├─ 热爱: CONFIG.passionVideos → 3D旋转环 + 弹幕
      ├─ 星空足迹: localStorage footprints + Cloud.syncDown()
      └─ 留言板: localStorage messages + Cloud.syncDown()
```

### 数据存储策略

| 数据类型 | 存储位置 | 加密 | 容量 |
|---------|---------|------|------|
| 用户昵称 | localStorage | 无 | - |
| 功德值 | localStorage (XOR) | 简易XOR | - |
| 支付累计 | localStorage | 无 | - |
| 心愿 | localStorage | 无 | 8条FIFO |
| 留言 | localStorage + jsonblob | 私密:AES-GCM-256 | 本地无限制,云端200条 |
| 足迹 | localStorage + jsonblob | 无 | 本地无限制,云端500条 |
| 弹幕 | localStorage | 无 | 100条 |
| 点赞/送花 | localStorage | 无 | - |
| 徽章 | localStorage | 无 | 7枚 |

---

## 关键文件修改指南

### config.js — 集中配置（改网站内容只改这里）

```javascript
const CONFIG = {
  // ===== 品牌信息 =====
  domain: 'https://hstop.top',
  siteName: 'Hương Đang Lớn 💨 | Chocopei',
  nickname: 'Chocopei',
  terminal: 'chocopei@music:~',

  // ===== 社交链接 =====
  tiktok: 'https://www.tiktok.com/@chocopei.3108',
  facebook: '...',
  // ...

  // ===== 主视觉 =====
  hero: { webp: 'assets/thumbnails/hero.webp', small: 'assets/thumbnails/hero-960.webp' },
  ogImage: 'assets/thumbnails/og-image.webp',

  // ===== 登录层4素材 =====
  login: { bg: '...', transition: '...', particle: '...', avatar: '...' },

  // ===== 相册轮播（3张） =====
  album: [ { src: '...', caption: '...' }, ... ],

  // ===== 图片墙（57张） =====
  gallery: [ { src: 'assets/photos/gallery-01.webp', ... }, ... ]  // 57张已全部配置,

  // ===== 音乐 =====
  audio: {
    main: { name: 'Chocopei Theme', src: 'assets/audio/bgm-main.mp3' },
    alt: { ... },
    extra: [ ... ],
    pure: { ... },
    defaultVolume: 0.7,
    fadeInSeconds: 2.5
  },

  // ===== 热爱视频 =====
  passionVideos: [ { id: '...', title: '...', thumb: '...', tiktokId: '...', views: '...' }, ... ],

  // ===== 关于我 =====
  hobbies: [ { id: '...', command: '...', icon: '...', title: '...', content: '...', tags: [...], color: '...', expandContent: {...} }, ... ],

  // ===== 功德段位 =====
  meritRanks: [ { name: '...', need: 0 }, ... ],

  // ...更多配置项
};
```

### index.html — 修改页面结构

- **预加载页**: `#preloader`
- **登录层**: `#login-overlay`
- **主应用**: `#app` → 内含5个 `[data-page]` 的页面容器
- **弹窗面板**: 18个 `panel-mask` 弹窗（木鱼/香炉/心愿/支付/送礼/留言等）
- **音乐面板**: `#music-panel`
- **管理后台**: `#admin-panel`

### style.css — 设计变量（改主题色改这里）

```css
:root {
  --cyan: #ff2d8a;      /* 当前为粉红，原赛博青为 #00D4FF */
  --purple: #8b5cf6;    /* 禅意紫 */
  --gold: #ff6baf;      /* 功德金 */
  /* ... */
}
```

注意：当前 `--cyan` 值已被改为粉红色 `#ff2d8a`（可能是测试或误改），赛博禅境原设配色应为 `#00D4FF`。

---

## 常见问题 FAQ

### Q: 本地打开 index.html 一片空白？
A: 检查浏览器控制台（F12）是否有 JS 错误。最常见原因是 config.js 语法错误导致所有 JS 停止执行。

### Q: 音乐不播放？
A: 浏览器自动播放策略要求用户先有一次点击/按键交互。点击页面任意处后音乐会渐入。

### Q: Service Worker 不生效？
A: SW 仅在 HTTPS 或 localhost 下生效。使用 `npx serve` 或 `http://localhost` 访问。

### Q: Leaflet 地图不显示？
A: 检查网络是否能访问 CDN（cdn.jsdelivr.net）。超时8秒后自动降级为 Canvas 2D 星图。

### Q: Three.js 地球不显示？
A: 同上，检查 CDN 可达性。失败后自动降级为 Canvas 2D 星空。

### Q: 云端同步显示"本地模式"？
A: jsonblob.com 不可达。数据仅保存在本机 localStorage，不影响网站功能。

### Q: 管理后台怎么进？
A: 管理员通过特定昵称登录（SHA-256 哈希匹配 config.js 中的 adminHash）+ 同一设备指纹，满足三层验证后，页面右上角会出现齿轮图标。

### Q: 支付功能是真实的吗？
A: 不是。本站为纯静态站点，支付为跳转外链模式。用户从支付页面返回后手动确认，前端模拟"支付成功"特效。

---

## 待修复清单（优先级排序）

| 优先级 | 任务 | 文件 | 预估时间 |
|--------|------|------|---------|
| 🔴 P0 | 修复 config.js 语法错误 | js/config.js | 1-2h |
| 🔴 P0 | 修正资源路径（audio.main.src等） | js/config.js, sw.js | 0.5h |
| 🟡 P1 | 清理 404.html 品牌残留 | 404.html | 0.5h |
| 🟡 P1 | 清理 app.js 品牌混杂（ZXW→Chocopei） | js/app.js | 1h |
| 🟡 P1 | 清理 index.html 中文残留 | index.html | 0.5h |
| 🟢 P2 | 三语 i18n 引擎接入 | index.html + js/ | 4-6h |
| 🟢 P2 | 素材压缩与格式统一 | assets/ | 3-5h |
| 🟢 P2 | 响应式多端测试 | - | 2-3h |
| ⚠️ 安全 | 从 git_history.log 移除 Token | git_history.log | 即时 |

---

## 开发约定

1. **修改内容**：优先改 config.js，不动逻辑代码
2. **提交规范**：建议使用 `[fix]` / `[feat]` / `[style]` / `[docs]` 前缀
3. **测试清单**：参考 `修改完善.docx` 中 320 项验收标准
4. **兼容性**：目标支持 Chrome/Firefox/Safari/Edge 近两年版本
5. **移动端**：以 iPhone SE (375px) 为最小支持宽度

---

## 相关文档索引

| 文档 | 路径 | 用途 |
|------|------|------|
| 项目全景指南 | `PROJECT_GUIDE.md` | 项目全貌、架构、决策记录 |
| 交接总入口 | `README.md` | 原始交接说明 |
| 需求文档 | `修改完善.docx` | 320项验收标准、美观度/UX评分 |
| 3分钟接手版 | `docs/00-开发者先看.md` | 第一天该干什么 |
| 目录结构说明 | `docs/01-目录结构说明.md` | 每个文件的职责解释 |
| 现状审计 | `docs/02-现状审计与风险清单.md` | 所有已知问题列表 |
| 素材映射 | `docs/03-素材映射与使用建议.md` | 素材从哪里来、往哪去 |
| 开发路线图 | `docs/04-开发落地路线图.md` | 五步推进详细计划 |
| 需求摘要 | `docs/05-需求文档阅读摘要.md` | 需求文档核心要点 |


### Q: 图片墙只显示27张，实际有57张照片？
A: 已修复。config.js 中 gallery 数组已补全 gallery-28 到 gallery-57 共30个条目，现在57张全部可用。

### Q: 如何添加新的音乐曲目？
A: 将 MP3 文件放入 `assets/audio/music/`，然后在 `config.js` 的 `audio.extra` 数组中添加条目：`{ name: '歌曲名', src: 'assets/audio/music/xxx.mp3' }`。

### Q: 如何更换域名？
A: 修改三个地方：①根目录 `CNAME` 文件改为新域名；② `config.js` 中 `domain` 值；③ GitHub 仓库 Settings → Pages → Custom domain 填入新域名并等待 DNS 验证。

### Q: robots.txt 和 sitemap.xml 在哪里？
A: 已在根目录生成。robots.txt 允许所有爬虫并指向 sitemap，sitemap.xml 包含首页 URL 和更新频率。

*（内容由AI生成，仅供参考）*
