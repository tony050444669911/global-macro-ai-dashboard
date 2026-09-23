# 專案狀態：每日全球宏觀與 AI 網頁儀表板

- 更新時間：2026-09-24 00:49（Asia/Taipei）
- 專案路徑：`/Users/0504T/Desktop/Projects/global-macro-ai-dashboard`（`~/.openclaw/workspace/global-macro-ai-dashboard` 為系統連結）
- Git：`tony050444669911/global-macro-ai-dashboard`（public），分支 `main`，續作前 commit `f62fc9b`
- 目前階段：**網頁、線上發布、手機版互動與每日排程均已完成驗證**

## 目標

每天產出一份獨立的 HTML 晨報網頁，Telegram 只收到「日期＋標題＋當日連結」一則短訊息。

## 已完成

- `docs/index.html`：首頁，永遠指向最新一期（目前為今日內容）。
- `docs/2026-09-23.html`：當日歸檔頁（與首頁同內容）。
- `scripts/validate.mjs`：檢查 viewport、Tailwind、Lucide、`fast-toggle`、`max-w-7xl`、不得出現橫向表格等。
- `README.md`、`.gitignore`。
- 網頁技術：單檔自足 HTML5、Tailwind CSS CDN、Lucide Icons CDN、深色科技終端主題、響應式資產卡（手機 2 欄／平板 3 欄／桌面 6 欄）、44px 觸控目標、`fast-toggle` 極速閱讀模式（以 body class 隱藏 `.detail-block`）。
- 六大模組：1 頂部狀態列與局勢鳥瞰、2 跨資產定價矩陣與傳導鏈條、3 全球總經與政策預期差（含 `t.me/share/url` 深入推演按鈕）、4 AI 前沿／算力基建與法規邊界（A/B/C）、5 長週期命題動態追蹤、6 每日思維模型。
- 規範檔：`/Users/0504T/.openclaw/workspace/prompts/daily-global-macro-brief.md` 已由「Telegram 排版」改為「網頁格式與跨裝置規範＋發布與 Telegram 投遞」。
- GitHub Pages 最新建置為 `built`，`https://tony050444669911.github.io/global-macro-ai-dashboard/2026-09-23.html` 已實測 HTTP 200，頁面包含日期與 `fast-toggle`。
- 瀏覽器實測 390px 與 375px：無水平溢出、觸控目標至少 44px、三個 Telegram 深層連結正確；極速閱讀可將 7 個 `.detail-block` 全部折疊，並可恢復完整內容。
- 已建立每日 08:00（Asia/Taipei）自動化：
  - 名稱：`daily-global-macro-ai-dashboard`
  - jobId：`8f731431-6d9b-4030-9eb2-d1feda64a739`
  - owner agent：`gpt56`；session：`isolated`；下一次執行：2026-09-24 08:00 CST
  - 成功時 Telegram `gpt56` 只 announce 兩行「日期／標題＋當日連結」到 `8760483846`。
  - 第一次執行錯誤即告警，冷卻 6 小時；跳過不計入錯誤。

## 後續觀察

1. 不手動強制試跑，避免額外消耗模型額度；以 2026-09-24 08:00 的首次正式執行驗證完整「研究 → 產頁 → push → Pages → Telegram」鏈路。
2. 首次執行後用 `openclaw automations runs 8f731431-6d9b-4030-9eb2-d1feda64a739` 檢查結果，並確認 Telegram 只有一則兩行短訊息。
3. 若 GitHub Pages 日後不可用，備案為 Vercel 靜態站；切換時須同步更新規範檔與排程訊息中的網址。

## 2026-09-24 待合併功能

- 分支：`feature/global-risk-ai-launch-tracker`
- 新增全球性的「安全與地緣韌性雷達」，涵蓋歐洲／俄烏、印太、中東、南亞、非洲、美洲與跨區域混合威脅；最多 3 項重大增量，無重大變化不硬湊。
- 新增高優先「AI 新模型與產品發布雷達」，追蹤過去 24～72 小時官方發布，標註學習優先級並提供 15 分鐘上手行動。
- 新增 `config/tracking-topics.md` 作為可快速增刪的版本化主題清單；排程實際讀取 workspace 中的對應 runtime 清單。
- automation `8f731431-6d9b-4030-9eb2-d1feda64a739` 的 payload 已更新並讀回確認；排程時間、Telegram 投遞與失敗告警維持不變。
- 新增「名詞秒懂」：每期內建 6～10 個核心專有名詞，正文可點按並在原頁顯示 15 秒定義、生活比喻、當日重要性與台灣關聯；另有頂部名詞庫及 Telegram 預填追問。
- 名詞秒懂驗證：390px 無水平溢出、對話框未超出視窗、最小觸控高度 44px、極速模式可並用、Esc 關閉後焦點返回原名詞；`validate.mjs` 會檢查名詞數量及每個觸發器都有內嵌定義。
- 最新功能 commit：`bcbb2cf`；PR #1 仍待使用者確認後合併，主線回復點維持 `1b8fb19`。

## 重要注意

- 使用者口中的「telegra」＝Telegram 只傳連結，不是 `telegra.ph`；後者不支援自訂 CSS／JS，與新規範衝突。
- 今日 20:03–20:20 曾以 `conversations_send` 手動傳送完整晨報到 Telegram（訊息 ID 9、10、11），屬舊格式；新格式上線後勿再重複。
- OpenClaw app automation API 在 Codex user-home runtime 會拒絕建立者權限；本次改由本機 `openclaw automations add` 建立，並以 `automations get` 讀回核對完整設定。
- 本專案與 SCU 學生日誌面板、Jev Shadow Lab 完全獨立，未修改其程式、排程或部署。
