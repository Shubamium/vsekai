"use client";
import { urlFor } from "@/db/sanity";
import React, { useState } from "react";
import { TbArrowsMoveVertical } from "react-icons/tb";

type Props = {
  avl: any[];
};

export default function AvScroller({ avl }: Props) {
  const [a, setA] = useState(0);

  const ca = avl[a];

  const next = () => {
    setA(Math.min(a + 1, avl.length - 1));
  };

  const prev = () => {
    setA(Math.max(a - 1, 0));
  };
  return (
    <section id="achievement">
      <div className="confine">
        <figure className="slide">
          <div className="display backglow">
            <img src={urlFor(ca.ai).auto("format").url()} alt="" />
          </div>
          <div className="controls">
            <button className="btn btn-ol" onClick={prev}>
              PREV
            </button>
            <div className="pager">
              {new Array(avl.length).fill(0).map((_, index) => {
                return (
                  <div
                    className={`p ${index === a ? "c" : ""}`}
                    key={"pager" + index}
                  ></div>
                );
              })}
            </div>
            <button className="btn btn-ol" onClick={next}>
              NEXT
            </button>
          </div>
        </figure>

        <article id="detail">
          <div className="a-h">
            <svg
              width="323"
              height="26"
              viewBox="0 0 323 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M209 0H323V26H246.5L209 0Z" fill="#B2CC54" />
              <path d="M120.5 0H190.5L226.5 26H158L120.5 0Z" fill="#F75252" />
              <path
                d="M37.9691 24.5L4.79606 1.5H92.015L123.861 24.5H37.9691Z"
                stroke="#DE8F57"
                strokeWidth="3"
              />
            </svg>

            <div className="sub">
              <h2 className="sh t-rb">Subtitle Here</h2>
            </div>
            <h2 className="h">ACHIEVEMENTS</h2>
          </div>

          <div className="a-d">
            <div className="panel backglow">
              <div className="back-line "></div>
              <h2 className="h">{ca.t}</h2>
              <p className="p">{ca.d}</p>

              <div className="arr"></div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
