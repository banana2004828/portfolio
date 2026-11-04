// ============================================================
// API 中转 · 渠道数据（改倍率只动这个文件）
// 倍率 = 相对官方 API 牌价的系数（1.0 = 官方原价）
// ============================================================

export interface RelayChannel {
  name: string;
  multiple: string;
  stability: 'stable' | 'value';
  audience: string;
  perCall?: string;
}

export const RELAY_GROUPS: {
  group: string;
  desc: string;
  channels: RelayChannel[];
}[] = [
  {
    group: 'Claude 系',
    desc: '官方对接 + kiro 渠道，写作 / 编程主力',
    channels: [
      { name: 'Claude 官方正价', multiple: '1.05', stability: 'stable', audience: '生产环境 · 重质量首选' },
      { name: 'Claude 企业 kiro', multiple: '0.42', stability: 'value', audience: '日常重度使用' },
      { name: 'Claude 优选 kiro', multiple: '0.25', stability: 'value', audience: '高性价比日常' },
      { name: 'Claude 特惠 kiro', multiple: '0.15', stability: 'value', audience: '跑量 · 试用体验' },
    ],
  },
  {
    group: 'GPT 系',
    desc: 'GPT 全系号池，均有不降智标注',
    channels: [
      { name: 'GPT 企业 pro 号池 · 不降智', multiple: '0.32', stability: 'value', audience: '要原版体验的重度用户' },
      { name: 'GPT 稳定不降智 · 鹈鹕', multiple: '0.30', stability: 'stable', audience: '稳定优先' },
      { name: 'GPT 优选 plus+pro 混合池', multiple: '0.16', stability: 'value', audience: '日常对话任务' },
      { name: 'GPT 特惠 TEAM 号池', multiple: '0.10', stability: 'value', audience: '跑量 · 批量任务' },
    ],
  },
  {
    group: '其他模型',
    desc: 'Gemini / Grok / DeepSeek / GLM',
    channels: [
      { name: 'GROK 官方号池', multiple: '0.13', stability: 'value', audience: 'Grok 全系模型' },
      { name: 'Gemini 聊天池', multiple: '0.50', stability: 'value', audience: 'Gemini 日常对话' },
      { name: 'DeepSeek 满血特价', multiple: '0.18', stability: 'value', audience: 'DeepSeek 全系' },
      { name: '智普 GLM', multiple: '0.15', stability: 'stable', audience: 'GLM 全系 · 国内直连' },
    ],
  },
  {
    group: '按次计费',
    desc: '生图与按次调用，单次价格透明',
    channels: [
      { name: 'Gemini 生图', multiple: '1.5', stability: 'value', audience: 'Gemini 出图', perCall: '约 0.135 元/张' },
      { name: 'Image 生图', multiple: '1.5', stability: 'value', audience: '通用生图', perCall: '约 0.105 元/张' },
      { name: 'DeepSeek 按次', multiple: '1.5', stability: 'value', audience: '按次调用', perCall: '约 0.015 元/次' },
      { name: 'Gemini 按次', multiple: '1.5', stability: 'value', audience: '按次调用', perCall: '约 0.018 元/次' },
    ],
  },
];
