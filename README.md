# 每日全球宏觀與 AI 情報儀表板

單檔 HTML 晨報網站。`docs/index.html` 永遠指向最新一期，`docs/YYYY-MM-DD.html` 保存每日版本。

## 發布

- GitHub Pages 來源：`main` 分支 `/docs`
- 公開首頁：`https://tony050444669911.github.io/global-macro-ai-dashboard/`
- 每日歸檔：`https://tony050444669911.github.io/global-macro-ai-dashboard/YYYY-MM-DD.html`

## 本機檢查

```bash
node scripts/validate.mjs docs/index.html
python3 -m http.server 4173 --directory docs
```

## 內容規範

每日更新前必須完整讀取 `/Users/0504T/.openclaw/workspace/prompts/daily-global-macro-brief.md`，查核原始信源、標示資料截點，並在部署後驗證公開網址。
