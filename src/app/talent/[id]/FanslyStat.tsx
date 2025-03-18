import Link from "next/link";
import React from "react";
import { getFansly } from "@/db/rapidapi";
type Props = {};

export default async function FanslyStat({ id, url }: any) {
  const fd = await getFansly(id);
  console.log(fd, "geeting fansly data");
  if (!fd) {
    return <></>;
  }
  const formatter = Intl.NumberFormat("en", {
    notation: "compact",
  });
  return (
    <Link href={url} target="_blank" className="stat">
      <img src="/gfx/fanslylogo.png" alt="" />
      <p>{formatter.format(fd)}</p>
    </Link>
  );
}
