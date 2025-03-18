import Link from "next/link";
import "./talents.scss";
import React, { CSSProperties } from "react";
import { fetchData, urlFor } from "@/db/sanity";

type Props = {};

export default async function Talents({}: Props) {
  const tlist = await fetchData<any[]>(`
		*[_type == 'generation']{
			name,
			color,
			tl[]->{
			...,
			}
		}
	`);
  console.log(tlist[0].tl);
  // console.log(tlist);

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
              <svg
                width="386"
                height="152"
                viewBox="0 0 386 152"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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

              <p className="desc">
                Introducing VSekai's exceptional talents—individuals who define
                and elevate the essence of our agency. These creators are at the
                core of what makes VSekai unique, each bringing their own
                distinct voice, style, and passion to their content.
                <br />
                <br />
                Their creativity and dedication shape the future of VTubing and
                inspire fans across the globe.
              </p>
              <p className="desc">
                Explore their dedicated character pages to learn more about
                their interests, preferences, and milestones, including
                birthdays and personal insights. Additionally, you’ll find
                direct links to their YouTube channels, social media profiles.
              </p>
              <p className="desc">
                Get to know the talents who make VSekai what it is today!
              </p>
            </div>
          </article>
          <div className="tl-l">
            {tlist &&
              tlist.map((tlist, index) => {
                return (
                  <div
                    className="tl-container"
                    key={index}
                    style={{ "--accent": tlist.color } as CSSProperties}
                  >
                    <div className="tlc-h">
                      <div className="panel">
                        <div className="claw"></div>
                        <p>{tlist.name}</p>
                      </div>
                      <div className="bgline"></div>
                    </div>
                    <div className="tlc-l">
                      {tlist.tl &&
                        tlist.tl.map((tal: any, index: number) => {
                          if (!tal.art.hs)
                            return (
                              <React.Fragment
                                key={"tllist" + index}
                              ></React.Fragment>
                            );
                          return (
                            <Link
                              href={"/talent/" + tal.s.current}
                              key={tal.id + " " + index}
                              className="btn tlcard"
                              style={
                                {
                                  "--accent": tal.ca,
                                } as CSSProperties
                              }
                            >
                              <img
                                src={urlFor(tal.art.hs).auto("format").url()}
                                alt=""
                              />
                              <div className="info">
                                <p className="n">{tal.n}</p>
                                <p className="jp">{tal.nj}</p>
                              </div>
                            </Link>
                          );
                        })}

                      {/* <Link href={"/talent/slug"} className="btn tlcard">
                        <img src="/gfx/headshot.png" alt="" />
                      </Link> */}
                    </div>
                  </div>
                );
              })}

            {/* <div className="tl-container">
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
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
