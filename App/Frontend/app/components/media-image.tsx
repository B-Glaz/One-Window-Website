import type { ImageHTMLAttributes } from "react";

type MediaImageProps = ImageHTMLAttributes<HTMLImageElement> & {
  fallbackLabel?: string;
};

export function MediaImage({ alt, fallbackLabel = "Image coming soon", ...props }: MediaImageProps) {
  if (!props.src) return <span role="img" aria-label={alt || fallbackLabel}>{fallbackLabel}</span>;
  return <img {...props} alt={alt} />;
}
