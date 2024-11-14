import React from "react";
export default function Services() {
  return (
    <section className="premium">
      <article className="holder flex-between">
        <div className="rental-text">
          <h2>
            Premium Boat
            <br />
            Rental Services
          </h2>
          <img src="/imgs/decore01.png" alt="img" />
          <p>
            Eorem ipsum dolor amet consectetur sed adipisicing elit sed eiusmod
            tempor et dolore magna aliqua minim veniam, quis nostrud
            exercitation aliquip ex ea consequat duis aute irure dolorin.
          </p>
          <a href="#">VIEW MORE</a>
        </div>
        <div className="rental-options">
          <div className="main-holder">
            <div className="options-holder">
              <div className="opt">
                <div className="option-img">
                  <img src="/imgs/offers2.jpg" alt="Option" />
                </div>
                <h3>Water Sports Boat</h3>
                <img src="/imgs/decore01.png" alt="img" />
                <p>
                  Adipisicing eiusmod tempor incidids labore dolore magna aliqa
                  ust enim ad minim veniams quis nostrs sed citation ullam coy
                  laboris nisit.
                </p>
              </div>
              <div className="opt">
                <div className="option-img">
                  <img src="/imgs/offers3.jpg" alt="Option" />
                </div>
                <h3>Corporate Events</h3>
                <img src="/imgs/decore01.png" alt="img" />
                <p>
                  Adipisicing eiusmod tempor incidids labore dolore magna aliqa
                  ust enim ad minim veniams quis nostrs sed citation ullam coy
                  laboris nisit.
                </p>
              </div>
              <div className="opt">
                <div className="option-img">
                  <img src="/imgs/offers4.jpg" alt="Option" />
                </div>
                <h3>Family Gathering</h3>
                <img src="/imgs/decore01.png" alt="img" />
                <p>
                  Adipisicing eiusmod tempor incidids labore dolore magna aliqa
                  ust enim ad minim veniams quis nostrs sed citation ullam coy
                  laboris nisit.
                </p>
              </div>
              <div className="opt">
                <div className="option-img">
                  <img src="/imgs/offers2.jpg" alt="Option" />
                </div>
                <h3>Family Gathering</h3>
                <img src="/imgs/decore01.png" alt="img" />
                <p>
                  Adipisicing eiusmod tempor incidids labore dolore magna aliqa
                  ust enim ad minim veniams quis nostrs sed citation ullam coy
                  laboris nisit.
                </p>
              </div>
            </div>
          </div>
          <button className="arrow right">
            <i className="fa-solid fa-chevron-right" />
          </button>
          <button className="arrow left">
            <i className="fa-solid fa-chevron-left" />
          </button>
        </div>
      </article>
    </section>
  );
}
