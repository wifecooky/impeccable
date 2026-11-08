# impeccable + 补丁

[English](README.md) | 中文

这是 Paul Bakaus 的 [impeccable](https://github.com/pbakaus/impeccable) 4.8.0，在 `SKILL.md` 末尾追加了 10 条规则。这是非官方的修改版，不是上游项目。

每条追加规则都来自一次真实的设计过程：用户发现了问题，而原 skill 没有拦住。每条规则都按「原因 → 修复 → 验证」来写。全文在 [`patch.md`](patch.md)（英文）。

1. 第一版就把这个风格的标志性元素做足。
2. 选定风格之前，先研究真实的同类网站。
3. 一轮被否定后，先在现有设计上改进，不要直接提议重做。
4. 用实物做比喻的风格，先确认年代感，再动手。
5. 检查页面左右是否平衡，不只检查是否溢出。
6. 有颜色含义的标签，出现在哪里都要带上颜色；结果页先给能直接用的产出。
7. 由数据生成的列表要限制条数；分享卡片要用真实数据里最多的条数来检查。
8. 渲染后的 markdown 里，链接、图片和代码都留在页面内、留在正文栏内。
9. 品牌比喻放在标志和点缀里，不铺满阅读页面。
10. 图标角上的红色圆点会被看成未读通知。

## 盲测结果

同一个模型（claude-sonnet-5-5），同样的一句话需求，只换装的 skill。6 个条件 × 6 道题 × 每题 2 次 = 72 个页面。两个评审（Claude 和 Codex）只看截图、不知道哪个页面出自哪个 skill，两两比较。两个评审选同一个页面，才算一胜。

| 条件 | 得分 | 对不装 skill（胜-平-负，12 场） |
|---|---|---|
| impeccable + 本补丁 | 0.73 | 8-4-0 |
| impeccable 4.8.0 | 0.67 | 9-2-1 |
| Anthropic frontend-design | 0.54 | 6-5-1 |
| taste-skill | 0.44 | 5-5-2 |
| hallmark | 0.33 | 4-6-2 |
| 不装 skill | 0.28 | — |

本补丁和原版 impeccable 正面比，3 胜 7 平 2 负。**差距在误差之内。** 不要指望只靠这个补丁就做出比原版更好的页面。这些规则针对的是和用户来回改好几轮才会出现的问题（选方向、版面平衡、链接和图片），一次性的测试测不到。

测试时用的规则文本提到了原项目，还引用了用户的原话。公开版本删掉了这些细节，规则本身没有改。

## 安装

```bash
npx github:wifecooky/impeccable
```

这条命令装的东西和 `npx impeccable@4.8.0 install` 相同，装到 `~/.claude`（或 `$CLAUDE_CONFIG_DIR`），只是 `SKILL.md` 里已经带上了补丁：

- skill：`skills/impeccable/`
- 上游的 4 个 agent：`agents/`
- 上游的设计检查 hook：在 `settings.json` 里写入 3 条。其他设置保持不变，并备份到 `settings.json.bak`。

选项：

- `--force`：替换已有的 `~/.claude/skills/impeccable`，比如用上游安装器装过的版本。
- `--no-hooks`：不装 hook。在 Windows 上始终不装 hook。

不用 npm：

```bash
git clone https://github.com/wifecooky/impeccable.git
cp -R impeccable/skills/impeccable ~/.claude/skills/
mkdir -p ~/.claude/agents && cp impeccable/agents/*.md ~/.claude/agents/
```

这样会复制 skill 和 agent，但不装 hook。

用法和上游一样：`/impeccable 给一家咖啡店做一个落地页……`

上游安装器（`npx impeccable install` 或 `update`）会覆盖 `SKILL.md`，补丁就没了。之后再运行一次 `npx github:wifecooky/impeccable --force`。

## 许可证

和上游一样，使用 Apache License 2.0。署名和改动清单见 [`LICENSE`](LICENSE) 和 [`NOTICE.md`](NOTICE.md)。
