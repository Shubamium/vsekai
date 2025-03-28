"use client";
import React, { useEffect, useState } from "react";
import "./loadingScreen.scss";
type Props = {};

export default function LoadingScreen({}: Props) {
  const [d, setD] = useState(false);
  const [safeToRemove, setSafeToRemove] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setSafeToRemove(true);
      }, 1300);
    }, 3500);
  }, []);

  if (safeToRemove) {
    return <></>;
  }
  return (
    <div id="loading-screen" className={d ? "d" : "nd"}>
      <div className="bg-zig"></div>
      <div className="lines">
        <div className="rb-line loading"></div>
        <div className="rb-line loading"></div>
        <div className="rb-line loading"></div>
      </div>
      <img src="/gfx/icon.png" alt="" className="mi" />
      <div className="lines">
        <div className="rb-line loading"></div>
        <div className="rb-line loading"></div>
        <div className="rb-line loading"></div>
      </div>
      <p className="p"> - Loading -</p>
    </div>
  );
}
