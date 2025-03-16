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

              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
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
                          return (
                            <Link
                              href={"/talent/" + tal.s.current}
                              key={tal.id + index}
                              className="btn tlcard"
                            >
                              <img
                                src={urlFor(tal.art.hs).auto("format").url()}
                                alt=""
                              />
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
