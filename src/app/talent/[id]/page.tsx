import Link from "next/link";
import "./talent.scss";
import React from "react";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaPlay,
  FaTwitch,
} from "react-icons/fa";

type Props = {};

export default function page({}: Props) {
  return (
    <main id="page_talent">
      <section id="talent">
        <div className="confine">
          <div className="top">
            <Link href={"/talents"} className="btn btn-ol">
              <FaChevronLeft />
              Go back
            </Link>
          </div>
        </div>

        <div className="talent-part">
          <div className="confine">
            <div className="art">
              <img src="/gfx/td.png" alt="" className="t-mart" />
            </div>
            <div className="details">
              {/* Add Paused classed */}
              <button className="btn btn-play  ">
                <div className="pl">
                  <FaPlay></FaPlay>
                </div>
                <div className="pa">
                  <FaPause />
                </div>
              </button>
              <div className="t">
                <h2 className="name">TAIGA</h2>
                <div className="rb">
                  <div className="rb-line"></div>
                  <div className="rb-line"></div>
                  <div className="rb-line"></div>
                </div>
              </div>
              <div className="lis"></div>
              <p className="desc p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. smod
                tempor incididunt ut labore et dolore magna aliqua. od tempor
                incididunt ut labore et.
              </p>

              <div className="infos">
                <div className="info">
                  <div className="panel">
                    <p className="sub">Birthday</p>
                    <p className="data">November 29th</p>
                    <svg
                      width="103"
                      height="105"
                      viewBox="0 0 103 105"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="edge"
                    >
                      <path d="M101 3V103H1L101 3Z" fill="black" />
                      <path
                        d="M101 3V103H1L101 3Z"
                        stroke="white"
                        id="stroke"
                      />
                      <path
                        d="M2.5 102.5L101 2.5"
                        stroke="white"
                        strokeWidth="5"
                      />
                    </svg>
                  </div>
                  <div className="side"></div>
                </div>
                <div className="info">
                  <div className="panel">
                    <p className="sub">Birthday</p>
                    <p className="data">November 29th</p>
                    <svg
                      width="103"
                      height="105"
                      viewBox="0 0 103 105"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="edge"
                    >
                      <path d="M101 3V103H1L101 3Z" fill="black" />
                      <path
                        d="M101 3V103H1L101 3Z"
                        stroke="white"
                        id="stroke"
                      />
                      <path
                        d="M2.5 102.5L101 2.5"
                        stroke="white"
                        strokeWidth="5"
                      />
                    </svg>
                  </div>
                  <div className="side"></div>
                </div>
                <div className="info">
                  <div className="panel">
                    <p className="sub">Birthday</p>
                    <p className="data">November 29th</p>
                    <svg
                      width="103"
                      height="105"
                      viewBox="0 0 103 105"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="edge"
                    >
                      <path d="M101 3V103H1L101 3Z" fill="black" />
                      <path
                        d="M101 3V103H1L101 3Z"
                        stroke="white"
                        id="stroke"
                      />
                      <path
                        d="M2.5 102.5L101 2.5"
                        stroke="white"
                        strokeWidth="5"
                      />
                    </svg>
                  </div>
                  <div className="side"></div>
                </div>
                <div className="info">
                  <div className="panel">
                    <p className="sub">Birthday</p>
                    <p className="data">November 29th</p>
                    <svg
                      width="103"
                      height="105"
                      viewBox="0 0 103 105"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="edge"
                    >
                      <path d="M101 3V103H1L101 3Z" fill="black" />
                      <path
                        d="M101 3V103H1L101 3Z"
                        stroke="white"
                        id="stroke"
                      />
                      <path
                        d="M2.5 102.5L101 2.5"
                        stroke="white"
                        strokeWidth="5"
                      />
                    </svg>
                  </div>
                  <div className="side"></div>
                </div>
              </div>

              <div className="stats">
                <h2 className="h">FOLLOW TAIGA!</h2>
                <div className="sl">
                  <div className="stat ">
                    <FaTwitch />
                    <p>18.3k</p>
                  </div>
                  <div className="stat">
                    <FaTwitch />
                    <p>18.3k</p>
                  </div>
                  <div className="stat">
                    <FaTwitch />
                    <p>18.3k</p>
                  </div>
                  <div className="stat">
                    <FaTwitch />
                    <p>18.3k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="talent-detail">
        <div className="td-h confine">
          <h2 className="h">MORE FROM TAIGA</h2>
          <svg
            width="107"
            height="63"
            viewBox="0 0 107 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="path-1-outside-1_131_498"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="107"
              height="63"
              fill="black"
            >
              <rect fill="white" width="107" height="63" />
              <path d="M43.368 34.592L2.856 58.592V44.192L24.648 31.136L2.856 17.504V3.872L43.368 28.352V34.592ZM72.6143 34.592L32.1023 58.592V44.192L53.8943 31.136L32.1023 17.504V3.872L72.6143 28.352V34.592ZM104.763 34.592L64.251 58.592V44.192L86.043 31.136L64.251 17.504V3.872L104.763 28.352V34.592Z" />
            </mask>
            <path
              d="M43.368 34.592L44.3874 36.3127L45.368 35.7318V34.592H43.368ZM2.856 58.592H0.856V62.1014L3.87538 60.3127L2.856 58.592ZM2.856 44.192L1.82812 42.4763L0.856 43.0588V44.192H2.856ZM24.648 31.136L25.6759 32.8517L28.4781 31.1728L25.7087 29.4404L24.648 31.136ZM2.856 17.504H0.856V18.612L1.79533 19.1996L2.856 17.504ZM2.856 3.87199L3.89036 2.16024L0.856 0.326683V3.87199H2.856ZM43.368 28.352H45.368V27.2237L44.4024 26.6402L43.368 28.352ZM42.3486 32.8713L1.83662 56.8713L3.87538 60.3127L44.3874 36.3127L42.3486 32.8713ZM4.856 58.592V44.192H0.856V58.592H4.856ZM3.88388 45.9077L25.6759 32.8517L23.6201 29.4203L1.82812 42.4763L3.88388 45.9077ZM25.7087 29.4404L3.91667 15.8084L1.79533 19.1996L23.5873 32.8316L25.7087 29.4404ZM4.856 17.504V3.87199H0.856V17.504H4.856ZM1.82165 5.58375L42.3336 30.0638L44.4024 26.6402L3.89036 2.16024L1.82165 5.58375ZM41.368 28.352V34.592H45.368V28.352H41.368ZM72.6143 34.592L73.6336 36.3127L74.6143 35.7318V34.592H72.6143ZM32.1022 58.592H30.1022V62.1014L33.1216 60.3127L32.1022 58.592ZM32.1022 44.192L31.0744 42.4763L30.1022 43.0588V44.192H32.1022ZM53.8943 31.136L54.9221 32.8517L57.7243 31.1728L54.9549 29.4404L53.8943 31.136ZM32.1022 17.504H30.1022V18.612L31.0416 19.1996L32.1022 17.504ZM32.1022 3.87199L33.1366 2.16024L30.1022 0.326683V3.87199H32.1022ZM72.6143 28.352H74.6143V27.2237L73.6486 26.6402L72.6143 28.352ZM71.5949 32.8713L31.0829 56.8713L33.1216 60.3127L73.6336 36.3127L71.5949 32.8713ZM34.1022 58.592V44.192H30.1022V58.592H34.1022ZM33.1301 45.9077L54.9221 32.8517L52.8664 29.4203L31.0744 42.4763L33.1301 45.9077ZM54.9549 29.4404L33.1629 15.8084L31.0416 19.1996L52.8336 32.8316L54.9549 29.4404ZM34.1022 17.504V3.87199H30.1022V17.504H34.1022ZM31.0679 5.58375L71.5799 30.0638L73.6486 26.6402L33.1366 2.16024L31.0679 5.58375ZM70.6143 28.352V34.592H74.6143V28.352H70.6143ZM104.763 34.592L105.782 36.3127L106.763 35.7318V34.592H104.763ZM64.251 58.592H62.251V62.1014L65.2704 60.3127L64.251 58.592ZM64.251 44.192L63.2231 42.4763L62.251 43.0588V44.192H64.251ZM86.043 31.136L87.0709 32.8517L89.8731 31.1728L87.1037 29.4404L86.043 31.136ZM64.251 17.504H62.251V18.612L63.1903 19.1996L64.251 17.504ZM64.251 3.87199L65.2854 2.16024L62.251 0.326683V3.87199H64.251ZM104.763 28.352H106.763V27.2237L105.797 26.6402L104.763 28.352ZM103.744 32.8713L63.2316 56.8713L65.2704 60.3127L105.782 36.3127L103.744 32.8713ZM66.251 58.592V44.192H62.251V58.592H66.251ZM65.2789 45.9077L87.0709 32.8517L85.0151 29.4203L63.2231 42.4763L65.2789 45.9077ZM87.1037 29.4404L65.3117 15.8084L63.1903 19.1996L84.9823 32.8316L87.1037 29.4404ZM66.251 17.504V3.87199H62.251V17.504H66.251ZM63.2166 5.58375L103.729 30.0638L105.797 26.6402L65.2854 2.16024L63.2166 5.58375ZM102.763 28.352V34.592H106.763V28.352H102.763Z"
              fill="white"
              mask="url(#path-1-outside-1_131_498)"
            />
          </svg>
        </div>
        <div className="td-v">
          <div className="confine">
            <div className="vid">
              <div className="vid-c">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/lYBRwWQTnJE"
                  title="YouTube video player"
                  // frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="vid-d">
                <p
                  className="p
								"
                >
                  Video title here e here e heree heree here e here!!
                </p>
              </div>
            </div>
            <div className="vid">
              <div className="vid-c">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/lYBRwWQTnJE"
                  title="YouTube video player"
                  // frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="vid-d">
                <p
                  className="p
								"
                >
                  Video title here e here e heree heree here e here!!
                </p>
              </div>
            </div>
            <div className="vid">
              <div className="vid-c">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/lYBRwWQTnJE"
                  title="YouTube video player"
                  // frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="vid-d">
                <p
                  className="p
								"
                >
                  Video title here e here e heree heree here e here!!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="td-cl confine">
          <div className="l">
            <p className="p">Looking to collaborate with Taiga?</p>
          </div>
          <div className="r">
            <Link href={"/contacts"} className="btn btn-rb backglow">
              Get in touch with us <FaChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
