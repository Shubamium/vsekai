import React from "react";
import "./contact.scss";
import { FaDiscord, FaTwitch, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Props = {};

export default function page({}: Props) {
  return (
    <main id="page_contact">
      <div className="confine">
        <section id="contact-h">
          <div className="title">
            <div className="sub">
              <h2 className="sh t-rb">Subtitle Here</h2>
            </div>
            <h2 className="h">CONTACT US</h2>
          </div>
          <div className="jaw">
            <div className="j"></div>
            <div className="j"></div>
            <div className="j"></div>
          </div>
        </section>
        <form id="contact-f">
          <div className="fg">
            <div className="ff">
              <label htmlFor="name">NAME</label>
              <div className="backglow">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name here..."
                />
              </div>
            </div>
            <div className="ff">
              <label htmlFor="email">EMAIL</label>
              <div className="backglow">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your.email@mail.com"
                />
              </div>
            </div>
          </div>
          <div className="contact-m">
            <div className="l">
              <div className="ff">
                <label htmlFor="messages">MESSAGE</label>
                <div className="backglow">
                  <textarea
                    name="messages"
                    id="messages"
                    placeholder="Write your message here..."
                    className="backglow"
                  />
                </div>
              </div>
            </div>
            <div className="r">
              <div className="socials">
                <a href="#" className="ico btn btn-icon y">
                  <FaYoutube />
                </a>
                <a href="#" className="ico btn btn-icon x">
                  <FaXTwitter />
                </a>
                <div className="ico logo">
                  <img src="/gfx/icon_white.png" alt="" />
                </div>
                <a href="#" className="ico btn btn-icon d">
                  <FaDiscord />
                </a>
              </div>
              <button className="btn btn-send" type="submit">
                <p>SEND</p>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 3L20 20" stroke="#232323" stroke-width="6" />
                  <path d="M34.8372 0V34.5H2.5L34.8372 0Z" fill="#232323" />
                </svg>
              </button>
            </div>
          </div>
        </form>
        <div id="contact-ft">
          <div className="l">
            <div className="j"></div>
            <p>
              For business inquiries, we kindly ask that you contact us via
              Twitter! Thank you!
            </p>
          </div>
          <div className="r">
            <svg
              width="275"
              height="55"
              viewBox="0 0 275 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M242.5 -0.000244141H275V54.9998H231L242.5 -0.000244141Z"
                fill="#F75252"
              />
              <path
                d="M188.402 -0.000244141H232L220 54.9998H200.25L188.402 -0.000244141Z"
                fill="#67ADFF"
              />
              <path
                d="M154.5 -0.000244141H176L188.5 54.9998H130.848L154.5 -0.000244141Z"
                fill="#A584F3"
              />
              <path
                d="M0.855771 54.4998L31.2921 0.499756H139.736L116.173 54.4998H0.855771Z"
                stroke="#B2CC54"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
