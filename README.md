![banner](fastlane/metadata/android/en-US/images/featureGraphic.png)

# mpvExtended

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/marlboro-advance/mpvex.svg?logo=github&label=GitHub&cacheSeconds=3600)](https://github.com/marlboro-advance/mpvex/releases/latest)
[![GitHub all releases](https://img.shields.io/github/downloads/marlboro-advance/mpvex/total?logo=github&cacheSeconds=3600)](https://github.com/marlboro-advance/mpvex/releases/latest)

[简体中文](README.md) | [English](README.en.md)

**mpvExtended 是基于 [mpv-android](https://github.com/mpv-android/mpv-android)、构建于 libmpv 之上的播放器分支。目标是把 mpv 的强大能力、简洁易用的界面与更多实用功能结合起来。本仓库提供完整的简体中文界面。**

- 更简单易用的界面
- Material 3 Expressive 设计
- 高级配置与脚本支持
- 增强的播放功能
- 画中画（PiP）
- 后台播放
- 高质量渲染
- 网络流媒体播放
- 文件管理
- 完全免费开源，无广告，不申请多余权限
- 媒体选择器支持目录树与文件夹两种视图
- 外挂字幕支持
- 双指缩放手势
- 外挂音轨支持
- 搜索功能
- SMB / FTP / WebDAV 支持
- 自定义播放列表管理

**项目仍在开发中，可能存在缺陷。如遇到问题，欢迎到 [Issues](https://github.com/marlboro-advance/mpvEx/issues) 反馈。**

---

## 汉化说明

- App 界面：新增 `app/src/main/res/values-zh-rCN/strings.xml`，覆盖全部可翻译字符串；系统语言为简体中文时自动生效。
- 硬编码文案：原项目有大量写死在 Compose 代码里的英文，本次已抽为字符串资源或替换为中文文案，包括设置页、文件浏览器、播放列表面板、提示消息与播放器按钮标签。
- 官网：`website/` 目录已中文化。
- 应用商店描述：`fastlane/metadata/android/zh-CN/`。
- 仓库首页：`README.md` 已改为中文，英文原文移至 `README.en.md`，`README.zh-CN.md` 保留为镜像。
- 英文原文保留在 `values/strings.xml` 与 `README.en.md`，未做删改。

---

## 安装

### 稳定版

从 [GitHub Releases](https://github.com/marlboro-advance/mpvEx/releases) 下载最新稳定版。

[![Download Release](https://img.shields.io/badge/Download-Release-blue?style=for-the-badge)](https://github.com/marlboro-advance/mpvEx/releases)

也可以从这里获取稳定版：

[<img src="https://gitlab.com/IzzyOnDroid/repo/-/raw/master/assets/IzzyOnDroidButtonGreyBorder_nofont.png" height="50" alt="在 IzzyOnDroid 获取">](https://apt.izzysoft.de/packages/app.marlboroadvance.mpvex)

### 预览版

仅供测试。

[![下载预览版](https://img.shields.io/badge/Download-Preview%20Builds-red?style=for-the-badge)](https://marlboro-advance.github.io/mpvEx/)

---

## 界面展示

<div class="image-row" align="center">
  <img src="/fastlane/metadata/android/en-US/images/phoneScreenshots/player.png" width="98%" />
</div>

<div class="image-row" align="center" justify-content="space-between">
  <img src="/fastlane/metadata/android/en-US/images/phoneScreenshots/folderscreen.png" width="23.5%"/>
  <img src="/fastlane/metadata/android/en-US/images/phoneScreenshots/videoscreen.png" width="23.5%"/>
  <img src="/fastlane/metadata/android/en-US/images/phoneScreenshots/about.png" width="23.5%"/>
  <img src="/fastlane/metadata/android/en-US/images/phoneScreenshots/pip.png" width="23.5%"/>
</div>

<div class="image-row" align="center">
  <img src="/fastlane/metadata/android/en-US/images/phoneScreenshots/framenavigation.png" width="48.5%" />
  <img src="/fastlane/metadata/android/en-US/images/phoneScreenshots/chapters.png" width="48.5%" />
</div>

---

## 构建

### 环境要求

- JDK 17
- Android SDK，Build Tools 34.0.0+
- Git（用于在构建中写入版本信息）

### APK 变体

应用会按 CPU 架构生成多个 APK：

- **universal**：兼容所有设备（体积较大）
- **arm64-v8a**：现代 64 位 ARM 设备（大多数用户推荐）
- **armeabi-v7a**：较旧的 32 位 ARM 设备
- **x86**：Intel/AMD 32 位设备
- **x86_64**：Intel/AMD 64 位设备

---

## 发布

### 配置发布签名

如需在 GitHub Actions 中自动为发布版签名，需要在仓库中配置以下 Secrets：

1. 打开仓库的 **Settings** → **Secrets and variables** → **Actions**
2. 添加以下仓库 Secrets：

| Secret 名称              | 说明                                          |
|--------------------------|-----------------------------------------------|
| `SIGNING_KEYSTORE`       | Base64 编码的 keystore 文件（`.jks` 或 `.keystore`） |
| `SIGNING_KEY_ALIAS`      | keystore 中使用的别名                          |
| `SIGNING_STORE_PASSWORD` | keystore 文件密码                              |
| `KEY_PASSWORD`           | 密钥密码（可与 store 密码相同）                 |

#### 将 Keystore 编码为 Base64

**Linux/macOS：**

```bash
base64 -i your-keystore.jks | tr -d '\n' > keystore.txt
```

**Windows（PowerShell）：**

```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes("your-keystore.jks")) | Out-File -FilePath keystore.txt -NoNewline
```

把 `keystore.txt` 的内容粘贴为 `SIGNING_KEYSTORE` 的值。

### 创建正式发布

1. 更新 `app/build.gradle.kts` 中的 `versionCode` 与 `versionName`
2. 提交改动
3. 创建并推送标签：
   ```bash
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```
4. GitHub Actions 会自动构建、签名并创建草稿 Release

### 创建预览版

1. 创建并推送预览标签：
   ```bash
   git tag -a v1.0.0-preview.1 -m "Preview release"
   git push origin v1.0.0-preview.1
   ```
2. GitHub Actions 会自动创建预发布版本

---

## 致谢

- [mpv-android](https://github.com/mpv-android)
- [mpvKt](https://github.com/abdallahmehiz/mpvKt)
- [Next player](https://github.com/anilbeesetti/nextplayer)
- [Gramophone](https://github.com/FoedusProgramme/Gramophone)

---

## 支持项目 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20with%20Ribbon.png" alt="Heart with Ribbon" width="25" height="25" />

如果 mpvExtended 对你有帮助，可以考虑支持开发：

[![UPI](https://img.shields.io/badge/UPI-aadiinarvekar@upi-blue?style=for-the-badge&logo=google-pay&logoColor=white)](upi://pay?pa=aadiinarvekar@upi)

---

## Star 趋势 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="Star" width="25" height="25" />

<a href="https://www.star-history.com/#marlboro-advance/mpvEx&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=marlboro-advance/mpvEx&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=marlboro-advance/mpvEx&type=date&theme=light&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=marlboro-advance/mpvEx&type=date&legend=top-left" />
 </picture>
</a>
