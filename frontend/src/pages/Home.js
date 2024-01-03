import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <header className="flex">
        <article>
          <h1 className="title big">
            Welcome to <em>MSCS</em> <br />
            Ministry of Cooperation, Govt. of India
          </h1>
          <p>Multi State Cooperative Societies ACT, 2002</p>
          <a href="#" className="btn btn_3">
            Explore more
          </a>
        </article>
        <section className="flex">
          <aside className="padding_1x">
            <h2 className="sub_title">Statistics</h2>
            <p>
              "Statistics are the triumph of the quantitative method, and the
              quantitative method is the victory of sterility."
            </p>
            <a href="/statistics">
              <i className="fa fa-angle-right"></i>
            </a>
          </aside>
          <aside className="padding_1x">
            <h2 className="sub_title">Forms</h2>
            <p>
              Go paperless and streamline your processes with our user-friendly
              eForms
            </p>
            <a href="#">
              <i className="fa fa-angle-right"></i>
            </a>
          </aside>
          <aside className="padding_1x">
            <h2 className="sub_title">About</h2>
            <p>Multi State Cooperative Societies ACT, 2002</p>
            <a href="#about">
              <i className="fa fa-angle-right"></i>
            </a>
          </aside>
        </section>
      </header>

      <main>
        <div className="divisions division_2 flex">
          <section className="flex_content padding_2x">
            <div className="title_header">
              <h2 className="title medium">Notifications</h2>
              <p>Latest News/ Events</p>
              <span className="bar_blue"></span>
            </div>
            <marquee direction="up" id="notification">
              <a href="#" className="flex fixed_flex">
                <figure>
                  <img
                    src="https://mscs.dac.gov.in/images/MSCS_LOGO.png"
                    width="80"
                    height="80"
                    alt=""
                    loading="lazy"
                  />
                </figure>
                <article>
                  <h3 className="title mb-3">
                    Home Multi State Cooperative Housing Society Ltd
                  </h3>
                  <p>
                    Shree Ninaidevi Multi Specialty Cooperative Hospital and
                    Research Center Ltd.,MAHARASHTRA
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      <i className="fa fa-calendar"></i>
                      12-08-2023
                    </span>
                    <span>
                      <i className="fa fa-clock-o"></i>
                      20:38 pm
                    </span>
                  </aside>
                </article>
              </a>
              <a href="#" className="flex fixed_flex">
                <figure>
                  <img
                    src="https://mscs.dac.gov.in/images/MSCS_LOGO.png"
                    width="80"
                    height="80"
                    alt=""
                    loading="lazy"
                  />
                </figure>
                <article>
                  <h3 className="title mb-3">
                    Lilliovi simple & cool web designing root way{" "}
                  </h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration...
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      <i className="fa fa-calendar"></i>
                      12-08-2023
                    </span>
                    <span>
                      <i className="fa fa-clock-o"></i>
                      20:38 pm
                    </span>
                  </aside>
                </article>
              </a>
              <a href="#" className="flex fixed_flex">
                <figure>
                  <img
                    src="https://mscs.dac.gov.in/images/MSCS_LOGO.png"
                    width="50"
                    height="50"
                    alt=""
                    loading="lazy"
                  />
                </figure>
                <article>
                  <h3 className="title mb-3">
                    Mahesh Multi State Cooperative Credit Society
                    Ltd.,MAHARASHTRA
                  </h3>
                  <p>
                    Shree Ninaidevi Multi Specialty Cooperative Hospital and
                    Research Center Ltd.,MAHARASHTRA
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      <i className="fa fa-calendar"></i>
                      12-08-2023
                    </span>
                    <span>
                      <i className="fa fa-clock-o"></i>
                      20:38 pm
                    </span>
                  </aside>
                </article>
              </a>
              <a href="#" className="flex fixed_flex">
                <figure>
                  <img
                    src="https://mscs.dac.gov.in/images/MSCS_LOGO.png"
                    alt=""
                    loading="lazy"
                  />
                </figure>
                <article>
                  <h3 className="title mb-3">
                    Heaven Multi State Agro Cooperative Society Ltd,UTTAR
                    PRADESH
                  </h3>
                  <p>
                    Tamil Nadu Multi State Societies Cooperative Housing
                    Federation Ltd.,TAMIL NADU
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      <i className="fa fa-calendar"></i>
                      12-08-2023
                    </span>
                    <span>
                      <i className="fa fa-clock-o"></i>
                      20:38 pm
                    </span>
                  </aside>
                </article>
              </a>
            </marquee>
          </section>
          <section className="flex_content padding_2x" id="event">
            <div className="title_header">
              <h2 className="title medium">Events</h2>
              <p>
                Lotus Agricultural and Marketing Cooperative Society Ltd.,
                Pitampura, New Delhi: Order Sheet of Hearing held on 04.02.2022
              </p>
              <span className="bar_white"></span>
              <ul className="logo-slider event-slider">
                <li>
                  <h3 className="title small">
                    Liquidation order 31-01-2023 Rubi credit cooperative society
                    Ltd Ajmer Rajasthan
                  </h3>
                  <p>
                    New Address of Office of Central Registrar of Cooperative
                    Societies (CRCS) : Ministry of Cooperation, Floor-I, Atal
                    Akshay Urja Bhawan, Lodhi Road, CGO Complex, New Delhi PIN
                    110 003
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      25<sub>day</sub>
                    </span>
                    <span>
                      11<sub>hrs</sub>
                    </span>
                    <span>
                      30<sub>min</sub>
                    </span>
                    <span>
                      03<sub>sec</sub>
                    </span>
                  </aside>
                  <a href="#" className="btn btn_2">
                    Event details
                  </a>
                </li>
                <li>
                  <h3 className="title small">
                    Notification : Arth Credit Cooperative Society Ltd, Jodhpur,
                    Rajasthan: Notice issued to initiate winding up process of
                    the Society
                  </h3>
                  <p>
                    Heaven Multi State Agro Cooperative Society Ltd,UTTAR
                    PRADESH
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      25<sub>day</sub>
                    </span>
                    <span>
                      11<sub>hrs</sub>
                    </span>
                    <span>
                      30<sub>min</sub>
                    </span>
                    <span>
                      03<sub>sec</sub>
                    </span>
                  </aside>
                  <a href="#" className="btn btn_2">
                    Event details
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://static.mygov.in/media/transformingindia/2021/07/1800X500-1-1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://delhiesamiksha.delhi.gov.in/Images/harghartiranga.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.meity.gov.in/writereaddata/files/banner/AKAM_Banner.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="divisions division_4" id="about">
          <div className="title_header">
            <h2 className="title medium">
              Multi State Cooperative Societies ACT, 2002
            </h2>
            <p>
              An Act to consolidate and amend the law relating to co-operative
              societies, with objects not confined to one State and serving the
              interests of members in more than one State, to facilitate the
              voluntary formation and democratic functioning of co-operatives as
              people's institutions based on self-help and mutual aid and to
              enable them to promote their economic and social betterment and to
              provide functional autonomy ,was being felt necessary by the
              various cooperative societies, and federation of various
              cooperative societies as well as by the Government. In order to
              achieve the objective The Multi State Cooperative Societies Bill
              was introduced in the Parliament.The bill having been passed by
              both the Houses of Parliament received the assent of the President
              on 3rd July 2002 and it came on the Statute Book as The Multi
              State Cooperative Societies ACT 2002 (39 of 2002).
            </p>
          </div>
          <div className="cards">
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
            <section className="fixed_flex">
              <figure className="flex_content">
                <img
                  src="https://swaritadvisors.com/learning/wp-content/uploads/2020/09/Characteristics-of-Multi-State-Co-operative-Society-Registration.png"
                  alt=""
                  loading="lazy"
                  style={{ objectFit: "contain" }}
                />
              </figure>
            </section>
          </div>
        </div>
      </main>

      <div className="overlay"></div>
      <div className="cursor"></div>
    </>
  );
};

export default Home;
