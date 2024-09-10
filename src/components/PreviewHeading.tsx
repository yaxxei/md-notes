import styles from "../styles/PreviewHeading.module.scss";

import { ReactNode } from "react";

interface PreviewHeadingProps {
  level: number;
  children: ReactNode;
}

export function PreviewHeading({ level, children }: PreviewHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={styles.heading}>{children}</Tag>;
}
