/**
 * @file data.ts
 * @description Static data definitions for the application, including features, download options, and statistics.
 * Used to populate UI components with content.
 * @module lib/data
 */

export const features = [
  {
    id: 1,
    title: "Material3 设计",
    description: "遵循最新 Android 设计规范的现代、灵动界面。",
    icon: "palette",
  },
  {
    id: 2,
    title: "高级配置",
    description: "全面掌控 mpv 配置与脚本能力。",
    icon: "sliders",
  },
  {
    id: 3,
    title: "画中画",
    description: "借助流畅的画中画支持，边看视频边处理其他任务。",
    icon: "frame",
  },
  {
    id: 4,
    title: "后台播放",
    description: "开启纯音频模式，使用其他应用时也能继续收听。",
    icon: "volume-2",
  },
  {
    id: 5,
    title: "文件管理",
    description: "内置媒体选择器，支持树形与文件夹视图，浏览更轻松。",
    icon: "folder",
  },
  {
    id: 6,
    title: "字幕支持",
    description: "支持外挂字幕，兼容多种字幕格式。",
    icon: "captions",
  },
  {
    id: 7,
    title: "网络串流",
    description: "支持 SMB/FTP/WebDAV 串流，画质出色。",
    icon: "wifi",
  },
  {
    id: 8,
    title: "自定义播放列表",
    description: "轻松创建与管理自定义播放列表。",
    icon: "list",
  },
  {
    id: 9,
    title: "缩放手势",
    description: "直观的手势缩放与平移操作。",
    icon: "maximize-2",
  },
  {
    id: 10,
    title: "外挂音轨",
    description: "支持外挂音轨与音频流切换。",
    icon: "headphones",
  },
  {
    id: 11,
    title: "搜索功能",
    description: "快速搜索，轻松找到媒体文件与内容。",
    icon: "search",
  },
  {
    id: 12,
    title: "免费开源",
    description: "完全免费、开源，无广告、不索取多余权限。",
    icon: "shield-check",
  },
];

//Site Config Imports

import { siteConfig } from "@/lib/site";

export const downloadOptions = [
  {
    id: 1,
    title: "稳定版",
    description: "直接从 GitHub 下载最新稳定版本。",
    link: siteConfig.links.latestRelease,
    icon: "github",
    cta: "下载 APK",
  },
  {
    id: 2,
    title: "预览版",
    description: "抢先体验开发中的最新功能与改进。",
    link: siteConfig.links.releases,
    icon: "zap",
    cta: "查看预发布版",
  },
  {
    id: 3,
    title: "IzzyOnAndroid",
    description: "通过 IzzyOnAndroid 客户端自动安装与更新。",
    link: siteConfig.links.izzyOnAndroid,
    icon: "download",
    cta: "查看仓库",
  },
];

export const stats = [
  {
    label: "星标数",
    value: "21.7K",
    icon: "⭐",
  },
  {
    label: "下载量",
    value: "5.1K",
    icon: "📥",
  },
  {
    label: "贡献者",
    value: "25+",
    icon: "👥",
  },
  {
    label: "开源协议",
    value: "Apache 2.0",
    icon: "📄",
  },
];
