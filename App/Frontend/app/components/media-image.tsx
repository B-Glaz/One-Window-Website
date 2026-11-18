import type { CSSProperties, ImageHTMLAttributes } from "react";

type MediaImageProps = ImageHTMLAttributes<HTMLImageElement> & {
  fallbackLabel?: string;
  fit?: CSSProperties["objectFit"];
  position?: CSSProperties["objectPosition"];
};

export function MediaImage({ alt, fallbackLabel = "Image coming soon", fit, position, style, ...props }: MediaImageProps) {
  if (!props.src) return <span role="img" aria-label={alt || fallbackLabel}>{fallbackLabel}</span>;
  return <img {...props} alt={alt} style={{ ...style, ...(fit ? { objectFit: fit } : {}), ...(position ? { objectPosition: position } : {}) }} />;
}
