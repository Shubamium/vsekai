import { fetchData } from "@/db/sanity";
import "./achievements.scss";
import React from "react";
import AvScroller from "./AvScroller";

type Props = {};

export default async function page({}: Props) {
  const av = await fetchData<any[]>(`
		*[_type == 'achievement']{
		...
		}
	`);

  const next = () => {
    setA(Math.min(a + 1, avl.length - 1));
  };

  const prev = () => {
    setA(Math.max(a - 1, 0));
  };
  return (
    <main id="page_achievements">
      <AvScroller avl={av} />

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
