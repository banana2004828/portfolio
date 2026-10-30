---
title: Codex WorkBuddy 编排器
tagline: Codex 当规划者、安全审查者和最终验收人，WorkBuddy 只做有界任务——一个便携、本地优先的多 agent 协作分发。
category: skills
status: oss
tags: [Codex, 多 Agent, 编排]
github: https://github.com/banana2004828/codex-workbuddy-orchestrator
order: 2
---

## 这是什么

`workbuddy-orchestrator` Codex 技能的便携、本地优先分发版。核心思想是**权责分离**：

- **Codex** 负责规划、安全审查、集成和最终验收；
- **WorkBuddy** 只通过它的 headless CodeBuddy CLI 执行有界任务。

0.2.0 版本还包含可选的 Sol/Spark/Luna/DeepSeek/WorkBuddy 路由套件、面向 DeepSeek Harness 的无凭据 Qwen 视觉模板，以及与 Windows Hermes Qwen 工作流的衔接。

## 安装器的「偏执」

`node bootstrap.mjs install` 这条命令背后是一整套证据驱动的验收流程：

1. 检测 Node 20+、WorkBuddy 安装及其 CLI，**绝不读取 token、cookie、API key 或账号文件内容**；
2. 写入前先备份既有技能目录与 workers 配置，全部可逆；
3. 创建隔离冒烟工作区，派发真实 headless 任务，轮询、核对精确证据内容、校验 `result.json` 与 `allowedPaths`；
4. **所有证据通过才标记验收**——失败和成功一样保留冒烟目录供排查。

```sh
node bootstrap.mjs install              # 基础安装
node bootstrap.mjs install --enable-agent-kit   # 加装多 agent 路由
```

## 适合谁

想让多个 coding agent 分工协作、又不想放弃「谁说了算」的边界感的人。TRAE 永远不会被启用。
