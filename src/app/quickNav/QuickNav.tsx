"use client";
import Link from "next/link";
import "./quickNav.scss";
import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";
import {
  BiShoppingBag,
  BiSolidShoppingBag,
  BiSolidShoppingBagAlt,
  BiTrophy,
} from "react-icons/bi";
import { PiShoppingBagFill } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import { BsTrophyFill } from "react-icons/bs";
import { stagger, useAnimate } from "motion/react";

type Props = {};

export default function QuickNav({}: Props) {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const [mch, setMCH] = useState("");
  useEffect(() => {
    if (open) {
      animate(
        ".btn-qn",
        {
          y: -50,
          rotate: 0,
        },
        {
          delay: stagger(0.09),
          duration: 0.4,
          ease: "circInOut",
        }
      );
    } else {
      animate(".btn-qn", {
        y: 400,
        rotate: 20,
      });
    }
  }, [open]);

  useEffect(() => {
    const mchs = localStorage.getItem("m") ?? "#";
    setMCH(mchs);
  }, []);
  return (
    <div
      id="quick-nav"
      ref={scope}
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
          <Link href={mch ?? ""} target="_blank" className="btn btn-qn">
            <BiSolidShoppingBag />
          </Link>
          <Link href={"/contacts"} className="btn btn-qn">
            <CgMail />
          </Link>
        </div>
      </nav>
    </div>
  );
}
