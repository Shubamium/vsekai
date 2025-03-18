"use client";
import React from "react";

type Props = {};

export default function HomeVideo({ hv }: any) {
  return (
    <div className="video-container backglow">
      <img src="/de/video-l.png" alt="" className="decor-l" />
      <img src="/de/video-r.png" alt="" className="decor-r" />
      <video
        src={hv}
        playsInline
        autoPlay
        muted
        controls
        className="video-center"
      >
        {/* <source src={hd.v} /> */}
      </video>
    </div>
  );
}
