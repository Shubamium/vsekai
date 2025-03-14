import Link from "next/link";
import "./footer.scss";
import React from "react";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer id="footer">
      <div className="decor"></div>
      <div className="footer-content">
        <div className="confine">
          <article>
            <img src="/gfx/logo_dark.png" alt="" className="logo" />
            <p>
              (Placeholder) To prioritize 100% creative freedom for our talents,
              empowering them to be their true selves and shine in their own
              unique ways.
            </p>

            <div className="notice">
              <div className="decor"></div>
              <p className="notice"> ©2025 VSEKAI. All rights reserved.</p>
            </div>
          </article>
          <div className="other">
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
                  <h2>Navigation</h2>
                  <hr />
                </div>
                <div className="list">
                  <a href={"#"} className="btn btn-mini">
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
                <a href="#" className="btn btn-icon y">
                  <FaYoutube />
                </a>
                <a href="#" className="btn btn-icon x">
                  <FaXTwitter />
                </a>
                <a href="#" className="btn btn-icon d">
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
