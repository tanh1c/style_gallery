import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  desaturated?: boolean;
}

export function VideoBackground({
  src,
  poster,
  className = "",
  desaturated = false,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (src.endsWith(".m3u8")) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {
            // Auto-play might be blocked
          });
        });
        return () => hls.destroy();
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      }
    } else {
      video.src = src;
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      className={`absolute inset-0 w-full h-full object-cover pointer-events-none ${
        desaturated ? "saturate-0" : ""
      } ${className}`}
    />
  );
}
