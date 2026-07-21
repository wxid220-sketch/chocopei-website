---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 50e7e72eb6f76763a4495dd48da7cb2b_fe0b006d84c011f19b25525400f8a581
    ReservedCode1: qksfiDuoboTZWV9EoSizLp8Wf05OZ1zJA/dczEanKhbNGXITsAxkBDC6dGbBMn3QwTdevJeHef8MeVw71gIgY1kxvbw4B59iRKLB4cU6JJVoljIfeVGMg7ZXv1LhWcH/asVx9/RbZAQZXiTSn1qbX30qgrbf8OAWHSSWmvDDnHS8U5a5Nt1wByzWn0M=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 50e7e72eb6f76763a4495dd48da7cb2b_fe0b006d84c011f19b25525400f8a581
    ReservedCode2: qksfiDuoboTZWV9EoSizLp8Wf05OZ1zJA/dczEanKhbNGXITsAxkBDC6dGbBMn3QwTdevJeHef8MeVw71gIgY1kxvbw4B59iRKLB4cU6JJVoljIfeVGMg7ZXv1LhWcH/asVx9/RbZAQZXiTSn1qbX30qgrbf8OAWHSSWmvDDnHS8U5a5Nt1wByzWn0M=
---

# Chocopei Website — 项目全景指南 (Project Guide)

> **最后更新**: 2026-07-21  
> **域名**: hstop.top  
> **仓库**: https://github.com/wxid220-sketch/chocopei-website.git  
> **当前版本**: v5.0 ULTIMATE（开发中，待修复上线）

---

## 一、项目定位与背景

### 1.1 一句话描述
Chocopei 的个人品牌数字空间——融合**赛博禅意 + VinaHouse 音乐 + 社群归属感**的沉浸式多媒体网站。

### 1.2 主角画像

| 维度 | 详情 |
|------|------|
| **名字** | Chocopei (Huong Pei / Hương Đang Lớn) |
| **平台** | TikTok @chocopei.3108 |
| **粉丝** | 683.8K |
| **定位** | 越南 TikTok 音乐内容创作者 |
| **风格** | VinaHouse 电音、Ballad、Nhạc trẻ |
| **社交** | TikTok / Facebook / Instagram / YouTube / Threads / Telegram / SoundCloud |

### 1.3 网站核心理念
- **赛博禅境**（Cyber Zen）：暗黑底色 + 青紫金配色 + 佛教元素（木鱼/香炉/功德）
- **个人品牌**：以 Chocopei 照片、音乐、视频为核心内容
- **社群运营**：留言板、星空足迹、送礼体系构建粉丝归属感
- **三语覆盖**：越南语为主 + 中文 + 英文（i18n 引擎规划中）

---

## 二、目录结构与文件清单

```
D:\3_网红网站\                          ← 项目根目录
│
├── _归档-不需要\                ← 已归档杂物（含Token敏感文件，勿交付）
│
├── chocopei-website\             ← 原始源码副本（保留备份）
│
├── chocopei-website-final\       ← ✅【最终交付目录】完整源码+素材+文档
│   ├── index.html               主页面（528行），含预加载/登录/SPA/18个弹窗
│   ├── 404.html                 404页面（品牌已清理）
│   ├── sw.js                    Service Worker（缓存策略）
│   ├── manifest.json            PWA清单（越南语）
│   ├── CNAME                    域名绑定：hstop.top
│   ├── robots.txt               SEO robots
│   ├── sitemap.xml              SEO sitemap
│   ├── favicon.svg              SVG 矢量图标
│   ├── favicon.ico              ICO 图标
│   │
│   ├── css\
│   │   ├── style.css            主样式，暗黑赛博主题
│   │   └── responsive.css       响应式适配，移动端优先
│   │
│   ├── js\                      JavaScript 模块（13个文件）
│   │   ├── config.js            ✅ 全局配置（语法已修复，57张gallery已补全，资源引用已对齐）
│   │   ├── app.js               主逻辑：启动/SPA/木鱼/香炉/相册（品牌已清理）
│   │   ├── utils.js             通用工具：XSS/加密/Toast/设备指纹
│   │   ├── audio.js             音频引擎：BGM/音效/可视化/Cross-fade
│   │   ├── effects.js           特效系统：支付/送礼/徽章/段位/桃花雨
│   │   ├── particles.js         粒子特效：火花/飘字/光标/桃花雨
│   │   ├── about.js             关于我板块：终端风格卡片/打字机
│   │   ├── passion.js           热爱板块：3D旋转视频墙/弹幕/互动
│   │   ├── guestbook.js         留言板：公开/私密AES-GCM/PoW防滥用
│   │   ├── starmap.js           星空足迹：Leaflet地图/Canvas降级
│   │   ├── cloud.js             云端共享：jsonblob免Key云端同步
│   │   ├── earth.js             3D地球：Three.js/Canvas降级
│   │   └── admin.js             管理后台：哈希验证/相册/音乐/留言管理
│   │
│   ├── assets\
│   │   ├── audio\               BGM + 音效（16个文件）
│   │   │   └── music\           扩展曲库（23首MP3源文件）
│   │   ├── photos\              照片墙（57张 .webp）
│   │   │   └── memories\        回忆录照片（57张 .jpg 源文件）
│   │   ├── thumbnails\          缩略图/封面（73张 .webp）
│   │   ├── avatars\             登录头像（4张）
│   │   ├── videos\              热爱视频（8条 .mp4）
│   │   └── portraits\           动画质感人像（10张）
│   │
│   └── docs\
│       ├── DEVELOPER_GUIDE.md   开发者快速上手指南
│       ├── PROJECT_GUIDE.md     项目全景指南（本文件）
│       ├── README.md            交接总入口
│       ├── 修改完善.docx        完整需求文档（320项验收标准）
│       ├── 00-开发者先看.md ~ 05-需求文档阅读摘要.md  交接文档（6份）
│       └── reference\           参考网站源码（原 ZXW.LAT）
│
├── 参考-zxwlat\                  ← 参考站点（旧版成品站）
├── 可用素材\                     ← 原始媒体素材库（已整合到 final）
│
├── PROJECT_GUIDE.md             ← 项目全景指南
├── DEVELOPER_GUIDE.md           ← 开发者快速上手指南
├── README.md                    ← 原交接手册
└── 修改完善.docx                ← v5.0 ULTIMATE 完整需求文档
```

