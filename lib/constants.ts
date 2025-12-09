export const SITE_CONFIG = {
  name: "AI FLOW",
  title: "AI Workflows for Everyone",
  description: "通过飞书、n8n、Coze 构建自动化工作流,提升个人与团队效率",
  email: "adrianyang@shareworld.cc",
};

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Contact", href: "#contact" },
];

export const FEATURES = [
  {
    icon: "Code2",
    title: "无需代码",
    description: "可视化配置,无需编程背景即可构建复杂工作流",
  },
  {
    icon: "Layers",
    title: "多平台集成",
    description: "无缝连接飞书、n8n、Coze、OpenAI等主流平台",
  },
  {
    icon: "Brain",
    title: "AI 原生",
    description: "深度集成GPT-4、Claude等前沿AI模型",
  },
  {
    icon: "Zap",
    title: "实时自动化",
    description: "7x24小时不间断运行,实时响应业务需求",
  },
];

export const USE_CASES = [
  {
    icon: "Bot",
    title: "客服自动回复",
    description: "智能理解用户问题,自动生成专业回复",
  },
  {
    icon: "FileText",
    title: "社媒内容生成",
    description: "一键生成高质量社交媒体内容和营销文案",
  },
  {
    icon: "BarChart",
    title: "数据分析报告",
    description: "自动收集数据,生成可视化分析报告",
  },
];

export const WORKFLOW_NODES = [
  {
    id: "input",
    icon: "MessageSquare",
    label: "飞书消息",
  },
  {
    id: "process",
    icon: "Cpu",
    label: "AI Agent",
  },
  {
    id: "output",
    icon: "Send",
    label: "自动回复",
  },
];
