---
name: compound-engineering
description: "Compound Engineering methodology: Plan → Work → Review → Compound循环。每次完成功能后多做一步：把解法存进系统，让 AI 下次自动避坑。Use when building features, fixing bugs, or any engineering work that should make future work easier."
---

# 复利工程（Compound Engineering）

> 核心理念：每一份工程工作，都应该让后续的工作更容易，而不是更难。

## 四步循环

```
Plan → Work → Review → Compound → 重复
```

| 步骤 | 作用 | 时间占比 |
|------|------|----------|
| **Plan** | 把想法变成蓝图：弄清需求和约束、研究代码库、查文档最佳实践、设计方案并校验 | 40% |
| **Work** | 用 git worktree 开隔离环境，agent 按计划实现，每改一处跑测试/lint/类型检查 | 10% |
| **Review** | 多个专项 agent 并发审查，标 P1/P2/P3 优先级，修完记录问题 | 40% |
| **Compound** | 把解法抽成可复用知识写回系统 | 10% |

## 关键区分

- **传统工程**：到 Review 收手
- **复利工程**：多走 Compound 一步，把本轮学到的留给下一轮

## 需要丢掉的旧观念

| 旧观念 | 新认知 |
|--------|--------|
| 代码必须手写 | 谁敲键盘不重要，产出好代码才重要 |
| 第一版就该写好 | 第一版 95% 是垃圾，目标是迭代够快 |
| 不亲手敲就学不到 | 审 10 个 AI 实现比手敲 2 个学到更多 |
| 代码是自我表达 | 代码属于团队、产品和用户 |

## 工作流触发

根据任务类型调用对应子 skill：

| 任务 | 调用 |
|------|------|
| 新功能/需求 | `compound-engineering:compound-plan` |
| 代码审查/PR | `compound-engineering:compound-review` |
| 完成一轮开发后 | `compound-engineering:compound-compound` |

## Checklist

每轮开发必须完成：

- [ ] Plan 阶段产出清晰的实现方案
- [ ] Work 阶段在隔离环境执行（git worktree）
- [ ] Review 阶段多维度并发审查
- [ ] Compound 阶段把解法固化为系统知识
- [ ] 更新 CLAUDE.md 或等效操作手册
- [ ] 解法文档带 YAML frontmatter 存入 docs/solutions/

## 知识载体

| 文件 | 作用 |
|------|------|
| `CLAUDE.md` | agent 启动必读的操作手册：偏好、约定、踩过的坑 |
| `docs/solutions/` | 每个解决过的问题存成可搜索文档，带 YAML 标签 |
| `docs/plans/` | 计划产出 |
| `todos/` | review 查出的问题，带优先级和状态 |
