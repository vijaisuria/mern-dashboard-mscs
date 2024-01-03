import React from "react";
import "../styles/navbar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={process.env.PUBLIC_URL + "/MSCS_LOGO.png"}
              width="100"
              height="100"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/society">
                  Society
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/statistics">
                  Statistics
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Acts
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://mscs.dac.gov.in/Guidelines/GuidelineAct2002.pdf"
                    >
                      MSCS Act, 2002
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://mscs.dac.gov.in/Form/Rules2002.pdf"
                    >
                      MSCS Rules, 2002
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://mscs.dac.gov.in/Form/NatPolicy02.pdf"
                    >
                      National Policy on Cooperative, 2002
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://mscs.dac.gov.in/Form/Model2002.pdf"
                    >
                      Mode Bye-Laws
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Charts
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/yearchart">
                      Yearwise
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/sectorchart">
                      Sectorwise
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/statechart">
                      Statewise
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Forms
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://mscs.dac.gov.in/Form/Form1.pdf"
                    >
                      Forms I
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://mscs.dac.gov.in/Form/Form2.pdf"
                    >
                      Forms II
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://mscs.dac.gov.in/Form/Form3.pdf"
                    >
                      Forms III
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://mscs.dac.gov.in/Form/Form4.pdf"
                    >
                      Forms IV
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://mscs.dac.gov.in/Form/Form5.pdf"
                    >
                      Forms V
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <div id="google_translate_element"></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ height: "150px", width: "100%", padding: "10px" }}></div>
    </>
  );
}

export default NavBar;
