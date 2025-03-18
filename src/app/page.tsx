import { fetchData } from "@/db/sanity";
import "./home.scss";
import Talent from "./home/talentSection/TalentSection";
import Link from "next/link";
import HomeAboutScroller from "./HomeAboutScroller";
import HomeVideo from "./HomeVideo";
export default async function Home() {
  const hd = await fetchData<any>(`
		*[_type == 'general' && preset == 'main']{
		...,
		'hv': hv.asset -> url,
	}[0]
	`);

  const gen = await fetchData<any>(
    `*[_type == 'generation']{
					name,
					color,
					tl[]->{
						...,
					}
			}`
  );
  console.log(hd);
  const allTalents = gen
    .map((gd: any) => {
      return gd.tl;
    })
    .flat();

  console.log(allTalents);

  return (
    <div id={"page_home"}>
      <section id="hero">
        <svg
          width="99"
          height="171"
          viewBox="0 0 99 171"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-sidejaw
					"
        >
          <path
            d="M-7.49997 50.42L-7.49997 0.499995L97.7494 0.5L45.3001 50.42L-7.49997 50.42Z"
            fill="#F75252"
            stroke="#F75252"
          />
          <path
            d="M-7.49999 110.46L-7.49998 60.54L79.9655 60.54L36.3066 110.46L-7.49999 110.46Z"
            fill="#F9BC3E"
            stroke="#F9BC3E"
          />
          <path
            d="M-7.49998 170.5L-7.49998 120.58L47.9364 120.58L20.1002 170.5L-7.49998 170.5Z"
            fill="#F38845"
            stroke="#F38845"
          />
        </svg>
        <div className="confine">
          <article>
            <div className="sub">
              <h2 className="sh t-rb">A New Era of Limitless Creativity —</h2>
              <div className="rb-line"></div>
            </div>
            <h2 className="h mh t-gw">WELCOME TO VSEKAI EN!</h2>

            <div className="action">
              <Link href={"/talents"} className="btn btn-rb">
                TALENTS!{" "}
              </Link>
              <button className=" btn-ol btn-disable"> AUDITION! </button>
              {/* <div className="jaw">
                <div className="j a"></div>
                <div className="j b"></div>
                <div className="j c"></div>
              </div> */}
              <svg
                width="140"
                height="57"
                viewBox="0 0 140 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svjaw"
              >
                <path d="M0 0H43.5294V30.157L24.5661 57H0V0Z" fill="#D9D9D9" />
                <path
                  d="M48.2354 0H91.7648V30.157L72.8015 57H48.2354V0Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M97.4706 1H139V29.8394L120.519 56H97.4706V1Z"
                  stroke="#D9D9D9"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </article>
          <HomeVideo hv={hd.hv} />
        </div>

        <svg
          width="112"
          height="171"
          viewBox="0 0 112 171"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-sidejaw-r"
        >
          <path
            d="M0 0L56 50.92L112 50.92L112 4.89568e-06L0 0Z"
            fill="#A584F3"
          />
          <path
            d="M18.771 60.04L65.3855 110.96L112 110.96L112 60.04L18.771 60.04Z"
            fill="#67ADFF"
          />
          <path
            d="M52.5587 120.08L82.2794 171L112 171L112 120.08L52.5587 120.08Z"
            fill="#73D4E7"
          />
        </svg>
      </section>
      <section id="main-about">
        <img src="/de/claw-l.png" alt="" className="claw l" />
        <img src="/de/claw-r.png" alt="" className="claw r" />
        <div className="confine">
          <article>
            <div className="div">
              <h2 className="sh t-rb ">
                It’s Your World, Your Voice, Your VSekai!
              </h2>
            </div>
            <h2 className="h">
              {" "}
              Where Fans Aren’t Just Spectators – They’re Part of the Show!
            </h2>

            <HomeAboutScroller />
          </article>
          <figure>
            <img src="/gfx/icon.png" alt="" />
          </figure>
        </div>
      </section>

      <Talent tl={allTalents} />
    </div>
  );
}
