# 上下文

[English](CONTEXT.md)

## 领域术语

| 术语 | 定义 |
|------|------|
| 复利工程 | 理念：Plan → Work → Review → Compound 循环 |
| Compound（固化） | 第四步：把解法捕捉为可复用的系统知识 |
| P0/P1/P2/P3 | 严重级别：致命 / 必须修 / 应该修 / 可以修 |
| 置信度 | 一条发现的确信程度（高/中/低），决定它是否阻塞合并 |
| 动作类别 | 修复的应用方式：auto（agent 自动）/ gated（agent + 人确认）/ advisory（仅人处理） |
| Learning（解法） | 存入 `docs/solutions/` 的解法文档，复利知识的基本单位 |
| Bug 轨道 | 记录症状 → 根因 → 修复 → 预防的解法 |
| Knowledge 轨道 | 记录可复用实践的解法：背景 → 指引 → 适用场景 |
| Pattern doc（模式文档） | 从多条解法归纳出的更宽泛规则 |

## 架构决策

- 技能以 Markdown + YAML frontmatter 存储
- 每个技能独立可用、自包含
- 主技能负责编排，子技能处理具体阶段
- 解法文档按分类存放于 `docs/solutions/<category>/`
- 知识库必须能从项目启动文件被发现
