import React from "react";
export default function News() {
  return (
    <section className="news" id="news">
      <article className="special-head">
        <h1>Industry News</h1>
        <p>
          Dolore magna aliqua enim ad minim veniam, quis nostrud exercitation
          aliquip duis aute irure dolorin reprehenderits vol dolore fugiat nulla
          pariatur excepteur sint occaecat cupidatat.
        </p>
        <img src="/imgs/decore-blue.png" alt="Img" />
      </article>
      <div className="container">
        <div className="col">
          <div className="pic">
            <img src="/imgs/sailing-on-vacation-EUT5FWG.jpg" alt="img" />
          </div>
          <span className="date">
            June 15, 2020 by <span> Nevica </span>
          </span>
          <div className="data">
            <h2>
              <a href="#">Corporate yacht for smooth running of main events</a>
            </h2>
            <p>
              Aiusmod tempor incididunt labore dolore magna ust enim sed veniams
              quis nostrud.
            </p>
          </div>
          <a href="#" className="more">
            Read More
          </a>
        </div>
        <div className="col">
          <div className="pic">
            <img src="/imgs/326576456534.jpg" alt="img" />
          </div>
          <span className="date">
            June 12, 2020 by <span> Nevica </span>
          </span>
          <div className="data">
            <h2>
              <a href="#">The Best staff members for your service available</a>
            </h2>
            <p>
              Aiusmod tempor incididunt labore dolore magna ust enim sed veniams
              quis nostrud.
            </p>
          </div>
          <a href="#" className="more">
            Read More
          </a>
        </div>
        <div className="col">
          <div className="pic">
            <img src="/imgs/sailing-on-vacation-EUT5FWG34.jpg" alt="img" />
          </div>
          <span className="date">
            June 3, 2020 by <span> Nevica </span>
          </span>
          <div className="data">
            <h2>
              <a href="#">Don’t worry about comfort and company facilities</a>
            </h2>
            <p>
              Aiusmod tempor incididunt labore dolore magna ust enim sed veniams
              quis nostrud.
            </p>
          </div>
          <a href="#" className="more">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
