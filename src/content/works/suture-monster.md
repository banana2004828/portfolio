---
title: 缝合怪 SutureMonster
tagline: 你说需求，它去 GitHub 调研，把各开源项目的优势「缝」在一起，产出一份可审阅、可定制的《缝合产品手册》。每条优劣结论都附证据链接。
category: skills
status: oss
tags: [Agent Skill, 方法论, GitHub 调研]
github: https://github.com/banana2004828/suture-monster
featured: true
order: 1
---

## 它解决什么

GitHub 上的项目浩如烟海，同一个需求往往有十几个开源项目都能做，但各有优劣：有的架构好但文档烂，有的功能全但许可证不友好，有的活跃但设计范式完全不同。重复造轮子的成本，其实花在「选轮子」上。

**缝合怪**提供一套方法论 + 可复用 Prompt + 模板，让 AI 按固定流程调研、定优劣、做缝合，最后产出《缝合产品手册》。

## 六步流程

1. **收敛需求** — 把模糊的想法压成可调研的明确问题
2. **检索 GitHub** — 找齐相关项目，不漏候选
3. **公开信号粗筛** — star、活跃度、issue 质量，快速排除
4. **深读入围项目** — 逐个定优劣，结论可追溯
5. **选最佳底座** — 用多维判定表查兼容性
6. **不兼容就造通用底座** — 最终产出《缝合产品手册》

手册里**每条优劣结论都附 repo + 证据链接**，使用者能自己评估调研质量，也能在成册后做轻量定制。

## 它不是什么

- ❌ 不是自动写代码的工具（第一版是方法论资产，零运行依赖）
- ❌ 不是单纯的 awesome-list 生成器（不止罗列，还要定优劣、做缝合）
- ❌ 不是黑盒结论（所有判断必须可追溯）

## 使用方式

装成 agent 技能，一句话启动：

```bash
git clone https://github.com/banana2004828/suture-monster.git ~/.claude/skills/suture-monster
```
