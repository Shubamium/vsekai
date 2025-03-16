"use client";
import React, { useEffect, useRef, useState } from "react";
import { CgPlayButton } from "react-icons/cg";
import { FaPause } from "react-icons/fa";

type Props = {};

export default function AudioButtoin({ src }: any) {
  const [play, setPlay] = useState();
  const audioRef = useRef<HTMLAudioElement>(null);
  if (!src) return <></>;
  return (
    <button
      className={`btn btn-play ${play ? "play" : "paused"}`}
      onClick={() => {
        setPlay(play);
      }}
    >
      <audio src={src} className="ad"></audio>
      <div className="pl">
        <CgPlayButton />
      </div>
      <div className="pa">
        <FaPause />
      </div>
    </button>
  );
}
