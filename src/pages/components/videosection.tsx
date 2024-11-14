import React from "react";
export default function VideoSection() {
  return (
    <section className="plan-tour">
      <div className="container flex-between">
        <article className="text-us">
          <img src="/imgs/decore01.png" alt="Img" />
          <span>
            Give us a call or drop an email, We endeavor to answer within 24
            hours
          </span>
          <h3>
            We’ve Exclusive Boats With Charter Offers
            <br />
            <span className="bold-head">
              LET’S PLAN YOUR NEXT <span className="lux">Luxury</span> TOUR!
            </span>
          </h3>
          <div className="phone">
            <i className="fa-solid fa-phone" />
            <span>
              Call Us Today: <a href="tel:+1 755 302 8549">1 755 302 8549</a>
            </span>
          </div>
          <div className="e-mail">
            <i className="fa-solid fa-envelope" />
            <span>
              E-mail:
              <a href="mailto:support@my-domain.com">support@my-domain.com</a>
            </span>
          </div>
        </article>
        <div className="play">
          <button className="play-video flex-center" id="play-video">
            <i className="fa-solid fa-play" />
          </button>
        </div>
      </div>
      <div className="popup" id="popup">
        <div className="main-holder">
          <p className="close" id="closePop">
            X
          </p>
          <div className="video-holder">
            <iframe
              src="https://www.youtube.com/embed/FZaoZEUVRFI"
              title="TOUR INSANE 350ft Luxury YACHT designed by 1.61 London - A mansion on the water"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
      <div className="styling top" />
    </section>
  );
}
