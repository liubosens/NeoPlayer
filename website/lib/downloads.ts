import { Building2, Download, Github } from "lucide-react";

export interface DownloadOption {
  id: string;
  title: string;
  description: string;
  icon: typeof Github;
  buttonText: string;
  href: string;
  badge?: string;
}

export const downloads: DownloadOption[] = [
  {
    id: "stable",
    title: "稳定版",
    description: "直接从 GitHub 下载最新稳定版本。",
    icon: Github,
    buttonText: "下载 APK",
    href: "https://github.com/marlboro-advance/mpvEx/releases",
  },
  {
    id: "preview",
    title: "预览版",
    description: "体验开发中的最新功能与改进。",
    icon: Building2,
    buttonText: "查看预发布版",
    href: "https://github.com/marlboro-advance/mpvEx/releases",
  },
  {
    id: "izzyondroid",
    title: "IzzyOnDroid",
    description: "通过 IzzyOnDroid F-Droid 客户端自动安装与更新。",
    icon: Download,
    buttonText: "查看仓库",
    href: "https://apt.izzysoft.de/fdroid/index/apk/com.moe.mpvextended",
  },
];
