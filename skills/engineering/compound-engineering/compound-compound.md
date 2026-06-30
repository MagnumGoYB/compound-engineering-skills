---
name: compound-compound
description: "复利工程固化阶段：把解法变成系统的记忆。Use after completing a feature or fixing a bug, to capture learnings for future use."
---

# Compound（固化）

> 把解法抽成可复用的知识写回系统。这一步不产出代码，产出的是「系统下次自动避开同类问题」的能力。

## 目标

把本轮学到的东西固化为系统知识，让下一轮开发自动受益。

## 四个动作

### 1. 记录解法

问自己：
- 什么管用？（成功的做法）
- 什么没用？（失败的尝试）
- 可复用的点是哪个？（核心洞察）

### 2. 加元数据

用 YAML frontmatter 打标签，方便日后检索：

```yaml
---
title: 解决 N+1 查询的通用模式
category: performance
tags: [database, query-optimization, n+1]
date: 2025-01-15
related: [docs/solutions/db-optimization.md]
---
```

### 3. 更新操作手册

把新模式写进 `CLAUDE.md`（或项目等效的操作手册）：

```markdown
## 数据库查询规范

### 避免 N+1 查询
- 使用 `includes` 或 `preload` 预加载关联数据
- 批量查询替代循环单条查询
- 参考：docs/solutions/n-plus-one-query.md
```

### 4. 验证学到的

下次遇到同类问题时：
- agent 能否自动识别？
- 能否自动应用解法？
- 是否需要补充更多上下文？

## 解法文档模板

```markdown
---
title: [问题简述]
category: [security|performance|architecture|quality|data]
tags: [标签1, 标签2, 标签3]
date: YYYY-MM-DD
severity: [p1|p2|p3]
related: [相关文档路径]
---

## 问题

[问题描述，包括现象和影响]

## 根因

[问题的根本原因]

## 解法

[具体的解决方案，包含代码示例]

```code
// 示例代码
```

## 如何避免复发

[预防措施和检查点]

## 验证方式

[如何确认问题已解决]
```

## 存储位置

- 解法文档：`docs/solutions/YYYY-MM-DD-<topic>.md`
- 操作手册：`CLAUDE.md`（项目根目录）
- 计划文档：`docs/plans/`

## 复利的来源

```
没有积累，纯靠现场排：
  agent 不知道这个坑 → 你和它一起调试 → 修好

系统已经记住了：
  agent 启动就读到规则 → Plan 阶段就绕开 → 根本走不到出 bug
```

前面那次记录的时间，在这里连本带利赚回来。

## Checklist

- [ ] 记录了什么管用、什么没用
- [ ] 提取了可复用的核心洞察
- [ ] 解法文档带 YAML frontmatter
- [ ] 更新了 CLAUDE.md 或等效手册
- [ ] 存储到正确位置（docs/solutions/）
- [ ] 验证下次能自动应用
