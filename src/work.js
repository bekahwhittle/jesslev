import React from "react";
// import logo from './logo.svg';
import "./styles/main.css";

function Work() {
  return (
    <div className="container work">
      <div className="wrapper work">
        <main className="main-content">
          <div className="svg-yellow-squiggle">
            <img src="./assets/svg/yellow-line-squiggle.svg" alt="" />
          </div>
          <div className="svg-half-full-circle">
            <img src="./assets/svg/half-full-circle.svg" alt="" />
          </div>

          <div className="content-container">
            {/* <!-- WORK PAGE --> */}
            <div id="work-page" className="work-page content visible">
              <div className="portfolio-row">
                <div className="portfolio-content image-content">
                  <img
                    src={process.env.PUBLIC_URL + "/portfolio/autumn-girl.png"}
                  />
                </div>
                <div className="portfolio-content image-content">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/portfolio/japanese-circle.png"
                    }
                  />
                </div>
              </div>
              <div className="portfolio-row">
                <div className="portfolio-content image-content">
                  <img
                    src={process.env.PUBLIC_URL + "/portfolio/lobster.png"}
                  />
                </div>
                <div className="portfolio-content image-content">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/portfolio/mechanical-bully.png"
                    }
                  />
                </div>
              </div>
              <div className="portfolio-row">
                <div className="portfolio-content image-content">
                  <img
                    src={process.env.PUBLIC_URL + "/portfolio/multi-girls.png"}
                  />
                </div>
                <div className="portfolio-content image-content">
                  <img
                    src={
                      process.env.PUBLIC_URL + "portfolio/shrimp-cocktail.png"
                    }
                  />
                </div>
              </div>
              <div className="portfolio-row">
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/texan.png"} />
                </div>
                <div className="portfolio-content image-content">
                  <img
                    src={process.env.PUBLIC_URL + "portfolio/women-print.png"}
                  />
                </div>
              </div>
              <div className="portfolio-row">
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_01.png"} />
                </div>
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_02.png"} />
                </div>
              </div>
              <div className="portfolio-row">
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_03.png"} />
                </div>
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_04.png"} />
                </div>
              </div>
              <div className="portfolio-row">
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_05.png"} />
                </div>
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_06.png"} />
                </div>
              </div>
              <div className="portfolio-row">
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_07.png"} />
                </div>
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_08.png"} />
                </div>
              </div>
              <div className="portfolio-row">
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_09.png"} />
                </div>
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_10.png"} />
                </div>
              </div>
              <div className="portfolio-row">
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_11.png"} />
                </div>
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_12.png"} />
                </div>
              </div>
              <div className="portfolio-row">
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_13.png"} />
                </div>
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_14.png"} />
                </div>
              </div>
              <div className="portfolio-row">
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_15.png"} />
                </div>
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_16.png"} />
                </div>
              </div>
              <div className="portfolio-row">
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_17.png"} />
                </div>
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_18.png"} />
                </div>
              </div>
              <div className="portfolio-row">
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_19.png"} />
                </div>
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_20.png"} />
                </div>
              </div>
              <div className="portfolio-row">
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_21.png"} />
                </div>
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_22.png"} />
                </div>
              </div>
              <div className="portfolio-row">
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_23.png"} />
                </div>
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_24.png"} />
                </div>
              </div>
              <div className="portfolio-row">
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_25.png"} />
                </div>
                <div className="portfolio-content image-content">
                  <img src={process.env.PUBLIC_URL + "portfolio/jl_26.png"} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Work;
