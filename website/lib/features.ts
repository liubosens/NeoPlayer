import { ImageIcon, Layers, Lock, Play, Radio, Settings, Smartphone, Zap } from "lucide-react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: typeof Play;
  benefits: string[];
}

export const features: Feature[] = [
  {
    id: "material-design",
    title: "Material 设计",
    description: "遵循最新 Android 设计规范的现代灵动界面。",
    icon: Play,
    benefits: ["直观易用的界面", "一致的体验", "现代美感"],
  },
  {
    id: "advanced-config",
    title: "高级配置",
    description: "全面掌控 mpv 配置与脚本能力。",
    icon: Settings,
    benefits: ["自由定制", "高级控制", "脚本支持"],
  },
  {
    id: "picture-in-picture",
    title: "画中画",
    description: "借助流畅的画中画支持，边看视频边处理其他任务。",
    icon: ImageIcon,
    benefits: ["多任务处理", "流畅画中画", "后台播放"],
  },
  {
    id: "background-playback",
    title: "后台播放",
    description: "开启纯音频模式，在后台继续收听媒体内容。",
    icon: Zap,
    benefits: ["纯音频模式", "省电高效", "随时可用"],
  },
  {
    id: "network-streaming",
    title: "网络串流",
    description: "直接从网络串流视频，画质出色。",
    icon: Radio,
    benefits: ["随处串流", "高画质", "连接稳定"],
  },
  {
    id: "subtitle-support",
    title: "字幕支持",
    description: "全面支持外挂与内嵌字幕。",
    icon: Layers,
    benefits: ["多种格式", "轻松切换", "样式可调"],
  },
  {
    id: "file-management",
    title: "文件管理",
    description: "内置媒体选择器，支持文件与文件夹视图。",
    icon: Smartphone,
    benefits: ["轻松浏览", "快速访问", "媒体库井然有序"],
  },
  {
    id: "ad-free",
    title: "无广告",
    description: "完全免费开源，无广告，不索取多余权限。",
    icon: Lock,
    benefits: ["无广告", "注重隐私", "开源"],
  },
];
