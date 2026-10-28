import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetUrl(path: string) {
  const ASSET_BASE_URL = process.env.NEXT_PUBLIC_ASSET_URL;
  if (!ASSET_BASE_URL || path.startsWith('http')) return path;

  let remotePath = path;
  if (path.startsWith('/video_thumbnails/')) {
    remotePath = path;
  } else if (path.startsWith('/showcase/')) {
    remotePath = `/Case Studies/Visual Assets/${path.replace('/showcase/', '')}`;
  } else if (path.startsWith('/case-studies/')) {
    remotePath = `/Case Studies/${path.replace('/case-studies/', '')}`;
  } else if (!path.startsWith('/')) {
    remotePath = `/Case Studies/Visual Assets/${path}`;
  }

  const baseUrl = ASSET_BASE_URL.replace(/\/$/, "");

  // Split path into segments and encode each segment
  // This preserves underscores and only encodes spaces and special characters
  const segments = remotePath.split('/').map(seg => {
    if (!seg) return '';

    // Decode any existing encoding first
    const decoded = decodeURIComponent(seg);

    // Re-encode properly for URL
    // This will encode spaces as %20 but leave underscores as-is
    return encodeURIComponent(decoded);
  });

  return `${baseUrl}${segments.join('/')}`;
}
