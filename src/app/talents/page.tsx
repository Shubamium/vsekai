import Link from "next/link";
import "./talents.scss";
import React from "react";

type Props = {};

export default function Talents({}: Props) {
  return (
    <main id="page_talents">
      <section id="talent-list">
        <div className="confine">
          <article className="tl-h">
            <div className="rb">
              <div className="rb-line"></div>
              <div className="rb-line"></div>
              <div className="rb-line"></div>
            </div>
            <div className="heading">
              <div className="title">
                <h2 className="h">TALENTS</h2>
                <div className="jaw">
                  <div className="j"></div>
                  <div className="j"></div>
                </div>
              </div>

              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </article>
          <div className="tl-l">
            <div className="tl-container">
              <div className="tlc-h">
                <div className="panel">
                  <div className="claw"></div>
                  <p>GENERATION 1 - APEX</p>
                </div>
                <div className="bgline"></div>
              </div>
              <div className="tlc-l">
                <Link href={"/talent/slug"} className="btn tlcard">
                  <img src="/gfx/headshot.png" alt="" />
                </Link>
                <Link href={"/talent/slug"} className="btn tlcard">
                  <img src="/gfx/headshot.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="tl-container">
              <div className="tlc-h">
                <div className="panel">
                  <div className="claw"></div>
                  <p>GENERATION 1 - APEX</p>
                </div>
                <div className="bgline"></div>
              </div>
              <div className="tlc-l">
                <Link href={"/talent/slug"} className="btn tlcard">
                  <img src="/gfx/headshot.png" alt="" />
                </Link>
                <Link href={"/talent/slug"} className="btn tlcard">
                  <img src="/gfx/headshot.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
