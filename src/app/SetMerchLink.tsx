"use client";
import React, { useEffect } from "react";

type Props = {};

export default function SetMerchLink({ l }: any) {
  useEffect(() => {
    localStorage.setItem("m", l);
  }, []);
  return <></>;
}