---

## 三、技术架构

### 3.1 技术栈

| 层级 | 技术选型 | 说明 |
|------|---------|------|
| **基础** | HTML5 + CSS3 + Vanilla JS (ES6+) | 零框架依赖，纯静态站点 |
| **3D渲染** | Three.js v0.160 (CDN) | 首页3D地球 + 粒子星空 |
| **地图** | Leaflet v1.9.4 (CDN) | 星空足迹地图 |
| **底图** | CARTO dark_all | 暗黑风格地图瓦片，免API Key |
| **加密** | WebCrypto API (AES-GCM-256 + PBKDF2) | 私密留言端到端加密 |
| **PWA** | Service Worker + manifest.json | 离线缓存与PWA安装 |
| **云端** | jsonblob.com | 全球足迹/留言共享（免Key免账号） |
| **部署** | GitHub Pages | CNAME 指向 hstop.top |

### 3.2 页面架构（SPA 单页应用）

```
预加载页 (Preloader)
  └→ 登录层 (Login Overlay, 可选)
       └→ 主应用 (SPA)
            ├── Trang chủ (首页)
            │   ├── Hero 主视觉
            │   ├── 电子木鱼 + 功德系统
            │   ├── 赛博香炉 + 心愿泡泡
            │   ├── 相册轮播（3张）
            │   ├── 关于我（终端风格卡片）
            │   └── 碎碎念
            ├── Gallery (图片墙 - Masonry瀑布流)
            ├── Passion (热爱板块 - 3D旋转视频墙)
            ├── Starmap (星空足迹 - Leaflet地图)
            └── Guestbook (星际终端留言板)
```

### 3.3 核心系统模块

| 模块 | JS文件 | 核心功能 |
|------|--------|---------|
| **功德系统** | effects.js (Merit) | 木鱼敲击/功德累计/6段位/突破特效 |
| **香炉系统** | app.js (incense) | 免费30秒/付费四档/功德×2/心愿FIFO |
| **送礼系统** | effects.js | 四档礼物/支付跳转/桃花雨/金光佛像 |
| **徽章系统** | effects.js (Badges) | 7枚徽章/渐次解锁/获取动画 |
| **音频引擎** | audio.js | BGM渐入/Cross-fade/页面感知切歌/可视化 |
| **云端共享** | cloud.js | jsonblob同步/容量保护/离线降级 |
| **管理后台** | admin.js | 三层验证/相册替换/曲目管理/留言管理 |

---

## 四、目前状态与待修复问题

### 4.1 已完成修复（7项）✅

| # | 问题 | 位置 | 状态 |
|---|------|------|------|
| 1 | **config.js 语法错误** | `js/config.js` | ✅ 已修复 |
| 2 | **资源路径不一致** | `js/config.js` + `sw.js` | ✅ 已修复（45处 .jpg→.webp，sw.js 全部15条路径已重写） |
| 3 | **404.html 品牌残留** | `404.html` | ✅ 已修复（lang="vi"，品牌 Chocopei） |
| 4 | **中文残留** | `index.html` | ✅ 已清理 |
| 5 | **品牌混杂** | `app.js` 多处 | ✅ ZXW.LAT → Chocopei 全部清理 |
| 6 | **登录页问候语** | `app.js` | ✅ 已清理 |
| 7 | **GitHub Token 明文** | `git_history.log` | ✅ 已归档至 `_归档-不需要/` |

---

## 五、素材资源说明

