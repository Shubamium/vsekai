"use client";
import React, { useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
type Props = {};

export default function HomeAboutScroller({}: Props) {
  const [page, setPage] = useState(0);
  const text = [
    `VSekai was built AND founded by VTubers, for VTubers and VTuber fans alike!
At VSekai, we’re rewriting the rules of the VTuber world by creating something truly unique.
We empower our talents to create top-tier, groundbreaking content by providing them with expert editors, exceptional promotion, and, most importantly, 100% creative freedom.
`,
    `No limits, no compromises.
This isn’t about controlling the talents; it’s about empowering them to reach their fullest potential. And the best part?
This is only just the beginning.
But VSekai isn’t just about making dreams come true for our talents--it’s about YOU, the fans, too.
`,
    `
	We know that without you, there’s no magic. That’s why we’ve created the “VSekai Hub” Discord server, a place where fans of all talents can mingle, interact, and get instant notifications on everything happening within the VSekai universe. Join in on exclusive events like talent movie nights, subscriber meetups, community polls, and so much more, ensuring that you’re never out of the loop. Stay up to date on upcoming events, special announcements, and be part of something bigger!

`,
    `
		At VSekai EN, we blend professionalism with an indie feel that no other agency offers. We keep the structure and expertise of a major agency, but without the suffocating restrictions. You will have the ability to connect with the fanbase and your Oshi at an Indie level, all while ensuring the safety and well-being of talents and the fanbase alike.

`,
    `
	This is VSekai--an agency built on passion, freedom, and community. A place where talents and fans come together to create something incredible. You’re not just supporting an agency; you’re supporting something internally and externally positive.
This is your chance to be part of something one of a kind!	
`,
  ];

  const next = () => {
    setPage(Math.min(page + 1, text.length - 1));
  };

  const prev = () => {
    setPage(Math.max(page - 1, 0));
  };
  return (
    <div className="text-container">
      <AnimatePresence mode="wait">
        <motion.p
          className="p"
          key={"page" + page}
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            x: 100,
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {text[page]}
        </motion.p>
      </AnimatePresence>
      {/* <p className="p">
        VSekai was built AND founded by VTubers, for VTubers and VTuber fans
        alike! At VSekai, we’re rewriting the rules of the VTuber world by
        creating something truly unique. We empower our talents to create
        top-tier, groundbreaking content by providing them with expert editors,
        exceptional promotion, and, most importantly, 100% creative freedom.
      </p>
      <p className="p">
        VSekai was built AND founded by VTubers, for VTubers and VTuber fans
        alike! At VSekai, we’re rewriting the rules of the VTuber world by
        creating something truly unique. We empower our talents to create
        top-tier, groundbreaking content by providing them with expert editors,
        exceptional promotion, and, most importantly, 100% creative freedom.
      </p>

      <p className="p">
        We know that without you, there’s no magic. That’s why we’ve created the
        “VSekai Hub” Discord server, a place where fans of all talents can
        mingle, interact, and get instant notifications on everything happening
        within the VSekai universe. Join in on exclusive event87s like talent
        movie nights, subscriber meetups, community polls, and so much more,
        ensuring that you’re never out of the loop.
      </p>
      <p className="p">
        Stay up to date on upcoming events, special announcements, and be part
        of something bigger! At VSekai EN, we blend professionalism with an
        indie feel that no other agency offers. We keep the structure and
        expertise of a major agency, but without the suffocating restrictions.
        You will have the ability to connect with the fanbase and your Oshi at
        an Indie level, all while ensuring the safety and well-being of talents
        and the fanbase alike.
      </p>

      <p className="p">
        This is VSekai--an agency built on passion, freedom, and community. A
        place where talents and fans come together to create something
        incredible. You’re not just supporting an agency; you’re supporting
        something internally and externally positive. This is your chance to be
        part of something one of a kind!
      </p> */}

      <div className="controls">
        <button className="btn btn-ol" onClick={prev}>
          <FaChevronLeft />
        </button>
        <p className="pid"> {page + 1}</p>
        <button className="btn btn-ol" onClick={next}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
