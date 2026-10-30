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
    '不睡觉变笨蛋的个人作品集：完整应用、命令行工具、Agent 技能、提示词与方法论。一个 AI 重度实践者，把踩过的坑变成工具和方法。',
  douyin: 'https://www.douyin.com/user/MS4wLjABAAAA8OZfJY3sBzdYY5wIRLrnhvYoA5WofWH6flHqBoywcbQ',
  github: 'https://github.com/banana2004828',
};
