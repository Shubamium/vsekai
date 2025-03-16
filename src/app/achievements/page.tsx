import "./achievements.scss";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main id="page_achievements">
      <section id="achievement">
        <div className="confine">
          <figure className="slide">
            <div className="display backglow">
              <img src="/bg/bg-art.png" alt="" />
            </div>
            <div className="controls">
              <button className="btn btn-ol">PREV</button>
              <button className="btn btn-ol">NEXT</button>
            </div>
          </figure>
          <article id="detail">
            <div className="a-h">
              <svg
                width="323"
                height="26"
                viewBox="0 0 323 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M209 0H323V26H246.5L209 0Z" fill="#B2CC54" />
                <path d="M120.5 0H190.5L226.5 26H158L120.5 0Z" fill="#F75252" />
                <path
                  d="M37.9691 24.5L4.79606 1.5H92.015L123.861 24.5H37.9691Z"
                  stroke="#DE8F57"
                  strokeWidth="3"
                />
              </svg>

              <div className="sub">
                <h2 className="sh t-rb">Subtitle Here</h2>
              </div>
              <h2 className="h">ACHIEVEMENTS</h2>
            </div>

            <div className="a-d">
              <div className="panel backglow">
                <div className="back-line "></div>
                <h2 className="h">Title Here</h2>
                <p className="p">
                  Some description about this specific achievements here. We
                  greatly value all of your questions and feedback! Please feel
                  free to use the form below to reach out to our team, and we
                  will be happy to respond as quickly as possible.{" "}
                </p>

                <div className="arr"></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="achievement-h">
        <div className="decor-side">
          <div className="line"></div>
          <div className="t"></div>
        </div>
        <div className="confine">
          <img src="/gfx/icon.png" alt="" className="decor-icon" />
          <div className="title">
            <p className="sh">Welcome to VSekai's Hall of</p>
            <h2 className="h">Achievements & Memories! </h2>
          </div>
          <div className="desc">
            <div className="l">
              <p className="p">
                This is where we commemorate the incredible milestones and
                unforgettable moments that define our journey!{" "}
              </p>
              <p className="p">
                From epic debuts and fan meet and greets at conventions to
                legendary merch drops and exciting partnerships, every
                achievement, big or small, deserves to be celebrated.
              </p>
            </div>
            <div className="r">
              <p className="p">
                Here, we proudly showcase the standout moments that have shaped
                VSekai and made our talent’s journeys truly special. It's our
                way of ensuring that their greatest accomplishments are
                remembered, cherished, and shared with you, our amazing
                community .. forever!{" "}
              </p>
              <p className="p">
                Join us as we look back and celebrate these wonderful highlights
                and keep the memories alive!
              </p>
            </div>
          </div>
        </div>

        <div className="decor-side r">
          <div className="t"></div>
          <div className="line"></div>
        </div>
      </section>
    </main>
  );
}
