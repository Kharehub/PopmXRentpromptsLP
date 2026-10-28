"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { getAssetUrl } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: "none" | "metadata" | "auto";
  onError?: (error: Error) => void;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

export default function VideoPlayer({
  src,
  poster,
  className = "",
  autoPlay = false,
  loop = false,
  muted = true,
  playsInline = true,
  preload = "metadata",
  onError,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoUrl = getAssetUrl(src);
  const posterUrl = poster ? getAssetUrl(poster) : undefined;
  const isMobile = useIsMobile();

  // On mobile: if poster provided, show image. If no poster, use lightweight video with preload=none.
  const showPosterImage = isMobile && !!posterUrl;

  // iOS Safari fix: React doesn't always set the `muted` attribute on the DOM element.
  useEffect(() => {
    if (!videoRef.current || showPosterImage) return;
    if (muted) {
      videoRef.current.setAttribute("muted", "");
      videoRef.current.muted = true;
    }
    if (playsInline) {
      videoRef.current.setAttribute("webkit-playsinline", "");
      videoRef.current.setAttribute("playsinline", "");
    }
  }, [muted, playsInline, showPosterImage]);

  const attemptPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const retryPlay = () => {
          video.play().catch(() => {});
          video.removeEventListener("canplay", retryPlay);
        };
        video.addEventListener("canplay", retryPlay);
        video.load();
      });
    }
  }, []);

  useEffect(() => {
    if (!videoRef.current || showPosterImage) return;

    if (autoPlay) {
      // On mobile without poster, don't force autoplay — let user interact
      if (!isMobile) {
        attemptPlay();
      }
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [autoPlay, attemptPlay, showPosterImage, isMobile]);

  useEffect(() => {
    if (!videoRef.current || !autoPlay || showPosterImage || isMobile) return;

    const video = videoRef.current;
    video.load();

    const onCanPlay = () => {
      attemptPlay();
      video.removeEventListener("canplay", onCanPlay);
    };
    video.addEventListener("canplay", onCanPlay);
    attemptPlay();

    return () => {
      video.removeEventListener("canplay", onCanPlay);
    };
  }, [autoPlay, attemptPlay, videoUrl, showPosterImage, isMobile]);

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error(`Failed to load video: ${videoUrl}`, e);
    setHasError(true);
    setIsLoading(false);
    if (onError) {
      onError(new Error(`Failed to load video: ${videoUrl}`));
    }
  };

  const handleLoadStart = () => {
    setIsLoading(true);
    setHasError(false);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
    setHasError(false);
  };

  // Mobile with poster: show static image (zero video download)
  if (showPosterImage) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <img
          src={posterUrl}
          alt=""
          className="block w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  if (hasError) {
    return (
      <div className={`absolute inset-0 flex items-center justify-center bg-gray-900 ${className}`}>
        <div className="text-center p-4">
          <svg
            className="w-12 h-12 mx-auto mb-2 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <p className="text-xs text-gray-400">Failed to load video</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
          <div className="animate-pulse">
            <svg
              className="w-8 h-8 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        src={isMobile ? undefined : videoUrl}
        className="block w-full h-full object-cover"
        autoPlay={!isMobile && autoPlay}
        loop={loop}
        muted
        playsInline
        preload={isMobile ? "none" : autoPlay ? "auto" : preload}
        poster={isMobile ? undefined : undefined}
        onError={handleError}
        onLoadStart={handleLoadStart}
        onLoadedData={handleLoadedData}
      />
    </div>
  );
}
