import Carousel from "react-bootstrap/Carousel";
import React from "react";
import Footer from "../components/footer";
import ClickToChat from "../components/utils/clicktochat";
import ReactNavBar from "../components/reactnavbar";
import { BoatsDatabase } from "../../BoatsDatabase";
import { BarraExploracion } from "./BarraExploracion";

export function BoatDetails({ bote }) {

  if (!bote)
	return <div></div>

  const casco = bote.materialCasco;
  const [prev, next] = BoatsDatabase.findPrevNext(bote);
  //   console.lo g(casco.value);
  return (
    <>
      {/* <NavBarBootstrap></NavBarBootstrap> */}
      <ReactNavBar></ReactNavBar>

      <ClickToChat
        numero="56975633454"
        message="¡Hola! me gustaria consultar por una lancha"
      >
        {" "}
        <img
          alt="Chat on WhatsApp"
          src="/imgs/whatsapp.svg"
          className="iconowsp"
        ></img>
      </ClickToChat>
      <section className="details mt-5">
        <div className="container flex-start">
          <article className="features">
            <BarraExploracion prev={prev} bote={bote} next={next} />
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bote.detailImg1}
                  alt="1"
                  key="1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bote.detailImg2}
                  alt="2"
                  key="2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bote.detailImg3}
                  alt="3"
                  key="3"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bote.detailImg4}
                  alt="4"
                  key="4"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bote.detailImg5}
                  alt="5"
                  key="5"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bote.detailImg6}
                  alt="6"
                  key="6"
                />
              </Carousel.Item>
            </Carousel>
            <div className="pics-holder">
              <div className="pics-slider flex-between" id="pics-slider"></div>
            </div>
            <article className="boat-specific">
              <h3></h3>
              <div style={{ marginBottom: "1.5em" }} className="Specifications">
                <div className="feat">
                  <span className="key">Marca:</span>
                  <span className="value">{bote.marca} </span>
                </div>
                {casco && (
                  <div className="feat">
                    <span className="key">Material Casco:</span>
                    <span className="value">{bote.materialCasco}</span>
                  </div>
                )}

                <div className="feat">
                  <span className="key">Año:</span>
                  <span className="value">{bote.año}</span>
                </div>
                <div className="feat">
                  <span className="key">Motor:</span>
                  <span className="value">{bote.modeloMotor}</span>
                </div>

                {bote.largo && (
                  <div className="feat">
                    <span className="key">Largo:</span>
                    <span className="value">{bote.largo}</span>
                  </div>
                )}

                <div className="feat">
                  <span className="key">Horas De Uso:</span>
                  <span className="value">{bote.Horas}</span>
                </div>
                <div className="feat">
                  <span className="key">Carga Max:</span>
                  <span className="value">{bote.Carga}</span>
                </div>

                <div className="feat">
                  <span className="key">Pasajeros:</span>
                  <span className="value">{bote.pasajeros}</span>
                </div>

                <div className="feat">
                  <span className="key">Tipo de combustible:</span>
                  <span className="value">{bote.tipoDeCombustible}</span>
                </div>
              </div>
              <div className="datails-nav">
                <ul className="nav flex-between">
                  <li className="OverView active">Descripción</li>
                </ul>
              </div>
              <div>
                <div className="mt-4">
                  <p>{bote.descripcion}</p>
                </div>
                <div className="features-click item cambioalineacion">
                  <ul className="features flex-between">
                    <li>{bote.caracteristicas.carac1}</li>
                    <li>{bote.caracteristicas.carac2}</li>
                    <li>{bote.caracteristicas.carac3}</li>
                    <li>{bote.caracteristicas.carac4}</li>
                  </ul>
                </div>
              </div>
            </article>
          </article>
          <article className="seller-info">
            <div className="">
              <h2
                style={{
                  width: "100%",
                  color: "black",
                  textAlign: "center",
                  paddingBottom: ".5em",
                }}
              >
                {bote.tittle}{" "}
              </h2>

              <div className="payment">
                <h3>{bote.value}</h3>
                <p>Pesos Chilenos</p>
              </div>
            </div>
            <div className="seller-data">
              <div className="name flex-between">
                <img src="/imgs/doncarlos.png" alt="Seller" />
                <div className="data">
                  <span className="seller-name">Carlos Calderón</span>
                  <span className="Membership">Dueño NauticaCalderon</span>
                </div>
              </div>
              <div className="number-social">
                <span className="contact">Número de contacto </span>
                <span>
                  <a href="+56975633454" className="number ">
                    +56 9 7563 3454
                  </a>
                </span>
                {/* <div className="social">
                  <a href="#">
                    {" "}
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa-brands fa-instagram" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="contact-seller">
              <h3>Mensaje al vendedor</h3>
              <form action="#">
                <input
                  type="text"
                  name="name"
                  id="client-name"
                  placeholder="Nombre"
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  rows={10}
                  placeholder="Deja Tu Mensaje"
                  required
                  defaultValue={""}
                />
                <input
                  type="submit"
                  defaultValue="Send Message Now"
                  id="send-message"
                />
              </form>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default BoatDetails;
