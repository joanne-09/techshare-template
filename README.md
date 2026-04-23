# TechShare: GitHub Actions CI/CD Monorepo Template

## Repo 架構

```
.
├── .github/workflows/   # CI/CD 的 YAML 檔案存放處
│   ├── frontend-ci.yml  # 前端 CI 流程
│   ├── backend-ci.yml   # 後端 CI 流程
│   └── cd.yml           # 部署流程
├── frontend/            # 前端：React (Vite) + Tailwind CSS
├── backend/             # 後端：FastAPI (Python)
└── docker-compose.yml   # 一鍵本地運行
```

- **Repo 託管**：GitHub
- **前端部署**：GitHub Pages
- **後端部署**：Render 或 Fly.io（支援 Docker 部署）

---

## 專案功能說明

### 1. 分布式系統狀態監控器
- **後端**：提供 API 回傳系統資訊（如 platform 資訊、模擬 CPU 負載）。
- **前端**：定時 fetch API，並用 Chart.js 顯示資訊。

### 2. CI/CD 技術亮點
- **Matrix Builds**：Node.js 18/20、Python 3.9/3.10 多版本測試。
- **Artifacts & Caching**：actions/cache 快取 node_modules，加速安裝。
- **Path Filters**：只針對有異動的路徑觸發對應 workflow。
- **Secret Management**：API URL 透過 GitHub Actions Secrets 注入，避免硬編碼。
- **Security Snippet**：示範密鑰誤上傳被 GitHub Secret Scanning 偵測。

---

## 快速開始

1. clone 專案
2. `docker-compose up` 一鍵本地啟動
3. 前端：`frontend/` 內開發，預設 Vite + Tailwind
4. 後端：`backend/` 內開發，預設 FastAPI

---

## 教學建議流程

1. **Live Coding**：現場從 template-repo 開始，手動新增 .github/workflows/*.yml，push 後觀察 Actions 運作。
2. **Q&A 準備**：
   - GitHub Actions vs Jenkins/GitLab CI
   - GitHub Actions：雲端原生、整合度高、Marketplace 多
   - Jenkins：自由度高但需自架維護

---

## 延伸閱讀
- [GitHub Actions 官方文件](https://docs.github.com/en/actions)
- [Render 部署教學](https://render.com/docs/deploy-fastapi)
- [GitHub Pages 部署教學](https://pages.github.com/)
