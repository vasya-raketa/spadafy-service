import type { ElementType } from "react";
import { isPlaceholder } from "@/content/servicePages";
import styles from "./ServicePage.module.css";

// Renders a line of source copy, or, if it is a "[PLACEHOLDER: …]" string, a dashed
// block that says what goes there, so nobody mistakes it for final copy.
export function Copy({ text, as: Tag = "p", className = "" }: { text: string; as?: ElementType; className?: string }) {
  if (isPlaceholder(text)) {
    return <Tag className={`${className} ${styles.ph}`}>{text}</Tag>;
  }
  return <Tag className={className}>{text}</Tag>;
}
