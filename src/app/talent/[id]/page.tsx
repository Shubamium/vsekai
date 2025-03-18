import Link from "next/link";
import "./talent.scss";
import React, { CSSProperties, Suspense } from "react";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaPlay,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import { fetchData, urlFor } from "@/db/sanity";
import { redirect } from "next/navigation";
import AudioButtoin from "./AudioButtoin";
import { FaXTwitter } from "react-icons/fa6";
import FanslyStat from "./FanslyStat";
import TwitterStat from "./TwitchStat";
import { LuLoaderCircle } from "react-icons/lu";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function page({ params }: Props) {
  const param = await params;
  const id = param.id;

  const td = await fetchData<any>(`
		*[_type == 'talent' && s.current == '${id}']{
			...,
			'vl':vl.asset -> url,
		
		}[0]
	`);

  if (!td) {
    redirect("/");
  }

  console.log(td);
  return (
    <main
      id="page_talent"
      style={
        {
          "--accent": td.ca,
        } as CSSProperties
      }
    >
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
          <div className="bg-text">
            <p>
              VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI
              VSEKAI VSEKAI
            </p>
            <p>
              VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI
              VSEKAI VSEKAI
            </p>
            <p>
              VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI VSEKAI
              VSEKAI VSEKAI
            </p>
          </div>
          <div className="confine">
            <svg
              width="311"
              height="162"
              viewBox="0 0 311 162"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="tcl"
            >
              <path d="M2 0.5V160.5H311" stroke="#D5D5D5" strokeWidth="2" />
              <path
                d="M19.3428 145.167L19.3428 72.9338L102.521 145.167H19.3428Z"
                stroke="#F75252"
                strokeWidth="7"
              />
              <path
                d="M61.8652 52.0935L61.8652 88.6397L20.3029 52.0935L61.8652 52.0935Z"
                fill="#FAC03D"
                stroke="#FAC03D"
                strokeWidth="4"
              />
              <path
                d="M71.4516 52.0376L91.3427 52.4162L71.021 74.6589L71.4516 52.0376Z"
                stroke="#F58644"
                strokeWidth="4"
              />
            </svg>

            <svg
              width="309"
              height="151"
              viewBox="0 0 309 151"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="tcr"
            >
              <path d="M0 1H308V151" stroke="#D5D5D5" strokeWidth="2" />
              <path
                d="M287.5 23.5L287.5 111.325L186.368 23.5L287.5 23.5Z"
                stroke="#A584F3"
                strokeWidth="7"
              />
              <path
                d="M238 133L238 88.4218L288.697 133L238 133Z"
                fill="#B2CC54"
                stroke="#B2CC54"
                strokeWidth="4"
              />
              <path
                d="M225.362 132.073L200.553 131.601L225.899 103.859L225.362 132.073Z"
                stroke="#73D4E7"
                strokeWidth="4"
              />
            </svg>

            <div className="art">
              <svg
                width="142"
                height="127"
                viewBox="0 0 142 127"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="tsa"
              >
                <path
                  opacity="0.28"
                  d="M1 1L72.63 0.999997L0.999997 74.5401L1 1Z"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  opacity="0.28"
                  d="M31 23L102.63 23L31 96.5401L31 23Z"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  opacity="0.28"
                  d="M68 51L139.63 51L68 124.54L68 51Z"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>

              <svg
                width="241"
                height="314"
                viewBox="0 0 241 314"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="d-dia"
              >
                <path
                  d="M54.6904 64L151.796 104.741L177.69 200L80 157L54.6904 64Z"
                  fill="#F38845"
                />
                <path
                  d="M58 68L149.579 106.345L174 196L81.8692 155.529L58 68Z"
                  className="center"
                  fill="black"
                />
                <path
                  d="M0 195.431L92.5 186L174.521 251.71L82.8096 262.354L0 195.431Z"
                  fill="#F38845"
                />
                <path
                  d="M160.522 0L205.5 67L189.318 134.018L148.149 78.6237L160.522 0Z"
                  fill="#F38845"
                />
              </svg>

              <img
                src={urlFor(td.art.hb).auto("format").url()}
                alt=""
                className="t-mart"
              />
            </div>
            <div className="details">
              {/* Add Paused classed */}
              <AudioButtoin src={td.vl} />
              <div className="t">
                <h2 className="name tu">{td.n}</h2>
                <h2 className="name tu ns ">{td.nj}</h2>
                <div className="rb">
                  <div className="rb-line"></div>
                  <div className="rb-line"></div>
                  <div className="rb-line"></div>
                </div>
              </div>
              <div className="lis"></div>
              <p className="desc p">{td.td}</p>

              <div className="infos">
                {td.i &&
                  td.i.map((tdi: any) => {
                    return (
                      <div className="info" key={tdi._key}>
                        <div className="panel">
                          <p className="sub">{tdi.title}</p>
                          <p className="data">{tdi.description}</p>
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
                    );
                  })}
                {/* <div className="info">
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
                </div> */}
              </div>

              <div className="stats">
                <h2 className="h tu">FOLLOW {td.n.split(" ")[0]}!</h2>
                <div className="sl">
                  <Suspense
                    fallback={
                      <p
                        className="p"
                        style={{
                          animation: "blink 1s infinite linear alternate",
                        }}
                      >
                        <LuLoaderCircle
                          style={{ animation: "speen 1s infinite  " }}
                        />{" "}
                        Loading social data...
                      </p>
                    }
                  >
                    {td.ct?.t && (
                      <Link href={td.ct?.yt.url} className="stat">
                        <FaYoutube />
                        <p>{td.ct?.yt.id}</p>
                      </Link>
                    )}
                    {td.ct?.t && (
                      <Link href={td.ct?.t.url} className="stat">
                        <FaTwitch />
                        <p>{td.ct?.t.id}</p>
                      </Link>
                    )}
                    {td.ct?.x && (
                      <TwitterStat id={td.ct?.x.id} url={td.ct?.x.url} />
                    )}
                    {/* <p>{td.ct?.x.id}</p> */}

                    {/* <div className="stat">
                    <FaXTwitter />
                    <p>18.3k</p>
                  </div> */}
                    {td.ct?.f && (
                      <FanslyStat id={td.ct.f.id} url={td.ct.f.url} />
                    )}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="talent-detail">
        <svg
          width="386"
          height="152"
          viewBox="0 0 386 152"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sn"
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

        <svg
          width="386"
          height="152"
          viewBox="0 0 386 152"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sn r"
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

        <div className="td-h confine">
          <h2 className="h t-gw">More from {td.n.split(" ")[0]}</h2>
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
            {td.vd &&
              td.vd.map((v: any) => {
                return (
                  <div className="vid" key={v._key}>
                    <div className="vid-c">
                      <iframe
                        width="560"
                        height="315"
                        src={"https://www.youtube.com/embed/" + v.vId}
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
                        {v.vt}
                      </p>
                    </div>
                  </div>
                );
              })}
            {/* <div className="vid">
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
            </div> */}
          </div>
        </div>

        <div className="td-cl confine">
          <div className="l">
            <p className="p t-gw">Looking to collaborate with Taiga?</p>
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
