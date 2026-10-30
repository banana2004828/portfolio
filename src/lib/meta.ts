export const CATEGORIES: Record<
  string,
  { en: string; cn: string; desc: string }
> = {
  apps: {
    en: 'APPS',
    cn: '完整应用',
    desc: '能日常真实使用的完整产品，不是 demo。',
  },
  cli: {
    en: 'CLI & AUTOMATION',
    cn: '命令行与自动化',
    desc: '把重复劳动交给脚本：采集、安装、工作流自动化。',
  },
  skills: {
    en: 'AGENT SKILLS',
    cn: 'Agent 技能',
    desc: '给 AI 编排用的技能包：规划、执行、验收各司其职。',
  },
  methodology: {
    en: 'PROMPTS & METHODOLOGY',
    cn: '提示词与方法论',
    desc: '踩坑沉淀出来的流程、模板和实战笔记，每条结论都讲证据。',
  },
  wip: {
    en: 'IN PROGRESS',
    cn: '还在锅里',
    desc: '正在长出来的东西，先立个牌子。',
  },
};

export const STATUS: Record<string, string> = {
  oss: '开源',
  local: '本地运行',
  free: '免费',
  brewing: '酝酿中',
};

export const SITE = {
  name: '不睡觉变笨蛋',
  latin: 'SLEEPLESS EGG',
  tagline: '把方法论，缝成工具。',
  description:
    '不睡觉变笨蛋——个人 AI 技术服务与项目解决方案提供者。AI 实战咨询、陪跑服务、AI 会员小店，以及开源工具与方法论分享。',
  douyin: 'https://www.douyin.com/user/MS4wLjABAAAA8OZfJY3sBzdYY5wIRLrnhvYoA5WofWH6flHqBoywcbQ',
  github: 'https://github.com/banana2004828',
  shop: 'https://manboweb3.com/r/5K822X',
  qq: '1617248406',
  wechat: 'wyyyy040828',
  telegram: 'https://t.me/rolrrncnlpeil',
  telegramHandle: '@rolrrncnlpeil',
};

export const SERVICES = [
  {
    idx: '01',
    en: 'CONSULTING',
    cn: '咨询服务',
    badge: '方案整理中 · 即将上线',
    brewing: true,
    headline: '一对一诊断，把我的踩坑史变成你的路线图',
    desc: '想用 AI 提效却不知道从哪下手？把你业务摊开，我帮你找最短路径：工具选型、工作流设计、落地排期。',
    fit: ['想引入 AI 但无从下手的个人和小团队', '已有工具却跑不出效率的执行者', '需要外部视角做判断的决策者'],
    delivery: '一对一远程 · 诊断报告 + 行动清单',
  },
  {
    idx: '02',
    en: 'CO-POLISHING',
    cn: '陪跑服务',
    badge: '方案整理中 · 即将上线',
    brewing: true,
    headline: '从 0 到 1，陪你跑完第一个完整闭环',
    desc: '不是我替你做，是我带着你做。按周推进：定方案 → 盯执行 → 做复盘，直到你的第一个自动化闭环跑通。',
    fit: ['想把 AI 变成生产力的超级个体', '要做第一个自动化项目的创业者', '学了教程却落不了地的人'],
    delivery: '按周/按月 · 方案 + 执行 + 复盘节奏',
  },
  {
    idx: '03',
    en: 'AI STORE',
    cn: 'AI 小店',
    badge: '现货热卖中',
    brewing: false,
    headline: 'AI 会员代充，即买即用',
    desc: 'ChatGPT Plus / Go、Grok、Muse 等会员充值，源头供应、24h 自动发货，掉订阅按天数退款。不想等的，现货拿下。',
    fit: ['马上要用 ChatGPT Plus 的人', '要多平台会员的团队', '想省事省心的普通用户'],
    delivery: '在线下单 · 全自动发货 · 有售后',
  },
];
