# Tech Share: CICD with GitHub Actions (Apple Style Insight)

## Tech Stack Overview
- **Frontend**: React, TypeScript, Tailwind CSS (Apple Minimalist Design)
- **Backend**: FastAPI (Python)
- **Deployment**: GitHub Pages (Frontend), Vercel (Backend)
- **CI/CD**: GitHub Actions

---

## 實作指南

請按照以下步驟完成部署：

### 1. Fork repo
點擊右上角的 `Fork` 按鈕，將此專案複製到你的帳號下。

### 2. 後端部署與密鑰取得
1. 在 `backend` 資料夾中，輸入 `npx vercel login` 登入 Vercel。
2. 在專案中執行 `npx vercel link` 取得 `ORG_ID` 與 `PROJECT_ID`。
3. 在個人設定取得 `VERCEL_TOKEN`。
4. 將上述三者填入 GitHub 的 `Settings > Secrets and variables > Actions`。

### 3. 開放 Actions 權限
為了讓機器人能推送到 `gh-pages`，請至：
`Settings > Actions > General > Workflow permissions` 改為 **Read and write permissions**。

在 `Settings > Pages` 中，將 `Branch` 設為 `gh-pages`，並選擇 `/ (root)` 作為資料夾。

### 4. TODO
你需要修復資料夾中的 `TODO`

### 5. 填寫 VITE_API_URL
部署成功後，將 Vercel 的後端網址填入 GitHub Secrets 中的 `VITE_API_URL`。

---

## 本地測試

在最外層資料夾執行 `docker-compose up` 啟動前後端。前端將在 `http://localhost:5173` 運行，後端 API 將在 `http://localhost:8000` 運行。