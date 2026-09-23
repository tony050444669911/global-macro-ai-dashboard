# 專案狀態：每日全球宏觀與 AI 網頁儀表板

- 更新時間：2026-09-23 20:45（Asia/Taipei）
- 專案路徑：`/Users/0504T/Desktop/Projects/global-macro-ai-dashboard`（`~/.openclaw/workspace/global-macro-ai-dashboard` 為系統連結）
- Git：`tony050444669911/global-macro-ai-dashboard`（public），分支 `main`，最新 commit `fc0dfd8`
- 目前階段：**網頁與規範已完成；線上發布尚未驗證成功**

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

## 未完成（明天續作清單）

1. 驗證 GitHub Pages：`gh api repos/tony050444669911/global-macro-ai-dashboard/pages/builds/latest` 需為 `status: built`。
2. 取得線上證據：
   `curl -L -o /dev/null -w '%{http_code}\n' https://tony050444669911.github.io/global-macro-ai-dashboard/2026-09-23.html`
   需為 200，且頁面含當日日期與 `fast-toggle`。今日此步驟被執行環境網路限制阻擋（CONNECT tunnel 403、`gh api` Forbidden），**因此尚無線上成功證據**。
3. 若 Pages 不可用，備案：部署到 Vercel 靜態站（沿用既有 Vercel 帳號），網址形式改為 `https://<project>.vercel.app/2026-09-23.html`，並同步更新規範檔與自動化訊息。
4. 瀏覽器實測（375px／390px 寬）：無水平溢出、Header 不折行、極速閱讀切換、模組 3／4 分享按鈕。
5. 更新每天 08:00 晨報自動化（今日在 Control UI 填到「模式／頻道／收件人」階段但**未確認儲存**）：
   - payload 改成「查核資料 → 產出 HTML → 寫入 `docs/YYYY-MM-DD.html` 並覆蓋 `index.html` → validate → commit/push → 驗證公開 URL → 只回一則標題＋連結」。
   - delivery：Telegram `gpt56` 帳號、`telegram:8760483846`，required；第一次失敗即告警。
   - 建立後以 `automations list` 確認 jobId 與下一次執行時間。

## 重要注意

- 使用者口中的「telegra」＝Telegram 只傳連結，不是 `telegra.ph`；後者不支援自訂 CSS／JS，與新規範衝突。
- 今日 20:03–20:20 曾以 `conversations_send` 手動傳送完整晨報到 Telegram（訊息 ID 9、10、11），屬舊格式；新格式上線後勿再重複。
- `automations add` 在此 Codex 工作階段會被拒（無法取得建立權限），請改用 Control UI 或具 Gateway automation 權限的工作階段。
- 本專案與 SCU 學生日誌面板、Jev Shadow Lab 完全獨立，未修改其程式、排程或部署。
