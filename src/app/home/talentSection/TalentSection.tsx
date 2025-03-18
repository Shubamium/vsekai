"use client";
// import "./talentSection.scss";
import Link from "next/link";
import "./talentSection.scss";
import React, { CSSProperties, useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import useMeasure from "react-use-measure";
import { useAnimate } from "motion/react";
import { urlFor } from "@/db/sanity";
import { TLSSocket } from "tls";

type Props = {};

export default function Talent({ tl }: any) {
  const [ref, bounds] = useMeasure();

  const [ar, animate] = useAnimate();
  const scrollerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const to = bounds.width;
    const talCount = tl.length;

    const controller = animate(
      ".talent-list-container",
      {
        x: [0, -to * 2],
      },
      {
        duration: 4 * talCount,
        ease: "linear",
        repeat: Infinity,
        // direction: "alternate",
        repeatDelay: 0,
        // animationIterationCount: "inifinite",
        repeatType: "reverse",
      }
    );
    if (scrollerRef.current) {
      scrollerRef.current.addEventListener("mouseenter", () => {
        controller.pause();
      });
      scrollerRef.current.addEventListener("mouseleave", () => {
        controller.play();
      });
    }
  }, [bounds]);
  return (
    <section id="home-talent" ref={ar}>
      <svg
        width="386"
        height="152"
        viewBox="0 0 386 152"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="top-neon"
      >
        <path
          d="M142.176 151.5L1.15112 0.5H68.3147L209.34 151.5H142.176Z"
          stroke="#F75252"
        />
        <path
          d="M232.645 151.5L91.6199 0.5H158.783L299.808 151.5H232.645Z"
          stroke="#67ADFF"
        />
        <path
          d="M317.685 151.5L176.661 0.5H243.824L384.849 151.5H317.685Z"
          stroke="#A584F3"
        />
      </svg>

      <div className="t-h">
        <div className="sh-contianer">
          <h2 className="sh t-rb">Meet VSekai’s</h2>
        </div>
        <h2 className="h">TALENTS!</h2>
        <svg
          width="301"
          height="137"
          viewBox="0 0 301 137"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ht-l"
        >
          <path
            d="M2.5 2.5H297.139L237.953 134.5H2.5V2.5Z"
            stroke="#F75252"
            strokeWidth="2"
          />
        </svg>

        <svg
          width="301"
          height="137"
          viewBox="0 0 301 137"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ht-r"
        >
          <path
            d="M298.5 134.5L3.86078 134.5L63.0474 2.50002L298.5 2.5L298.5 134.5Z"
            stroke="#F75252"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="bg-text">
        <p>
          VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI
          VSEKAI
        </p>
        <p>
          VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI
          VSEKAI
        </p>
        <p>
          VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI
          VSEKAI
        </p>
      </div>
      <div className="scroller" ref={scrollerRef}>
        <div className="talent-list-container">
          <div className="talent-lists" ref={ref}>
            {tl &&
              tl.map((tld: any, index: number) => {
                if (!tld)
                  return (
                    <React.Fragment key={"tld-empty" + index}></React.Fragment>
                  );
                return (
                  <Link
                    href={`talent/${tld.s.current}`}
                    className="talent-card"
                    key={"tld" + tld._id}
                    style={
                      {
                        "--accent": tld.ca,
                      } as CSSProperties
                    }
                  >
                    <div className="top">
                      <div className="slanted"></div>
                      <div className="line-bg"></div>
                      <img
                        src={urlFor(tld.art.hb).auto("format").url()}
                        alt=""
                        className="talent-art"
                      />
                    </div>
                    <div className="detail">
                      <h2 className="name tu">{tld.n.split(" ")[0]}</h2>
                      <svg
                        width="77"
                        height="47"
                        viewBox="0 0 77 47"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="side-part"
                      >
                        <path
                          d="M14.5006 0H32.5228L18.0222 46.5596H0L14.5006 0Z"
                          fill="white"
                        />
                        <path
                          d="M40.3945 0H76.4388V46.5596H25.8939L40.3945 0Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </Link>
                );
              })}
            {/* <Link href={`talent/${"slug"}`} className="talent-card">
              <div className="top">
                <div className="slanted"></div>
                <div className="line-bg"></div>
                <img
                  src="/gfx/talent-card-sample.png"
                  alt=""
                  className="talent-art"
                />
              </div>
              <div className="detail">
                <h2 className="name">LEO</h2>
                <svg
                  width="77"
                  height="47"
                  viewBox="0 0 77 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-part"
                >
                  <path
                    d="M14.5006 0H32.5228L18.0222 46.5596H0L14.5006 0Z"
                    fill="white"
                  />
                  <path
                    d="M40.3945 0H76.4388V46.5596H25.8939L40.3945 0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
            <Link href={`talent/${"slug"}`} className="talent-card">
              <div className="top">
                <div className="slanted"></div>
                <div className="line-bg"></div>
                <img
                  src="/gfx/talent-card-sample.png"
                  alt=""
                  className="talent-art"
                />
              </div>
              <div className="detail">
                <h2 className="name">LEO</h2>
                <svg
                  width="77"
                  height="47"
                  viewBox="0 0 77 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-part"
                >
                  <path
                    d="M14.5006 0H32.5228L18.0222 46.5596H0L14.5006 0Z"
                    fill="white"
                  />
                  <path
                    d="M40.3945 0H76.4388V46.5596H25.8939L40.3945 0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
            <Link href={`talent/${"slug"}`} className="talent-card">
              <div className="top">
                <div className="slanted"></div>
                <div className="line-bg"></div>
                <img
                  src="/gfx/talent-card-sample.png"
                  alt=""
                  className="talent-art"
                />
              </div>
              <div className="detail">
                <h2 className="name">LEO</h2>
                <svg
                  width="77"
                  height="47"
                  viewBox="0 0 77 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-part"
                >
                  <path
                    d="M14.5006 0H32.5228L18.0222 46.5596H0L14.5006 0Z"
                    fill="white"
                  />
                  <path
                    d="M40.3945 0H76.4388V46.5596H25.8939L40.3945 0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link> */}
          </div>
          <div className="talent-lists">
            {tl &&
              tl.map((tld: any, index: number) => {
                if (!tld)
                  return (
                    <React.Fragment key={"tld-empty" + index}></React.Fragment>
                  );
                return (
                  <Link
                    href={`talent/${tld.s.current}`}
                    className="talent-card"
                    key={"tld" + tld._id}
                    style={
                      {
                        "--accent": tld.ca,
                      } as CSSProperties
                    }
                  >
                    <div className="top">
                      <div className="slanted"></div>
                      <div className="line-bg"></div>
                      <img
                        src={urlFor(tld.art.hb).auto("format").url()}
                        alt=""
                        className="talent-art"
                      />
                    </div>
                    <div className="detail">
                      <h2 className="name tu">{tld.n.split(" ")[0]}</h2>
                      <svg
                        width="77"
                        height="47"
                        viewBox="0 0 77 47"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="side-part"
                      >
                        <path
                          d="M14.5006 0H32.5228L18.0222 46.5596H0L14.5006 0Z"
                          fill="white"
                        />
                        <path
                          d="M40.3945 0H76.4388V46.5596H25.8939L40.3945 0Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </Link>
                );
              })}
          </div>
          <div className="talent-lists">
            {tl &&
              tl.map((tld: any, index: number) => {
                if (!tld)
                  return (
                    <React.Fragment key={"tld-empty" + index}></React.Fragment>
                  );
                return (
                  <Link
                    href={`talent/${tld.s.current}`}
                    className="talent-card"
                    key={"tld" + tld._id}
                    style={
                      {
                        "--accent": tld.ca,
                      } as CSSProperties
                    }
                  >
                    <div className="top">
                      <div className="slanted"></div>
                      <div className="line-bg"></div>
                      <img
                        src={urlFor(tld.art.hb).auto("format").url()}
                        alt=""
                        className="talent-art"
                      />
                    </div>
                    <div className="detail">
                      <h2 className="name tu">{tld.n.split(" ")[0]}</h2>
                      <svg
                        width="77"
                        height="47"
                        viewBox="0 0 77 47"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="side-part"
                      >
                        <path
                          d="M14.5006 0H32.5228L18.0222 46.5596H0L14.5006 0Z"
                          fill="white"
                        />
                        <path
                          d="M40.3945 0H76.4388V46.5596H25.8939L40.3945 0Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </Link>
                );
              })}
          </div>
          {/* <div className="talent-lists">
            {tl &&
              tl.map((tld: any) => {
                if (!tld) return <></>;
                return (
                  <Link
                    href={`talent/${tld.s.current}`}
                    className="talent-card"
                    key={"tld" + tld._id}
                    style={
                      {
                        "--accent": tld.ca,
                      } as CSSProperties
                    }
                  >
                    <div className="top">
                      <div className="slanted"></div>
                      <div className="line-bg"></div>
                      <img
                        src={urlFor(tld.art.hb).auto("format").url()}
                        alt=""
                        className="talent-art"
                      />
                    </div>
                    <div className="detail">
                      <h2 className="name tu">{tld.n.split(" ")[0]}</h2>
                      <svg
                        width="77"
                        height="47"
                        viewBox="0 0 77 47"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="side-part"
                      >
                        <path
                          d="M14.5006 0H32.5228L18.0222 46.5596H0L14.5006 0Z"
                          fill="white"
                        />
                        <path
                          d="M40.3945 0H76.4388V46.5596H25.8939L40.3945 0Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </Link>
                );
              })}
          </div>
          <div className="talent-lists">
            {tl &&
              tl.map((tld: any) => {
                if (!tld) return <></>;
                return (
                  <Link
                    href={`talent/${tld.s.current}`}
                    className="talent-card"
                    key={"tld" + tld._id}
                    style={
                      {
                        "--accent": tld.ca,
                      } as CSSProperties
                    }
                  >
                    <div className="top">
                      <div className="slanted"></div>
                      <div className="line-bg"></div>
                      <img
                        src={urlFor(tld.art.hb).auto("format").url()}
                        alt=""
                        className="talent-art"
                      />
                    </div>
                    <div className="detail">
                      <h2 className="name tu">{tld.n.split(" ")[0]}</h2>
                      <svg
                        width="77"
                        height="47"
                        viewBox="0 0 77 47"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="side-part"
                      >
                        <path
                          d="M14.5006 0H32.5228L18.0222 46.5596H0L14.5006 0Z"
                          fill="white"
                        />
                        <path
                          d="M40.3945 0H76.4388V46.5596H25.8939L40.3945 0Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </Link>
                );
              })}
          </div> */}
          {/* <div className="talent-lists">
            <Link href={`talent/${"slug"}`} className="talent-card">
              <div className="top">
                <div className="slanted"></div>
                <div className="line-bg"></div>
                <img
                  src="/gfx/talent-card-sample.png"
                  alt=""
                  className="talent-art"
                />
              </div>
              <div className="detail">
                <h2 className="name">LEO</h2>
                <svg
                  width="77"
                  height="47"
                  viewBox="0 0 77 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-part"
                >
                  <path
                    d="M14.5006 0H32.5228L18.0222 46.5596H0L14.5006 0Z"
                    fill="white"
                  />
                  <path
                    d="M40.3945 0H76.4388V46.5596H25.8939L40.3945 0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
            <Link href={`talent/${"slug"}`} className="talent-card">
              <div className="top">
                <div className="slanted"></div>
                <div className="line-bg"></div>
                <img
                  src="/gfx/talent-card-sample.png"
                  alt=""
                  className="talent-art"
                />
              </div>
              <div className="detail">
                <h2 className="name">LEO</h2>
                <svg
                  width="77"
                  height="47"
                  viewBox="0 0 77 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-part"
                >
                  <path
                    d="M14.5006 0H32.5228L18.0222 46.5596H0L14.5006 0Z"
                    fill="white"
                  />
                  <path
                    d="M40.3945 0H76.4388V46.5596H25.8939L40.3945 0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
            <Link href={`talent/${"slug"}`} className="talent-card">
              <div className="top">
                <div className="slanted"></div>
                <div className="line-bg"></div>
                <img
                  src="/gfx/talent-card-sample.png"
                  alt=""
                  className="talent-art"
                />
              </div>
              <div className="detail">
                <h2 className="name">LEO</h2>
                <svg
                  width="77"
                  height="47"
                  viewBox="0 0 77 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-part"
                >
                  <path
                    d="M14.5006 0H32.5228L18.0222 46.5596H0L14.5006 0Z"
                    fill="white"
                  />
                  <path
                    d="M40.3945 0H76.4388V46.5596H25.8939L40.3945 0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
            <Link href={`talent/${"slug"}`} className="talent-card">
              <div className="top">
                <div className="slanted"></div>
                <div className="line-bg"></div>
                <img
                  src="/gfx/talent-card-sample.png"
                  alt=""
                  className="talent-art"
                />
              </div>
              <div className="detail">
                <h2 className="name">LEO</h2>
                <svg
                  width="77"
                  height="47"
                  viewBox="0 0 77 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-part"
                >
                  <path
                    d="M14.5006 0H32.5228L18.0222 46.5596H0L14.5006 0Z"
                    fill="white"
                  />
                  <path
                    d="M40.3945 0H76.4388V46.5596H25.8939L40.3945 0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="talent-lists">
            <Link href={`talent/${"slug"}`} className="talent-card">
              <div className="top">
                <div className="slanted"></div>
                <div className="line-bg"></div>
                <img
                  src="/gfx/talent-card-sample.png"
                  alt=""
                  className="talent-art"
                />
              </div>
              <div className="detail">
                <h2 className="name">LEO</h2>
                <svg
                  width="77"
                  height="47"
                  viewBox="0 0 77 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-part"
                >
                  <path
                    d="M14.5006 0H32.5228L18.0222 46.5596H0L14.5006 0Z"
                    fill="white"
                  />
                  <path
                    d="M40.3945 0H76.4388V46.5596H25.8939L40.3945 0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
            <Link href={`talent/${"slug"}`} className="talent-card">
              <div className="top">
                <div className="slanted"></div>
                <div className="line-bg"></div>
                <img
                  src="/gfx/talent-card-sample.png"
                  alt=""
                  className="talent-art"
                />
              </div>
              <div className="detail">
                <h2 className="name">LEO</h2>
                <svg
                  width="77"
                  height="47"
                  viewBox="0 0 77 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-part"
                >
                  <path
                    d="M14.5006 0H32.5228L18.0222 46.5596H0L14.5006 0Z"
                    fill="white"
                  />
                  <path
                    d="M40.3945 0H76.4388V46.5596H25.8939L40.3945 0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
            <Link href={`talent/${"slug"}`} className="talent-card">
              <div className="top">
                <div className="slanted"></div>
                <div className="line-bg"></div>
                <img
                  src="/gfx/talent-card-sample.png"
                  alt=""
                  className="talent-art"
                />
              </div>
              <div className="detail">
                <h2 className="name">LEO</h2>
                <svg
                  width="77"
                  height="47"
                  viewBox="0 0 77 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-part"
                >
                  <path
                    d="M14.5006 0H32.5228L18.0222 46.5596H0L14.5006 0Z"
                    fill="white"
                  />
                  <path
                    d="M40.3945 0H76.4388V46.5596H25.8939L40.3945 0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
            <Link href={`talent/${"slug"}`} className="talent-card">
              <div className="top">
                <div className="slanted"></div>
                <div className="line-bg"></div>
                <img
                  src="/gfx/talent-card-sample.png"
                  alt=""
                  className="talent-art"
                />
              </div>
              <div className="detail">
                <h2 className="name">LEO</h2>
                <svg
                  width="77"
                  height="47"
                  viewBox="0 0 77 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="side-part"
                >
                  <path
                    d="M14.5006 0H32.5228L18.0222 46.5596H0L14.5006 0Z"
                    fill="white"
                  />
                  <path
                    d="M40.3945 0H76.4388V46.5596H25.8939L40.3945 0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
          </div> */}
        </div>
      </div>

      <div className="action">
        <Link href={"/talents"} className="btn btn-rb">
          View All Talents <FaChevronRight />
        </Link>
      </div>
    </section>
  );
}
