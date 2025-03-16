"use client";
import Link from "next/link";
import "./quickNav.scss";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";
import { BiShoppingBag, BiTrophy } from "react-icons/bi";
import { PiShoppingBagFill } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import { BsTrophyFill } from "react-icons/bs";

type Props = {};

export default function QuickNav({}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div
      id="quick-nav"
      // onClick={() => {
      //   setOpen(false);
      // }}
      className={`${open ? "open" : "closed"}`}
      // onMouseEnter={() => {
      //   if (open) {
      //     setOpen(false);
      //   }
      // }}
      onMouseLeave={() => {
        if (open) {
          setOpen(false);
        }
      }}
    >
      <div className="rb-line"></div>
      <svg
        width="146"
        height="138"
        viewBox="0 0 146 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="btn btn-ctr"
        onClick={() => {
          setOpen(true);
        }}
      >
        <path d="M73.3013 23L116.603 98H30L73.3013 23Z" fill="#E5E5E5" />
        <path
          d="M10.6715 103L73 0.959199L135.329 103H10.6715Z"
          stroke="#E5E5E5"
        />
      </svg>

      <nav
        id="qn-c"
        onClick={() => {
          setOpen(false);
        }}
      >
        <div className="center">
          <Link href={"/"} className="btn btn-qn">
            <FaHome />
          </Link>
          <Link href={"/about"} className="btn btn-qn">
            <img src="/gfx/icon_white.png" alt="" />
          </Link>
          <Link href={"/talents"} className="btn btn-qn">
            <GiSparkles />
          </Link>
          <Link href={"/achievements"} className="btn btn-qn">
            <BsTrophyFill />
          </Link>
          <Link href={"#"} className="btn btn-qn">
            <PiShoppingBagFill />
          </Link>
          <Link href={"/contacts"} className="btn btn-qn">
            <CgMail />
          </Link>
        </div>
      </nav>
    </div>
  );
}
