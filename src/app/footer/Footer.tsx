import Link from "next/link";
import "./footer.scss";
import React from "react";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { fetchData } from "@/db/sanity";

type Props = {};

export default async function Footer({}: Props) {
  const hd = await fetchData<any>(`
				*[_type == 'general' && preset == 'main']{
					mch,
			}[0]
			`);
  return (
    <footer id="footer">
      <div className="decor">
        <svg
          width="225"
          height="179"
          viewBox="0 0 225 179"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fsj-l"
        >
          <path d="M0 0L67 89.5L67 179H0L0 0Z" fill="#F75252" />
          <path d="M79 30L146 104.5L146 179H79L79 30Z" fill="#F38845" />
          <path
            d="M224 132.017V178H159L159 85.9348L224 132.017Z"
            stroke="#FFE867"
            strokeWidth="2"
          />
        </svg>
        <svg
          width="236"
          height="179"
          viewBox="0 0 236 179"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fsj-r"
        >
          <path
            d="M167.224 90.0185L167.224 177.5H234.5L234.5 4.3392L167.224 90.0185Z"
            stroke="#A584F3"
            strokeWidth="3"
          />
          <path
            d="M153.138 30L82.8623 104.5L82.8623 179H153.138L153.138 30Z"
            fill="#73D4E7"
          />
          <path
            d="M70.2755 84L-4.57764e-05 131.5V179H70.2755L70.2755 84Z"
            fill="#67ADFF"
          />
        </svg>

        <div className="center-p"></div>
      </div>
      <div className="footer-content">
        <div className="confine">
          <article>
            <img src="/gfx/logo_dark.png" alt="" className="logo" />
            <p className="p">
              VSekai EN is a pioneering VTuber Agency based in the United
              States, dedicated to empowering creators and fostering a thriving
              community.
            </p>
            <p className="p">
              We're here to reshape the future of VTubing sphere, one innovative
              step at a time.
            </p>

            <div className="notice">
              <div className="decor"></div>
              <p className="notice"> ©2025 VSEKAI. All rights reserved.</p>
            </div>
          </article>
          <div className="other">
            <svg
              width="81"
              height="44"
              viewBox="0 0 81 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sd-l"
            >
              <path
                d="M81 44L0 44L2.09815e-06 20L59.3491 20L81 44Z"
                fill="#3B3B3B"
              />
              <path
                d="M53 16L0 16L1.39876e-06 -4.63341e-06L38.8333 -1.23849e-06L53 16Z"
                fill="#3B3B3B"
              />
            </svg>
            <svg
              width="81"
              height="44"
              viewBox="0 0 81 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sd-r"
            >
              <path d="M0 0H81V24H21.6509L0 0Z" fill="#3B3B3B" />
              <path d="M28 28H81V44H42.1667L28 28Z" fill="#3B3B3B" />
            </svg>

            <div className="left">
              <nav className="mini">
                <div className="mini-h">
                  <h2>Navigation</h2>
                  <hr />
                </div>
                <div className="list">
                  <Link href={"/home"} className="btn btn-mini">
                    {" "}
                    HOME
                  </Link>
                  <Link href={"/achievements"} className="btn btn-mini">
                    {" "}
                    ACHIEVEMENTS
                  </Link>
                  <Link href={"/about"} className="btn btn-mini">
                    {" "}
                    ABOUT
                  </Link>
                  <Link href={"/contacts"} className="btn btn-mini">
                    {" "}
                    CONTACT US
                  </Link>
                  <Link href={"/talents"} className="btn btn-mini">
                    {" "}
                    TALENTS
                  </Link>
                </div>
              </nav>
              <nav className="mini">
                <div className="mini-h">
                  <h2>Other Links</h2>
                  <hr />
                </div>
                <div className="list">
                  <a href={hd.mch} target="_blank" className="btn btn-mini">
                    {" "}
                    MERCHANDISE
                  </a>
                  <a href={"#"} className="btn btn-mini">
                    {" "}
                    OTHER LINKS
                  </a>
                </div>
              </nav>
            </div>
            <div className="right">
              <div className="socials">
                <a
                  href="https://www.youtube.com/@VSekaiEN"
                  className="btn btn-icon y"
                >
                  <FaYoutube />
                </a>
                <a href="https://x.com/VSekaiEN" className="btn btn-icon x">
                  <FaXTwitter />
                </a>
                <a
                  href="https://discord.gg/XsunFzGj83"
                  className="btn btn-icon d"
                >
                  <FaDiscord />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
