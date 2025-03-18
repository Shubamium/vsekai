import Link from "next/link";
import React from "react";
import { getX } from "@/db/rapidapi";
import { FaTwitch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
type Props = {};

export default async function TwitterStat({ id, url }: any) {
  const fd = await getX(id);
  // console.log(fd, "geeting x data");
  if (!fd) {
    return <></>;
  }
  const formatter = Intl.NumberFormat("en", {
    notation: "compact",
  });
  return (
    <Link href={url} target="_blank" className="stat">
      {/* <img src="/gfx/fanslylogo.png" alt="" /> */}
      <FaXTwitter />
      <p>{formatter.format(fd)}</p>
    </Link>
  );
}
