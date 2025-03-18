"use client";
import React, { useEffect, useRef, useState } from "react";
import { CgPlayButton } from "react-icons/cg";
import { FaPause, FaPlay } from "react-icons/fa";

type Props = {};

export default function AudioButtoin({ src }: any) {
  const [play, setPlay] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  if (!src) return <></>;
  return (
    <button
      className={`btn btn-play ${play ? "play" : "paused"}`}
      onClick={() => {
        if (audioRef.current) {
          if (!play) {
            audioRef.current.pause();
          } else {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          }
        }
        setPlay(!play);
      }}
    >
      <audio src={src} ref={audioRef} className="ad"></audio>
      <div className="pl">
        <FaPlay />
      </div>
      <div className="pa">
        <FaPause />
      </div>
    </button>
  );
}
