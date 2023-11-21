import * as React from "react";
import "../App.css";


const Homepage = () => {
  const [clicked, setClicked] = React.useState(false)

  return (
    <div className="Landing-page">
      <div className="Banner">
        <h1 className="Banner-title">Hello World</h1>
        <h2 className="Banner-subtitle">My Name is Garrett</h2>
      </div>

      <div className="Showcase">
        <a href={"games"}>
          <div className="Portal">
            <p className="Portal-title">Game Projects</p>
          </div>
        </a>
        <div className="Portal">
          <p className="Portal-title">Coding Projects</p>
        </div>
        <div className="Portal" onClick={() => setClicked(!clicked)}>
          {clicked ? <p>I've been clicked!</p> : <p>Click me!</p>}
        </div>
        <div className="Portal">
          <p className="Portal-title">About</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
