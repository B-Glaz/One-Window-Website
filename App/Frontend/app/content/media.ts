export type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export function getYoutubeVideoId(url: string) {
  return url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&/]+)/)?.[1] ?? "";
}

export function getYoutubeThumbnail(url: string) {
  const id = getYoutubeVideoId(url);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "";
}

export function getYoutubeEmbed(url: string) {
  const id = getYoutubeVideoId(url);
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : "";
}
