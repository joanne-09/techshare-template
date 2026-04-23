
# 工程師專屬求籤筒／抽卡機：TechShare GitHub Actions CI/CD 範例

## 專案簡介
這是一個「工程師專屬的求籤筒／抽卡機」Demo，主打「極簡 API」+「有趣動畫」+「CI/CD 實戰」。

### 系統架構
```
.
├── .github/workflows/   # CI/CD YAML
│   ├── frontend-ci.yml  # 前端 CI
│   ├── backend-ci.yml   # 後端 CI
│   └── cd.yml           # 部署
├── frontend/            # React + TypeScript + 3D 卡片動畫
├── backend/             # FastAPI (Python) 隨機籤詩 API
└── docker-compose.yml   # 一鍵本地運行
```

---

## Demo 流程劇本

### 第一幕：CI 救了你一命
1. 你說：「籤筒太單調，加個『大吉』！」
2. 故意把 API 回傳 key 寫錯（如 {"message": "大吉"}）。
3. Push PR，CI 立刻紅燈（Pytest 檢查 key 必須是 fortune），Merge 被鎖。
4. 金句：「沒有 CI，這種 bug 就會直接上線！」

### 第二幕：CD 的魔法瞬間
1. 修好 API 格式，並改前端卡片背面顏色。
2. Merge，CD 自動部署。
3. 幾十秒後，現場觀眾刷新手機，看到新顏色！
4. 金句：「不用 SSH，不用手動重啟，CD 讓新功能自動上線！」

---

## 快速開始
1. clone 專案
2. `docker-compose up` 一鍵本地啟動
3. 前端：`frontend/` 內開發，Vite + Tailwind + 3D 動畫
4. 後端：`backend/` 內開發，FastAPI + 籤詩 API

---

## 技術亮點
- Artifacts & Caching：actions/cache 加速
- Path Filters：只針對異動路徑觸發
- Secret Management：API URL 用 Secrets 注入
- Pytest API 格式檢查，防止災難上線

---

## 延伸閱讀
- [GitHub Actions 官方文件](https://docs.github.com/en/actions)
- [Render 部署教學](https://render.com/docs/deploy-fastapi)
- [GitHub Pages 部署教學](https://pages.github.com/)
