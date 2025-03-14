import Link from "next/link";
import "./talentSection.scss";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

type Props = {};

export default function Talent({}: Props) {
  return (
    <section id="home-talent">
      <div className="t-h">
        <div className="sh-contianer">
          <h2 className="sh t-rb">Sub title here</h2>
        </div>
        <h2 className="h">TALENTS</h2>
      </div>

      <div className="talent-list-container">
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
