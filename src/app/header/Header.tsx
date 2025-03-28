import Link from "next/link";
import React from "react";
import "./header.scss";
import { fetchData } from "@/db/sanity";
import SetMerchLink from "../SetMerchLink";
import { GiHamburgerMenu } from "react-icons/gi";
type Props = {};

export default async function Header({}: Props) {
  const hd = await fetchData<any>(`
			*[_type == 'general' && preset == 'main']{
				mch,
		}[0]
		`);
  return (
    <header id="header">
      <SetMerchLink l={hd.mch} />
      <div className="vague-cl"></div>
      <div className="vague-cr"></div>
      <svg
        width="129"
        height="127"
        viewBox="0 0 129 127"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="decor_tr l"
      >
        <path d="M129 38L30 127L30 38L129 38Z" fill="#F38845" />
        <path
          d="M13 19L104.784 19L13 101.513L13 19Z"
          stroke="#FAC03D"
          strokeWidth="4"
        />
        <path
          d="M99 -12L3.73908e-06 77L7.62939e-06 -12L99 -12Z"
          fill="#F75252"
        />
      </svg>

      <div className="confine">
        <nav className="nav nav-left main  backglow">
          <img src="/de/nav-arrow.svg" alt="" className="nav-arr" />
          <svg
            width="386"
            height="152"
            viewBox="0 0 386 152"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="decor-slanted"
          >
            <path
              d="M142.176 151.5L1.15112 0.5H68.3147L209.34 151.5H142.176Z"
              stroke="#F75252"
            />
            <path
              d="M232.645 151.5L91.6199 0.5H158.783L299.808 151.5H232.645Z"
              stroke="#67ADFF"
            />
            <path
              d="M317.685 151.5L176.661 0.5H243.824L384.849 151.5H317.685Z"
              stroke="#A584F3"
            />
          </svg>

          <Link href={"/"} className={`btn btn-nav ${true ? "active" : ""}`}>
            HOME
          </Link>
          <Link
            href={"/about"}
            className={`btn btn-nav ${true ? "active" : ""}`}
          >
            ABOUT
          </Link>
          <Link
            href={"/talents"}
            className={`btn btn-nav ${true ? "active" : ""}`}
          >
            TALENTS
          </Link>
        </nav>
        <div className="logo-container">
          <img src="/gfx/logo_white.png" alt="" className="logo" />
          <svg
            width="578"
            height="325"
            viewBox="0 0 578 325"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="decor_neon"
          >
            <path
              opacity="0.48"
              d="M62 64H516V275C516 302.062 494.062 324 467 324H111C83.938 324 62 302.062 62 275V64Z"
              stroke="#B2CC54"
              strokeWidth="2"
            />
            <path
              opacity="0.48"
              d="M1 48H577V246C577 273.062 555.062 295 528 295H50C22.938 295 1 273.062 1 246V48Z"
              stroke="#67ADFF"
              strokeWidth="2"
            />
            <path
              opacity="0.48"
              d="M105 1H461V205C461 232.062 439.062 254 412 254H154C126.938 254 105 232.062 105 205V1Z"
              stroke="#F75252"
              strokeWidth="2"
            />
          </svg>
        </div>
        {/* <button className="btn btn-ol btn-menu">
          <GiHamburgerMenu />
        </button> */}
        <nav className="nav nav-right  main backglow">
          <svg
            width="386"
            height="152"
            viewBox="0 0 386 152"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="decor-slanted right"
          >
            <path
              d="M142.176 151.5L1.15112 0.5H68.3147L209.34 151.5H142.176Z"
              stroke="#F75252"
            />
            <path
              d="M232.645 151.5L91.6199 0.5H158.783L299.808 151.5H232.645Z"
              stroke="#67ADFF"
            />
            <path
              d="M317.685 151.5L176.661 0.5H243.824L384.849 151.5H317.685Z"
              stroke="#A584F3"
            />
          </svg>
          <Link
            href={"/achievements"}
            className={`btn btn-nav ${true ? "active" : ""}`}
          >
            ACHIEVEMENTS
          </Link>
          <Link href={hd.mch} className={`btn btn-nav ${true ? "active" : ""}`}>
            MERCHANDISE
          </Link>
          <Link
            href={"/contacts"}
            className={`btn btn-nav ${true ? "active" : ""}`}
          >
            CONTACT US
          </Link>
          <img src="/de/nav-arrow.svg" alt="" className="nav-arr right" />
        </nav>

        <nav className="nav nav-full   backglow">
          <Link href={"/"} className={`btn btn-nav ${true ? "active" : ""}`}>
            HOME
          </Link>
          <Link
            href={"/about"}
            className={`btn btn-nav ${true ? "active" : ""}`}
          >
            ABOUT
          </Link>
          <Link
            href={"/talents"}
            className={`btn btn-nav ${true ? "active" : ""}`}
          >
            TALENTS
          </Link>
          <svg
            width="386"
            height="152"
            viewBox="0 0 386 152"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="decor-slanted right"
          >
            <path
              d="M142.176 151.5L1.15112 0.5H68.3147L209.34 151.5H142.176Z"
              stroke="#F75252"
            />
            <path
              d="M232.645 151.5L91.6199 0.5H158.783L299.808 151.5H232.645Z"
              stroke="#67ADFF"
            />
            <path
              d="M317.685 151.5L176.661 0.5H243.824L384.849 151.5H317.685Z"
              stroke="#A584F3"
            />
          </svg>
          <Link
            href={"/achievements"}
            className={`btn btn-nav ${true ? "active" : ""}`}
          >
            ACHIEVEMENTS
          </Link>
          <Link href={hd.mch} className={`btn btn-nav ${true ? "active" : ""}`}>
            MERCHANDISE
          </Link>
          <Link
            href={"/contacts"}
            className={`btn btn-nav ${true ? "active" : ""}`}
          >
            CONTACT US
          </Link>
          <img src="/de/nav-arrow.svg" alt="" className="nav-arr right" />
        </nav>
      </div>
      <svg
        width="127"
        height="124"
        viewBox="0 0 127 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="decor_tr r"
      >
        <path d="M0 41L91 124L91 41L0 41Z" fill="#67ADFF" />
        <path d="M21 21L112 104L112 21L21 21Z" fill="#73D4E7" />
        <path
          d="M125 2L41.1606 2L125 78.4689L125 2Z"
          stroke="#A584F3"
          strokeWidth="4"
        />
      </svg>
    </header>
  );
}
