import React, { useEffect, useRef } from 'react';

interface VideoProps {
  src: string | undefined;
  className?: string | undefined;
}

const MutedVideo = (props: VideoProps) => {
  const { src = undefined, className = undefined } = props;

  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current || src === undefined) return;
    const videoEl: HTMLVideoElement = (videoRef.current as unknown) as HTMLVideoElement;
    videoEl.defaultMuted = true;
    videoEl.muted = true;
    setTimeout(() => {
      videoEl.src = src;
    }, 300);
  }, [videoRef, src]);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      loop={true}
      autoPlay
      playsInline={true}
      webkit-playsinline="true"
      x5-playsinline="true"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="false"
      x5-video-orientation="portraint"
      x-webkit-airplay="allow"
      t7-video-player-type="inline"
    ></video>
  );
};

export default MutedVideo;
