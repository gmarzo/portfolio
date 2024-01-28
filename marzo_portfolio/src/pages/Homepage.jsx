import * as React from "react";
import "../styles/App.css";

import { Helmet, HelmetProvider } from "react-helmet-async";

import AboutPage from "./AboutPage";
import CodingPage from "./CodingPage";
import GamesPage from "./GamesPage";
import ResumePage from "./ResumePage";

const PAGE_ACTIONS = {
  SET_PAGE: "set-page",
};

const initialState = {
  page: "about",
};

const reducer = (state, action) => {
  switch (action.type) {
    case PAGE_ACTIONS.SET_PAGE:
      return { ...state, ...action.payload };
    default:
      alert("Something went wrong");
  }
};

const contentMapping = {
  about: AboutPage,
  games: GamesPage,
  coding: CodingPage,
  resume: ResumePage,
};

const Homepage = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const Content = contentMapping[state.page];

  return (
    <div className="Landing-page">
      <HelmetProvider>
        <Helmet>
          <title>Garrett Marzo</title>
        </Helmet>
        <div className="Banner">
          <h1 className="Banner-title">Hello, World! My name is Garrett.</h1>
          {/* <h2 className="Banner-subtitle">My Name is Garrett</h2> */}
        </div>

        {/* Main Page switchable content */}
        <div className="Showcase">
          <div className="Page-container">
            {Content ? (
              <Content
                mapDispatch={dispatch}
                mapState={state}
                PAGE_ACTIONS={PAGE_ACTIONS}
              />
            ) : (
              <div>Sorry, something went wrong</div>
            )}
          </div>
          {/* Side Navigation Bar */}
          <div className="Nav-container">
            <button className="Page-setter-button">
              <h3
                className="Page-setter"
                onClick={() =>
                  dispatch({
                    type: PAGE_ACTIONS.SET_PAGE,
                    payload: { page: "games" },
                  })
                }

              >
                {"Game Projects"}
              </h3>
            </button>

            <button className="Page-setter-button">
              <h3
                className="Page-setter"
                onClick={() =>
                  dispatch({
                    type: PAGE_ACTIONS.SET_PAGE,
                    payload: { page: "coding" },
                  })
                }
              >
                {" "}
                Coding Projects
              </h3>
            </button>

            <button className="Page-setter-button">
              <h3
                className="Page-setter"
                onClick={() =>
                  dispatch({
                    type: PAGE_ACTIONS.SET_PAGE,
                    payload: { page: "about" },
                  })
                }
              >
                About Me
              </h3>
            </button>

            <button className="Page-setter-button">
              <h3
                className="Page-setter"
                onClick={() =>
                  dispatch({
                    type: PAGE_ACTIONS.SET_PAGE,
                    payload: { page: "resume" },
                  })
                }
              >
                Resume
              </h3>
            </button>
          </div>
        </div>
      </HelmetProvider>
    </div>
  );
};

export default Homepage;
