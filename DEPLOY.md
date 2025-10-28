# 部署指南

## ✅ 项目已准备就绪

项目已创建在 `figma-standalone` 目录下，可以立即部署！

## 🚀 部署到 Vercel（推荐）

### 方式一：通过 GitHub（推荐）

1. **初始化 Git 仓库：**
```bash
cd figma-standalone
git init
git add .
git commit -m "Initial commit"
```

2. **推送到 GitHub：**
```bash
# 在 GitHub 上创建新仓库
# 然后运行：
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

3. **在 Vercel 部署：**
   - 访问 https://vercel.com/new
   - 点击 "Import Git Repository"
   - 选择你的 GitHub 仓库
   - 点击 "Deploy"
   - 等待部署完成（约 1-2 分钟）
   - 获得部署 URL：`https://your-project.vercel.app`

### 方式二：使用 Vercel CLI

```bash
cd figma-standalone
npm i -g vercel
vercel
```

按照提示操作，选择生产环境部署。

### 方式三：一键部署按钮

你也可以直接用这个按钮一键部署：

1. Fork 这个仓库到 GitHub
2. 点击下面的按钮：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fyour-repo)

## 📝 本地测试

在部署前可以先本地测试：

```bash
cd figma-standalone
npm run dev
```

然后访问 http://localhost:3000

## ✨ 完成后

部署成功后，你会得到一个类似 `https://your-project.vercel.app` 的 URL，通过这个 URL 就能访问你的 Figma 设计页面了。

## 🔧 自定义域名

1. 在 Vercel Dashboard 中打开你的项目
2. 进入 "Settings" → "Domains"
3. 添加你的自定义域名
4. 按照提示配置 DNS 记录

## 📦 项目说明

这是一个极简的 Next.js 应用，只包含一个页面：
- 直接嵌入 Figma 设计
- 全屏显示
- 无需额外开发
- 自动更新（Figma 设计更新后页面自动更新）

