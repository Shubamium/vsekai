import "./home.scss";
import Talent from "./home/talentSection/TalentSection";
export default function Home() {
  return (
    <div id={"page_home"}>
      <section id="hero">
        <div className="confine">
          <article>
            <div className="sub">
              <h2 className="sh t-rb">Secondary Tagline Here,</h2>
              <div className="rb-line"></div>
            </div>
            <h2 className="h mh t-gw">Write The main Tagline Here!</h2>

            <div className="action">
              <button className="btn btn-rb">CTA Button</button>
              <button className="btn btn-ol"> Secondary </button>
              <div className="jaw">
                <div className="j a"></div>
                <div className="j b"></div>
                <div className="j c"></div>
              </div>
            </div>
          </article>
          <div className="video-container backglow">
            <img src="/de/video-l.png" alt="" className="decor-l" />
            <img src="/de/video-r.png" alt="" className="decor-r" />
            <video
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              playsInline
              autoPlay
              muted
              controls
              className="video-center"
            ></video>
          </div>
        </div>
      </section>
      <section id="main-about">
        <img src="/de/claw-l.png" alt="" className="claw l" />
        <img src="/de/claw-r.png" alt="" className="claw r" />
        <div className="confine">
          <article>
            <div className="div">
              <h2 className="sh t-rb ">Secondary tagline here.</h2>
            </div>
            <h2 className="h"> Section Title Here</h2>

            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum do
            </p>
          </article>
          <figure>
            <img src="/gfx/icon.png" alt="" />
          </figure>
        </div>
      </section>

      <Talent />
    </div>
  );
}
