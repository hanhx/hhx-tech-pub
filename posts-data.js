const homepageSections = {
  ctx: {
    listId: 'ctxList',
    countId: 'ctxCount',
    items: [
      { seq: 1, href: 'context-engineering/01-context-engine/index.html', pnum: '第 01 期', pdate: '03-15', pnumClass: '', title: 'ContextEngine 到底开放了什么？', excerpt: 'OpenClaw 史诗级架构升级：从硬编码到可插拔的记忆底座', tags: ['架构设计', '插件系统'] },
      { seq: 2, href: 'context-engineering/02-lossless-claw/index.html', pnum: '第 02 期', pdate: '03-15', pnumClass: '', title: 'lossless-claw 凭什么敢叫无损记忆？', excerpt: '接管 7 大生命周期钩子，用状态机实现真正的 0 损失记忆管理', tags: ['状态机', 'DIA 理论'] },
      { seq: 3, href: 'context-engineering/03-windsurf-context-mem/index.html', pnum: '第 03 期', pdate: '03-17', pnumClass: '', title: 'Windsurf 是如何做到「既记得住，又不乱看」的？', excerpt: '记忆模块 + RAG 上下文引擎：让模型每一步只看到最有用的那 1%', tags: ['Memory', 'RAG'] },
      { seq: 4, href: 'context-engineering/04-openviking/index.html', pnum: '第 04 期', pdate: '03-18', pnumClass: '', title: 'lossless-claw × OpenViking = 完整的 AI 大脑', excerpt: '会话内无损记忆 + 跨会话长期记忆，两个插槽一行配置，AI 首次拥有连续记忆', tags: ['长期记忆', '插槽协作'] },
      { seq: 5, href: 'context-engineering/05-claude-code/index.html', pnum: '第 05 期', pdate: '03-21', pnumClass: '', title: 'Claude Code 凭什么不靠预建索引，也能精准改代码？', excerpt: '无索引架构的秘密：子智能体搜索 + 多层过滤，每次只看最相关的代码', tags: ['Claude Code', '无索引架构'] },
      { seq: 6, href: 'context-engineering/06-claude-skills/index.html', pnum: '第 06 期', pdate: '03-21', pnumClass: '', title: '一张图讲透 Claude Code 的 Skills 渐进披露黑科技', excerpt: 'Memory Files 渐进披露 → Skills YAML 标准化，Main Agent 调度 0 改动，披露机制产品化升级', tags: ['Skills', '渐进披露'] },
      { seq: 7, href: 'context-engineering/07-memory-architecture/index.html', pnum: '第 07 期', pdate: '03-23', pnumClass: '', title: 'AI Agent 完整记忆架构设计：从会话无损到跨会话联想', excerpt: '借 ContextEngine 与 OpenViking，实现全量存 + 摘要发，打通会话内短期无损上下文与全局长期记忆', tags: ['记忆架构', '4 层抽象'] },
      { seq: 8, href: 'context-engineering/08-claude-code-memory-design/index.html', pnum: '第 08 期', pdate: '03-25', pnumClass: '', title: '只存不可派生的认知', excerpt: 'Claude Code 记忆设计：三层机制保证存得准、取得准、不过期', tags: ['记忆设计', '源码解读'] }
    ]
  },
  se: {
    listId: 'seList',
    countId: 'seCount',
    items: [
      { seq: 1, href: 'software-engineering/01-sdd-try/index.html', pnum: 'SE-01', pdate: '03-24', pnumClass: 'b', title: 'SDD 实战入门：团队经验分享', excerpt: '标准理论 + 团队实战经验：提效 30%，编码与自测自动化 80%', tags: ['SDD', 'Spec'] },
      { seq: 2, href: 'software-engineering/02-harness-engineering/index.html', pnum: 'SE-02', pdate: '03-27', pnumClass: 'b', title: 'Harness Engineering 深度拆解', excerpt: 'OpenAI 内部激进实验：人类 0 行手写，AI 自治交付 100 万行代码', tags: ['Harness', 'Agent'] },
      { seq: 3, href: 'software-engineering/03-harness-anthropic-0324/index.html', pnum: 'SE-03', pdate: '03-28', pnumClass: 'v', title: 'Harness 设计：让长任务应用开发不失控', excerpt: '为什么长任务开发中 Agent 容易失控？从 Anthropic 实践看三层 Harness 如何驯服长任务', tags: ['Anthropic', 'Harness'] },
      { seq: 4, href: 'software-engineering/03-harness-design-long-running-apps/index.html', pnum: 'SE-04', pdate: '03-29', pnumClass: 'v', title: 'Anthropic Harness 设计拆解', excerpt: '从单体 Agent 失控到三层 Harness：把长任务开发变成可验证交付', tags: ['Anthropic', 'Harness'] },
      { seq: 5, href: 'software-engineering/04-effective-harnesses-for-long-running-agents/index.html', pnum: 'SE-05', pdate: '03-31', pnumClass: 'a', title: '长任务 Agent 稳定交付的底层机制', excerpt: '决定 Agent 上限的不是模型，是 Harness：交接资产、增量纪律、端到端验收三层机制全拆解', tags: ['Anthropic', '长任务'] },
      { seq: 6, href: 'software-engineering/05-claude-code-inner-is-harness/index.html', pnum: 'SE-06', pdate: '04-01', pnumClass: 'v', title: 'Claude Code 里面，就是一套 Harness', excerpt: '源码意外流出，打开一看全是 Harness：外面工程师搭 Harness，里面还是 Harness', tags: ['Claude Code', 'Harness'] }
    ]
  },
  adp: {
    listId: 'adpList',
    countId: 'adpCount',
    items: [
      { seq: 1, href: 'agent-design-patterns/01-ReAct/index.html', pnum: 'ADP-01', pdate: '04-03', pnumClass: 't', title: 'ReAct：推理与行动的协同', excerpt: '从 2022 年普林斯顿论文到 Claude Code 的 queryLoop——翻源码才真正看懂 ReAct', tags: ['ReAct', 'Claude Code'] },
      { seq: 2, href: 'agent-design-patterns/02-Plan-And-Execute/index.html', pnum: 'ADP-02', pdate: '04-05', pnumClass: 't', title: 'Plan-and-Execute：先规划，再执行', excerpt: 'ReAct 跑不了长任务，Plan-and-Execute 怎么解的——LangChain 架构分离 vs Claude Code 状态切换，两种落地对比', tags: ['Plan-and-Execute', 'Claude Code'] },
      { seq: 3, href: 'agent-design-patterns/03-Progressive-Disclosure/index.html', pnum: 'ADP-03', pdate: '04-07', pnumClass: 't', title: '渐进式披露：先少给，再展开，再收回', excerpt: '从 HCI 论文到 Claude Code Skills——为什么有限上下文里的大规模能力系统必须用渐进式披露来管理', tags: ['渐进披露', 'Claude Code'] },
      { seq: 4, href: 'agent-design-patterns/04-Reflexion/index.html', pnum: 'ADP-04', pdate: '04-09', pnumClass: 't', title: 'Reflexion：让 Agent 从失败中学习', excerpt: '从 NeurIPS 2023 论文到 Claude Code 源码——拆解 Reflexion 如何把失败原因变成可复用反馈的纠错回路', tags: ['Reflexion', 'Claude Code'] },
      { seq: 5, href: 'agent-design-patterns/05-multi-agent/index.html', pnum: 'ADP-05', pdate: '04-12', pnumClass: 't', title: 'Multi-Agent：多个 while(true) 同时在转', excerpt: '从 AutoGen 论文到 Claude Code 源码——拆解 Orchestrator-Worker 模式：上下文隔离、并行执行、专业分工', tags: ['Multi-Agent', 'Claude Code'] },
      { seq: 6, href: 'agent-design-patterns/06-ReWOO/index.html', pnum: 'ADP-06', pdate: '04-15', pnumClass: 't', title: 'ReWOO：先把路想好，再一起走', excerpt: '从 ReWOO 论文到 Claude Code 源码——拆解推理与执行解耦：Planner 规划、Worker 执行、Solver 合成答案', tags: ['ReWOO', 'Claude Code'] }
    ]
  }
};
