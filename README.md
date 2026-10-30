# 不睡觉变笨蛋 · 个人工具库

苹果式极简风格的个人工具库网站：完整应用 / 命令行与自动化 / Agent 技能 / 提示词与方法论 / 还在锅里，五个板块。Astro 静态站，零框架依赖的前端动效（磁吸按钮、卡片 3D 倾斜、光标光晕、滚动显现）。

## 本地开发

```bash
npm install        # 首次
npm run dev        # 开发 http://localhost:4321
npm run build      # 构建到 dist/
npm run preview    # 预览构建产物
```

## 怎么更新内容（日常只用这一步）

每件工具 = `src/content/works/` 里的一个 Markdown 文件。新增工具就是加一个 `.md` 文件，改完重新部署即可自动上线。

frontmatter 字段：

```yaml
title: 标题
tagline: 一句话介绍（列表页展示）
category: apps | cli | skills | methodology | wip   # 五个板块
status: oss | local | free | brewing                # 徽章：开源/本地运行/免费/酝酿中
tags: [标签1, 标签2]
github: https://github.com/...   # 可选
cover: /images/works/xxx.png     # 可选封面图，放 public/images/works/
featured: true                   # 可选，大卡片展示
order: 1                         # 板块内排序
```

页面文案（首页标语、关于我、订阅页）直接改 `src/pages/` 下对应的 `.astro` 文件；导航和站点信息在 `src/lib/meta.ts`。

## 部署到 Cloudflare Pages（免费，不备案，国内外都能访问）

**路线 A · 今天就上线，¥0（推荐先走这条）**：不买域名，直接用 Cloudflare 送的 `xxx.pages.dev` 网址。

1. 在 GitHub 建一个空仓库（网页上点 New repository，不要勾选初始化 README）。
2. 本地推上去：
   ```bash
   git init && git add -A && git commit -m "init"
   git remote add origin https://github.com/banana2004828/<仓库名>.git
   git push -u origin main
   ```
3. [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → Create → Pages → 连接该仓库：
   - Build command: `npm run build`
   - Build output: `dist`
4. 等两分钟，得到 `https://<项目名>.pages.dev`，网站就活了。之后每次 `git push` 自动重新部署。

**路线 B · 以后随时加域名**：买了域名后，Pages 项目 → Custom domains → 添加，DNS 在 Cloudflare 一键配好，其他什么都不用改（记得把 `astro.config.mjs` 里的 `site` 换成正式域名）。国内访问速度比 pages.dev 裸址更好、也更稳。不备案也完全能跑，只是走海外节点。

## 订阅模块接入（上线售卖时）

订阅页 `/subscribe/` 里的按钮目前是「即将上线」占位。接入时：

1. 国内：注册[爱发电](https://afdian.com)建订阅方案，把链接填进按钮。
2. 海外：Stripe Payment Link 或 Gumroad 会员商品，同样替换按钮。
3. 付费内容：建议放 GitHub 私有仓库，付款后发邀请（可设自动化的 webhook）。
4. 上线后把按钮的 `btn-disabled` 类去掉。

## 待办清单

- [ ] About 页文案是我按抖音内容起草的，记得过目修改
- [ ] 先走路线 A 上线（pages.dev）；以后买域名再补路线 B
- [ ] 订阅定价，接入支付链接
- [ ] vibecoding 实战笔记系列持续整理（`vibecoding-notes.md`）

## 目录结构

```
src/
├── content/works/     # 全部工具内容（Markdown）
├── content.config.ts  # 内容字段定义
├── lib/meta.ts        # 站点信息、板块定义、状态徽章
├── layouts/Base.astro # 布局 + 全部动效脚本
├── components/        # Nav / Footer / WorkCard
├── pages/             # index / works / about / subscribe
└── styles/global.css  # 设计系统（颜色/字体/卡片/特效）
public/
├── images/            # 头像、icon、作品截图
└── favicon.svg        # 「蛋」字标
```
