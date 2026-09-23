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

每日更新前必須完整讀取：

- `/Users/0504T/.openclaw/workspace/prompts/daily-global-macro-brief.md`：完整研究、版型、信源與發布規範。
- `/Users/0504T/.openclaw/workspace/prompts/daily-global-macro-tracking-topics.md`：排程實際讀取、可快速增刪的長期追蹤清單。
- `config/tracking-topics.md`：隨專案保存的版本化參考副本。

目前額外啟用「全球安全與地緣韌性雷達」以及「AI 新模型／產品發布雷達」。前者涵蓋全球而非只有歐洲；後者會為重要新品標示學習優先級，並提供 15 分鐘上手行動。完成後仍須查核原始信源、標示資料截點，並在部署後驗證公開網址。
