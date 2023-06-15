import React from "react";
import "../css/Cards.css";

export default function Cards() {
  return (
    <>
      <div className="wrapper">
        <h1>Parallax Flipping Cards</h1>
        <div className="cols">
          <div className="col" onTouchStart="this.classList.toggle('hover');">
            <div className="container">
              <div className="front f0">
                <div className="inner">
                  <p>Education</p>
                  <span>Track1</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart="this.classList.toggle('hover');">
            <div className="container">
              <div className="front f1">
                <div className="inner">
                  <p>Finance</p>
                  <span>Track2</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart="this.classList.toggle('hover');">
            <div className="container">
              <div className="front f2">
                <div className="inner">
                  <p>Sustainability </p>
                  <span>Track3</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart="this.classList.toggle('hover');">
            <div className="container">
              <div className="front f3">
                <div className="inner">
                  <p>Tourism</p>
                  <span>Track4</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart="this.classList.toggle('hover');">
            <div className="container">
              <div className="front f4">
                <div className="inner">
                  <p>FoodTech</p>
                  <span>Track5</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart="this.classList.toggle('hover');">
            <div className="container">
              <div className="front f5">
                <div className="inner">
                  <p>Digital Health</p>
                  <span>Track6</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
