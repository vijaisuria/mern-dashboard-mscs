import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="padding_4x">
        <div className="top_footer flex">
          <section className="flex_content">
            <figure>
              <img
                src="https://pbs.twimg.com/profile_images/1565985672501927936/d-r-h241_400x400.jpg"
                alt=""
                loading="lazy"
                style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              />
            </figure>
          </section>
          <section className="flex_content padding_2x">
            <h2 className="title medium">
              Message from honourable Prime Minister
            </h2>
            <p>
              "Union Cabinet on Wednesday approved the setting up of three
              national level multi-state cooperative societies under Multi State
              Cooperative Societies (MSCS) Act, 2002. Chaired by Prime Minister
              Narendra Modi, the Cabinet approved setting up and promoting a
              national level multi-state cooperative export society under the
              Multi State Cooperative Societies (MSCS) Act, 2002 with support
              from relevant Ministries especially Ministry of External Affairs
              and Department of Commerce, Ministry of Commerce and Industry
              through their export related policies, schemes and agencies by
              following the 'Whole of Government Approach' for undertaking
              exports of all goods and services produced by cooperatives and
              related entities"
            </p>
          </section>
        </div>
        <div className="footer_body flex">
          <section className="flex_content padding_1x">
            <figure className="logo fixed_flex">
              <img src="https://mscs.dac.gov.in/images/MSCS_LOGO.png" alt="" />
              <figcaption>
                <strong className="title">MSCS</strong> Digital India
              </figcaption>
            </figure>
            <a href="#">
              <i className="fa fa-map-marker"></i>
              Ministry of Cooperation, Floor-I, Atal Akshay Urja Bhawan, Lodhi
              Road, CGO Complex, New Delhi PIN 110 003 (Landmark : Jawaharlal
              Nehru Statdium)
            </a>
            <a href="mailto:info@mscs.com">
              <i className="fa fa-envelope-o"></i>
              info@mscs.gov.in
            </a>
            <a href="tel:9999999999">
              <i className="fa fa-headphones"></i>
              9999999999
            </a>
          </section>
          <section className="flex_content padding_1x">
            <h3>Quick Links</h3>
            <a href="#">Circulars</a>
            <a href="#">State Registars</a>
            <a href="#">Grievence</a>
            <a href="#">Staff registration</a>
          </section>
          <section className="flex_content padding_1x">
            <h3>Other Links</h3>
            <a href="#">About us</a>
            <a href="#">contact us</a>
            <a href="#">Ammendments</a>
            <a href="#">Notices</a>
          </section>
          <section className="flex_content padding_1x">
            <h3>Newsletter</h3>
            <p>
              You can trust us. we only send important notifications related to
              our organization.
            </p>
            <fieldset className="fixed_flex">
              <input
                type="email"
                name="newsletter"
                placeholder="Your Email Address"
              />
              <button className="btn btn_2">Subscribe</button>
            </fieldset>
          </section>
        </div>
        <div className="flex">
          <section className="flex-content padding_1x">
            <p>Copyright ©2023 All rights reserved </p>
            <p>Designed and Developed by Vijai Suria, MIT</p>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
