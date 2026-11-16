"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Reveal({
  as = "div",
  className = "",
  delay = 0,
  y = 20,
  x = 0,
  scale = 1,
  once = true,
  amount = 0.05,
  children,
  ...props
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={`reveal-motion ${className}`}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
