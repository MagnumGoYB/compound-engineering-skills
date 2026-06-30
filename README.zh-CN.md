# 复利工程技能

[English](README.md)

[![MagnumGoYB/compound-engineering-skills GitStock K-Line Chart](https://gitstock.org/MagnumGoYB/compound-engineering-skills/stock.svg)](https://gitstock.org/MagnumGoYB/compound-engineering-skills)

基于 Every 的[复利工程](https://every.to/guides/compound-engineering)理念，为 AI 编程 agent 设计的技能集。

> 每一份工程工作，都应该让后续的工作更容易，而不是更难。

## 快速开始

```bash
npx skills@latest add <your-username>/compound-engineering-skills
```

## 为什么需要这些技能

传统工程到 Review 就收手了。复利工程增加了第四步 —— **Compound（固化）**—— 把解法捕捉为可复用知识，让系统下次自动避开同类问题。

### 四步循环

```
Plan → Work → Review → Compound → 重复
```

| 步骤 | 作用 | 时间占比 |
|------|------|----------|
| **Plan** | 把想法变成蓝图：弄清需求、研究代码库、设计方案 | 40% |
| **Work** | 在隔离环境（git worktree）执行，每改一处跑测试/lint/类型检查 | 10% |
| **Review** | 多个专项 agent 并行审查，按 P0/P1/P2/P3 归类，附置信度与动作类别 | 40% |
| **Compound** | 把解法抽成可复用知识写回系统 | 10% |

### 核心洞察

- **传统工程**：到 Review 为止 → 同类问题反复出现
- **复利工程**：增加 Compound → 系统随时间积累变聪明

## 技能列表

### 工程类

| 技能 | 类型 | 说明 |
|------|------|------|
| [compound-engineering](skills/engineering/compound-engineering/SKILL.md) | 用户触发 | 主技能：编排四步循环 |
| [compound-plan](skills/engineering/compound-engineering/compound-plan.md) | 模型触发 | 计划阶段：需求 → 调研 → 设计 |
| [compound-work](skills/engineering/compound-engineering/compound-work.md) | 模型触发 | 实施阶段：在隔离环境中按计划实现 |
| [compound-review](skills/engineering/compound-engineering/compound-review.md) | 模型触发 | 审查阶段：多维度并行审查 |
| [compound-compound](skills/engineering/compound-engineering/compound-compound.md) | 模型触发 | 固化阶段：把解法捕捉为知识 |

## 时间分配

```
80%  Plan + Review（思考）
20%  Work + Compound（执行 + 学习）
```

大部分思考发生在代码被写出来**之前**和**之后**。

## 知识产物

| 文件 | 作用 |
|------|------|
| `CLAUDE.md` | Agent 启动必读手册：偏好、约定、踩过的坑 |
| `docs/solutions/` | 可搜索的解法文档（bug 与 knowledge 双轨道），按分类组织，带 YAML frontmatter |
| `docs/plans/` | 计划产出 |
| `todos/` | Review 发现的问题，带优先级和状态 |

## 相关链接

- [Every 的复利工程指南](https://every.to/guides/compound-engineering)
- [Every 的插件](https://github.com/EveryInc/compound-engineering-plugin)

## 许可证

MIT
