// ============================================================
// 商业体系配置中心（单一事实来源）
// 改价格、改权益、改档位 → 只改这个文件
// ============================================================

/** 一对一项目服务 · 五档定价 */
export const SERVICE_TIERS = [
  {
    name: '快速技术指导',
    price: '88',
    unit: '元 / 次',
    desc: '解决一个明确的小问题',
    detail: '一个具体问题的一次性诊断与解答：报错、配置、选型、方案判断。',
    delivery: '文字/语音远程沟通，给出结论和操作步骤',
  },
  {
    name: '轻量项目陪跑',
    price: '199',
    unit: '元 / 项',
    desc: '小型项目指导',
    detail: '一个小型自动化或工具项目的方案梳理与关键步骤指导。',
    delivery: '按里程碑远程推进，含 1 个月基础售后',
  },
  {
    name: '标准项目陪跑',
    price: '399',
    unit: '元 / 项',
    desc: '完整项目学习和实施指导',
    detail: '从需求到落地的完整陪伴：方案、执行、复盘，教你跑通全流程。',
    delivery: '阶段性远程会议 + 随时文字答疑，含 1 个月基础售后',
  },
  {
    name: '深度项目陪跑',
    price: '699',
    unit: '元 / 项',
    desc: '更复杂的项目指导',
    detail: '多环节、多依赖的复杂项目：架构建议、踩坑预警、深度复盘。',
    delivery: '高频跟进 + 阶段复盘，含 1 个月基础售后',
  },
  {
    name: '定制项目服务',
    price: '999',
    unit: '元起 / 按工作量报价',
    desc: '个性化技术方案及实施',
    detail: '自动化工作流搭建、环境部署、软件调试等实施型需求。先了解需求，再单独报价。',
    delivery: '需求确认 → 报价 → 实施 → 验收，含 1 个月基础售后',
  },
] as const;

/** 服务形式的边界：四种模式严格区分 */
export const SERVICE_MODES = [
  { name: '咨询', what: '告诉客户怎么做', you: '你描述问题，我给判断和路径' },
  { name: '教学', what: '教客户学会怎么做', you: '演示 + 讲解，直到你能独立操作' },
  { name: '陪跑', what: '带客户一步一步完成', you: '方案我出，一起执行，每步我盯' },
  { name: '代操作', what: '由我直接帮客户完成', you: '按约定由我实施，交付结果' },
] as const;

/** 售后体系（购买产品或远程安装服务后） */
export const AFTERCARE = {
  period: '一个月',
  includes: [
    '约定范围内的免费咨询',
    '免费修复原服务涉及的电脑配置问题',
    '原服务相关的售后支持',
  ],
  rules: [
    '售后周期为一个月，从交付完成日起算。',
    '售后仅针对原购买产品或服务，约定范围内免费处理。',
    '新增需求、新项目和额外操作需要重新报价。',
    '超出售后周期后，可以购买新的技术支持服务（88 元起）。',
  ],
} as const;

/** 会员体系 */
export const MEMBERSHIP = {
  plus: {
    name: 'PLUS 个人技术会员',
    price: '19.9',
    unit: '元 / 月',
    tagline: '把 AI 问题，交给一个随时能问的人。',
    positioning:
      '让你在使用 AI 工具、软件、技术产品和开展项目的过程中，有一个可以持续交流和寻求技术建议的地方。',
    rights: [
      '日常 AI 工具咨询',
      '软件使用及配置问题交流',
      '常见技术报错分析',
      '电脑配置及工具选择建议',
      '文字、语音及截图交流',
      '专属会员交流社群',
      '会员之间的经验分享',
      '日常技术知识及工具使用经验分享',
    ],
    rules: [
      '不按固定问题条数收费，不设每月只能提问几个问题的机械限制。',
      '在合理使用范围内持续交流，按正常服务时间安排回复。',
      '不承诺 24 小时即时响应。',
      '不包含远程代操作、完整项目搭建和定制开发。',
      '不自动包含任何付费知识产品和付费工具——知识单独买，工具单独买。',
    ],
    status: 'live' as const,
  },
  pro: {
    name: 'PRO 专业会员',
    price: '49.9',
    unit: '元 / 月',
    tagline: '更高优先级、更深度的技术陪伴。',
    futureRights: [
      '更高优先级的响应',
      '更深入的技术问题分析',
      '更专业的技术指导',
      '定期一对一沟通',
      '更深入的项目讨论',
    ],
    status: 'reserved' as const,
  },
} as const;

/** 付费知识产品（上架一条 = 一个对象）。空数组 = 暂无已上架产品，页面显示诚实占位。 */
export const PAID_KNOWLEDGE: {
  slug: string;
  name: string;
  intro: string;
  includes: string[];
  audience: string;
  price: string;
  delivery: string;
  status: 'live' | 'brewing';
}[] = [
  {
    slug: 'vibecoding-notes-full',
    name: 'vibecoding 实战笔记 · 完整版',
    intro: '抖音实战视频的完整图文版：Codex 求职、远程办公、纯代码宣传片、闲鱼自动化出单，每篇都在真实项目里复现过。',
    includes: ['5 篇完整实战笔记', '配套可复用流程清单', '踩坑点与复盘记录'],
    audience: '想照着跑通第一个 AI 实战项目的个人',
    price: '待定',
    delivery: '在线阅读 + 资料包下载',
    status: 'brewing',
  },
];

/** 付费工具产品（上架一条 = 一个对象）。空 = 暂无，页面显示诚实占位。 */
export const PAID_TOOLS: {
  slug: string;
  name: string;
  intro: string;
  price: string;
  status: 'live' | 'brewing';
}[] = [];

/** 知识产品合集（未来功能，预留数据结构，页面不展示为已上线） */
export const KNOWLEDGE_BUNDLES: { name: string; idea: string }[] = [
  { name: 'AI 工具大全', idea: '精选工具清单 + 使用心得合集' },
  { name: 'Codex 完整学习资料包', idea: '从入门到实战的系统资料' },
  { name: 'AI 自动化实战资料包', idea: '工作流自动化案例与模板' },
  { name: '创业工具与资源合集', idea: '一人公司起步的工具箱' },
];
