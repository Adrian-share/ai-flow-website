export const translations = {
  zh: {
    // Site Config
    siteName: "AI FLOW",
    siteTitle: "AI Workflows for Everyone",
    siteDescription: "通过飞书、n8n、Coze 构建自动化工作流,提升个人与团队效率",

    // Navigation
    navHome: "首页",
    navFeatures: "功能",
    navUseCases: "应用场景",
    navContact: "联系我们",

    // Hero Section
    heroTitle: "AI Workflows for Everyone",
    heroDescription: "通过飞书、n8n、Coze 构建自动化工作流,提升个人与团队效率",
    ctaConsult: "立即咨询",

    // Features Section
    featuresTitle: "产品能力",
    featuresSubtitle: "强大的功能,助力您的工作流自动化",
    feature1Title: "无需代码",
    feature1Desc: "可视化配置,无需编程背景即可构建复杂工作流",
    feature2Title: "多平台集成",
    feature2Desc: "无缝连接飞书、n8n、Coze、OpenAI等主流平台",
    feature3Title: "AI 原生",
    feature3Desc: "深度集成GPT-4、Claude等前沿AI模型",
    feature4Title: "实时自动化",
    feature4Desc: "7x24小时不间断运行,实时响应业务需求",

    // Use Cases Section
    useCasesTitle: "应用场景",
    useCasesSubtitle: "适用于各种业务场景",
    useCase1Title: "客服自动回复",
    useCase1Desc: "智能理解用户问题,自动生成专业回复",
    useCase2Title: "社媒内容生成",
    useCase2Desc: "一键生成高质量社交媒体内容和营销文案",
    useCase3Title: "数据分析报告",
    useCase3Desc: "自动收集数据,生成可视化分析报告",

    // Workflow Section
    workflowTitle: "工作流演示",
    workflowSubtitle: "可视化,自动化",
    workflowNode1: "飞书消息",
    workflowNode2: "AI Agent",
    workflowNode3: "自动回复",

    // CTA Section
    ctaTitle: "Ready to automate?",
    ctaSubtitle: "立即联系我们,开启您的自动化之旅",
    ctaButton: "联系我们",

    // Footer
    footerRights: "© 2024 AI FLOW. 保留所有权利。",

    // Contact Form
    formTitle: "立即咨询",
    formSubtitle: "填写信息，我们将尽快与您联系",
    formName: "姓名",
    formEmail: "邮箱",
    formCompany: "公司名称",
    formMessage: "咨询内容",
    formNamePlaceholder: "请输入您的姓名",
    formEmailPlaceholder: "your@email.com",
    formCompanyPlaceholder: "您的公司（可选）",
    formMessagePlaceholder: "请描述您的需求或问题...",
    formSubmit: "发送咨询",
    formSubmitting: "发送中...",
    formSuccess: "已发送！",
    formError: "发送失败，请稍后重试",
    formRequired: "*",
  },
  en: {
    // Site Config
    siteName: "AI FLOW",
    siteTitle: "AI Workflows for Everyone",
    siteDescription: "Build automated workflows with Feishu, n8n, and Coze to boost productivity",

    // Navigation
    navHome: "Home",
    navFeatures: "Features",
    navUseCases: "Use Cases",
    navContact: "Contact",

    // Hero Section
    heroTitle: "AI Workflows for Everyone",
    heroDescription: "Build automated workflows with Feishu, n8n, and Coze to boost productivity",
    ctaConsult: "Get Started",

    // Features Section
    featuresTitle: "Features",
    featuresSubtitle: "Powerful capabilities to automate your workflow",
    feature1Title: "No Code Required",
    feature1Desc: "Visual configuration, build complex workflows without coding",
    feature2Title: "Multi-Platform",
    feature2Desc: "Seamlessly integrate with Feishu, n8n, Coze, OpenAI and more",
    feature3Title: "AI Native",
    feature3Desc: "Deep integration with cutting-edge AI models like GPT-4, Claude",
    feature4Title: "Real-time Automation",
    feature4Desc: "24/7 continuous operation, instant response to business needs",

    // Use Cases Section
    useCasesTitle: "Use Cases",
    useCasesSubtitle: "Perfect for various business scenarios",
    useCase1Title: "Auto Customer Support",
    useCase1Desc: "Intelligently understand questions and generate professional replies",
    useCase2Title: "Social Media Content",
    useCase2Desc: "Generate high-quality social media content and marketing copy",
    useCase3Title: "Data Analytics",
    useCase3Desc: "Automatically collect data and generate visual analysis reports",

    // Workflow Section
    workflowTitle: "Workflow Demo",
    workflowSubtitle: "Visual, Automated",
    workflowNode1: "Feishu Message",
    workflowNode2: "AI Agent",
    workflowNode3: "Auto Reply",

    // CTA Section
    ctaTitle: "Ready to automate?",
    ctaSubtitle: "Contact us now and start your automation journey",
    ctaButton: "Contact Us",

    // Footer
    footerRights: "© 2024 AI FLOW. All rights reserved.",

    // Contact Form
    formTitle: "Get in Touch",
    formSubtitle: "Fill in the form and we'll get back to you soon",
    formName: "Name",
    formEmail: "Email",
    formCompany: "Company",
    formMessage: "Message",
    formNamePlaceholder: "Enter your name",
    formEmailPlaceholder: "your@email.com",
    formCompanyPlaceholder: "Your company (optional)",
    formMessagePlaceholder: "Describe your needs or questions...",
    formSubmit: "Send Message",
    formSubmitting: "Sending...",
    formSuccess: "Sent!",
    formError: "Failed to send, please try again",
    formRequired: "*",
  },
};

export type TranslationKey = keyof typeof translations.zh;
