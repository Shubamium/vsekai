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
          <svg
            width="70"
            height="162"
            viewBox="0 0 70 162"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="al"
          >
            <path
              d="M62.1875 123.313L62.1875 76.1813L3.86761e-05 6.52915e-05L3.70158e-05 47.1315L62.1875 123.313Z"
              fill="#FAC03D"
            />
            <path
              d="M70 161.315L70 142.917L7.81254 66.6974L7.81254 85.0952L70 161.315Z"
              fill="#B2CC54"
            />
          </svg>
          <svg
            width="77"
            height="190"
            viewBox="0 0 77 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ar"
          >
            <path
              d="M8.40625 145.163L8.40625 89.68L76.8125 7.23232e-05L76.8125 55.4829L8.40625 145.163Z"
              fill="#67ADFF"
            />
            <path
              d="M-7.13786e-07 189.898L4.36255e-06 168.241L68.4062 78.5157L68.4062 100.173L-7.13786e-07 189.898Z"
              fill="#A584F3"
            />
          </svg>

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