### 5.1 三层素材来源

```
可用素材/  (原始素材库)
  ├── 音乐/              →  处理后 →  assets/audio/
  ├── 回忆录/            →  处理后 →  assets/photos/
  ├── 登录动画和素材/    →  处理后 →  assets/thumbnails/ (登录层素材)
  ├── 热爱/              →  处理后 →  assets/thumbnails/ (视频封面)
  └── 动画质感人像合集/  →  处理后 →  assets/photos/ 或 assets/thumbnails/

参考-zxwlat/  (参考站点成品)
  └── assets/            →  参考  →  chocopei-website-final/assets/ (结构对照)
```

### 5.2 素材清单

| 素材类别 | 数量 | 原始位置 | 目标位置 | 格式 |
|---------|------|---------|---------|------|
| 背景音乐 | 1首主+1首备+4首扩展 | 可用素材/音乐/ | assets/audio/ | MP3 |
| 音效 | 8个 | 参考站提取 | assets/audio/sfx-*.mp3 | MP3 |
| 扩展曲库 | 23首 | 可用素材/音乐/ | assets/audio/music/ | MP3 |
| 登录头像 | 4张 | 可用素材/登录动画和素材/ | assets/avatars/ | JPG |
| 回忆录照片 | 57张 | 可用素材/回忆录/ | assets/photos/memories/ | JPG |
| 热爱视频 | 8条 | 可用素材/热爱/ | assets/videos/ | MP4 |
| 人像合集 | 10张 | 可用素材/动画质感人像合集/ | assets/portraits/ | JPG |
| 缩略图 | 73张 | chocopei-website-final/assets/thumbnails/ | 保持不变 | WebP |

---

## 六、部署说明

### 6.1 当前部署
- **方式**: GitHub Pages（仓库: wxid220-sketch/chocopei-website）
- **域名**: hstop.top（CNAME 文件已配置）
- **分支**: 主分支（推测为 main 或 master）

### 6.2 部署步骤
1. ✅ config.js 语法错误和资源路径已修复
2. ✅ 品牌残留（404.html、app.js）已清理
3. 本地测试：用 Live Server 或 `npx serve chocopei-website-final/`
4. 推送到 GitHub 仓库
5. GitHub Pages 自动部署 → hstop.top

### 6.3 本地开发
```bash
# 安装静态服务器
npm install -g serve

# 启动开发服务器
cd D:\3_网红网站\chocopei-website-final
serve .

# 或使用 VS Code Live Server 插件直接打开 index.html
```

### 6.4 重要提醒
- Service Worker 仅在 HTTPS / localhost 下生效
- 音乐自动播放需用户首次交互后触发（浏览器策略）
- Leaflet 和 Three.js 通过 CDN 加载，需网络连接
- 云端共享（jsonblob）不可用时自动降级为纯本地模式

---

## 七、开发路线图

按 `docs/04-开发落地路线图.md` 的五步推进：

| 步骤 | 内容 | 预估工时 | 状态 |
|------|------|---------|------|
| **Step 1** | 修结构：config.js语法 + 资源路径修正 | 2-4h | ⬜ 待做 |
| **Step 2** | 修配置：品牌统一 + 中文残留清理 + 三语准备 | 4-6h | ⬜ 待做 |
| **Step 3** | 修资源：素材压缩/格式转换/路径映射 | 3-5h | ⬜ 待做 |
| **Step 4** | 做视觉：CSS微调/动画优化/响应式完善 | 6-10h | ⬜ 待做 |
| **Step 5** | 部署验收：320项标准自查/多端测试/上线 | 4-6h | ⬜ 待做 |

---

## 八、关键决策记录

| 决策 | 说明 |
|------|------|
| 域名从 zxw.lat 变更为 hstop.top | 品牌独立，不再使用旧域名 |
| 域名曾短暂试用 joyyece，最终回到 hstop.top | Git历史中可见，当前最终域名为 hstop.top |
| 纯静态站点（无后端） | 所有数据存 localStorage，支付为跳转外链模式 |
| jsonblob 作为免费云端 | 替代 Supabase，免Key免账号，但公共读写 |
| 参考站 zxw.lat 为旧项目交接物 | 仅作结构和设计参考，不应直接复用代码 |

---

## 九、相关链接

| 名称 | URL |
|------|-----|
| 目标域名 | https://hstop.top |
| GitHub 仓库 | https://github.com/wxid220-sketch/chocopei-website |
| TikTok | https://www.tiktok.com/@chocopei.3108 |
| Facebook | https://www.facebook.com/huong.pee.79 |
| Instagram | https://www.instagram.com/huong.pei |
| YouTube | https://www.youtube.com/@chocopei3108 |
| Threads | https://www.threads.net/@huong.pei |
| Telegram | https://t.me/+0RDVl3Cx_zljZWJl |
| SoundCloud | https://soundcloud.com/vu-dinhdieu |
*（内容由AI生成，仅供参考）*
