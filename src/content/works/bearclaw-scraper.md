---
title: 熊爪采集器
tagline: 自研浏览器自动化公开数据采集工具：多平台关键词采集，SQLite + CSV/Excel 落地，还能顺手出词云。Clean-room，无第三方爬虫框架源码。
category: cli
status: oss
tags: [Python, 浏览器自动化, 采集]
github: https://github.com/banana2004828/bearclaw-scraper
order: 1
---

## 这是什么

「小熊工具箱」系列的自研采集工具：用通用浏览器自动化方案（Playwright）采集**公开数据**——目前支持小红书、B 站关键词搜索结果（标题 / 作者 / 点赞 / 链接），抖音 / 微博 / 快手内测中。

采集逻辑、数据处理、安全机制全部独立编写，**不包含任何第三方爬虫框架源码**，不构成任何开源项目的衍生作品——这是刻意的 clean-room 路线，让工具没有协议包袱。

## 特点

- **一次扫码，长期复用**：浏览器扫码登录一次，登录态缓存复用。
- **多格式落地**：SQLite + CSV + Excel，`--save` 自由选择；`--wordcloud` 直接出标题词云（jieba + wordcloud）。
- **平台注册表架构**：新增平台即插即用，v0.1.1 起支持 CDP 模式与自检模式。
- **双击即用**：`启动.bat` 自动检测 Python → 建虚拟环境 → 装 Playwright → 就绪。

```bash
# 采集 20 条，CSV+Excel 双导出
python 熊爪采集.py --keyword 儿童玩具 --limit 20

# 换平台，顺手出词云
python 熊爪采集.py --platform bilibili --keyword 编程 --limit 30 --wordcloud
```

## 合规边界

只采集公开可见数据，采集逻辑与频控按平台可接受方式设计；数据用于个人选题调研与市场观察。
