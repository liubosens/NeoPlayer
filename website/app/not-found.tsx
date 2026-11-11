"use client";

import { motion, type Variants } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "backOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 text-center"
    >
      <motion.div
        variants={titleVariants}
        className="error-code text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4"
      >
        404
      </motion.div>
      <motion.h1 variants={itemVariants} className="error-title text-4xl font-bold mb-4">
        页面未找到
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="error-desc text-muted-foreground text-lg mb-8 max-w-md"
      >
        抱歉，你要找的页面不存在或已被移动。
      </motion.p>
      <motion.div variants={itemVariants}>
        <Button
          asChild
          className="home-button bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
        >
          <Link href="/">
            <Home className="mr-2 w-5 h-5" />
            返回首页
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
