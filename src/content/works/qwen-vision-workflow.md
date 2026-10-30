---
title: 千问视觉工作流
tagline: 面向 Windows 的可恢复、可验收 Qwen 视觉路由安装包：把 Agent 的图片理解交给 Qwen，密钥不落命令行、日志和 Git。
category: cli
status: oss
tags: [PowerShell, Qwen, Windows]
github: https://github.com/banana2004828/qwen-vision-workflow
order: 2
---

## 这是什么

一套面向 Windows 10/11 的**可恢复、可验收**的 Qwen 视觉路由安装包：把 Hermes Agent 的图片理解交给 Qwen 视觉模型，同时保留原来的主文本模型；兼容的 DeepSeek Harness 可以使用经过版本门控的图片桥接。

核心设计原则：**每一步变更都可诊断、可验证、可回滚**。

## 设计亮点

- **可逆安装**：`doctor → install → verify → rollback` 全链路，每次变更生成收据（receipt），回滚按收据精确执行。
- **密钥卫生**：凭据从安全来源读取，不写进命令行、日志、收据、Git 或 ZIP；诊断导出自动脱敏。
- **版本门控**：DeepSeek Harness 只接受 manifest 中记录的精确上游版本与干净受控文件，脏改动直接安全拒绝。
- **付费验证显式化**：真实视觉调用可能消耗配额，只有显式加入 `-ConfirmPaidCalls` 才会启动。

```powershell
# 只读诊断
.\qvw.ps1 -Action doctor -Json

# 安装 / 修复
.\qvw.ps1 -Action install -Json

# 查看收据、导出脱敏诊断、回滚
.\qvw.ps1 -Action status -Json
.\qvw.ps1 -Action rollback -Receipt <receipt-path> -Json
```

双击 `安装千问视觉.cmd` 和 `千问视觉管理.cmd` 即可完成主要操作，不依赖 computer use。
