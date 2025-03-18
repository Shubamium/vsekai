import Link from "next/link";
import React from "react";
import { getTwitch } from "@/db/rapidapi";
import { FaTwitch } from "react-icons/fa";
type Props = {};

export default async function TwitchStat({ id, url }: any) {
  const fd = await getTwitch(id);
  console.log(fd, "geeting twitch data");
  if (!fd) {
    return <></>;
  }
  const formatter = Intl.NumberFormat("en", {
    notation: "compact",
  });
  return (
    <Link href={url} target="_blank" className="stat">
      {/* <img src="/gfx/fanslylogo.png" alt="" /> */}
      <FaTwitch />
      <p>{formatter.format(fd)}</p>
    </Link>
  );
}
