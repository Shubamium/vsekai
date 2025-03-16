import "./about.scss";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main id="page_about">
      <section id="about-main">
        <div className="confine">
          <article className="a-h">
            <div className="title">
              <div className="sub">
                <h2 className="sh t-rb">Subtitle here</h2>
              </div>
              <h2 className="h">ABOUT</h2>
            </div>
            <div className="desc">
              <p className="p">
                <b>VSEKAI </b>
                is a US-based VTuber agency made <br />
                <span className="red">BY VTubers,</span>
                <span className="purp">FOR VTubers</span>
                and fans alike!
              </p>
            </div>
          </article>

          <figure className="a-d">
            <div className="l">
              <img src="/bg/bg-art.png" alt="" />
            </div>
            <div className="c">
              <div className="t">
                <img src="/gfx/logo_dark.png" alt="" className="logo" />
              </div>
              <div className="b">
                <img src="/bg/bg-art.png" alt="" className="l-img" />
                <img src="/bg/bg-art.png" alt="" className="r-img" />
              </div>
            </div>
            <div className="r">
              <img src="/bg/bg-art.png" alt="" className="" />
            </div>
          </figure>
          <div className="a-f">
            <p className="p">
              <b>Our mission is simple but powerful: </b>to prioritize 100%
              creative freedom for our talents, empowering them to be their true
              selves and shine in their own unique ways.
            </p>
            <div className="decor">
              <svg
                width="127"
                height="127"
                viewBox="0 0 127 127"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M126 1.00002L126 75.7068L45.5465 1.00001L126 1.00002Z"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M99 22L99 96.7068L18.5465 22L99 22Z"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M83 50L83 124.707L2.54654 50L83 50Z"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="vm">
        <div className="confine">
          <figure>
            <img src="/bg/bg-art.png" alt="" className="display" />
          </figure>
          <article>
            <p className="p">
              Our vision extends <b>beyond just being an agency</b>—we want to
              shape the future of the VTubing industry by setting new standards
              of creativity, care, empowerment, and freedom.
            </p>
            <p className="p">
              With every step, we aim to build a{" "}
              <u>positive, welcoming community</u>
              where every VTuber and their fanbase feels supported, valued, and
              ready to achieve greatness.
            </p>
          </article>
        </div>
      </section>
      <section className="vm alt">
        <div className="confine">
          <article>
            <p className="p">
              Our vision extends <b>beyond just being an agency</b>—we want to
              shape the future of the VTubing industry by setting new standards
              of creativity, care, empowerment, and freedom.
            </p>
            <p className="p">
              With every step, we aim to build a{" "}
              <u>positive, welcoming community</u>
              where every VTuber and their fanbase feels supported, valued, and
              ready to achieve greatness.
            </p>
          </article>
          <figure>
            <img src="/bg/bg-art.png" alt="" className="display" />
          </figure>
        </div>
      </section>

      <section id="nurture">
        <div className="confine">
          <img src="/gfx/icon_dark.png" alt="" />
          <p>
            At <b>VSekai,</b> we believe in nurturing the talents we work with,
            giving them the space they need to thrive, while ensuring they can
            focus on what they love and do best while giving them opportunities
            like never before!
          </p>
        </div>
      </section>
    </main>
  );
}
