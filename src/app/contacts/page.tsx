"use client";
import React, { useState } from "react";
import "./contact.scss";
import { FaDiscord, FaTwitch, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { sendMail } from "@/db/sendmail";
import { LuLoaderCircle } from "react-icons/lu";

type Props = {};

export default function page({}: Props) {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    const res = await sendMail(name, mail, message);
    setLoading(false);
    if (res) {
      alert(
        "Your message has been submitted successfuly! We will try to respond as soon as possible!"
      );
    } else {
      alert("Unfortunately something went wrong, please try again!");
    }
  };
  return (
    <main id="page_contact">
      {loading && (
        <div className="cload">
          <LuLoaderCircle />
        </div>
      )}
      <svg
        width="807"
        height="510"
        viewBox="0 0 807 510"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cll"
      >
        <rect
          opacity="0.42"
          x="0.5"
          y="-0.5"
          width="920"
          height="308"
          rx="154"
          transform="matrix(1 -1.03396e-07 -7.3917e-08 -1 -408 509)"
          stroke="#F75252"
        />
        <rect
          opacity="0.42"
          x="0.5"
          y="-0.5"
          width="920"
          height="246"
          rx="123"
          transform="matrix(1 -1.03396e-07 -7.3917e-08 -1 -276 380)"
          stroke="#A584F3"
        />
        <rect
          opacity="0.42"
          x="0.5"
          y="-0.5"
          width="920"
          height="240"
          rx="120"
          transform="matrix(1 -1.03396e-07 -7.3917e-08 -1 -114 240)"
          stroke="#73D4E7"
        />
      </svg>
      <svg
        width="746"
        height="510"
        viewBox="0 0 746 510"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="clr"
      >
        <rect
          opacity="0.42"
          x="0.5"
          y="0.5"
          width="1088"
          height="308"
          rx="154"
          stroke="#F75252"
        />
        <rect
          opacity="0.42"
          x="156.5"
          y="129.5"
          width="1088"
          height="246"
          rx="123"
          stroke="#A584F3"
        />
        <rect
          opacity="0.42"
          x="348.5"
          y="269.5"
          width="1088"
          height="240"
          rx="120"
          stroke="#73D4E7"
        />
      </svg>

      <div className="confine">
        <section id="contact-h">
          <div className="title">
            <div className="sub">
              <h2 className="sh t-rb">Reach out</h2>
            </div>
            <h2 className="h">CONTACT US</h2>
          </div>
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
              stroke="#D9D9D9"
              strokeWidth="2"
            />
            <path
              d="M97.4706 1H139V29.8394L120.519 56H97.4706V1Z"
              fill="#D9D9D9"
            />
          </svg>
        </section>
        <form
          id="contact-f"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <div className="bg-rainbow"></div>
          <div className="fg">
            <div className="ff">
              <label htmlFor="name">NAME</label>
              <div className="backglow">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name here..."
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
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
                  required
                  value={mail}
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
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
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="r">
              <div className="socials">
                <a
                  href="https://www.youtube.com/@VSekaiEN"
                  target="_blank"
                  className="ico btn btn-icon y"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://x.com/VSekaiEN"
                  target="_blank"
                  className="ico btn btn-icon x"
                >
                  <FaXTwitter />
                </a>
                <div className="ico logo">
                  <img src="/gfx/icon_white.png" alt="" />
                </div>
                <a
                  href="https://discord.gg/XsunFzGj83 
"
                  target="_blank"
                  className="ico btn btn-icon d"
                >
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
                  <path d="M3 3L20 20" stroke="#232323" strokeWidth="6" />
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
