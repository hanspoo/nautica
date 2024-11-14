import React from "react";
import { Link } from "gatsby";

export const barra: React.CSSProperties = {
  padding: ".75em 1em",
  backgroundColor: "black",
  color: "white",
  display: "flex",
  margin: "0 0 1em",
  alignItems: "center",
  justifyContent: "space-between",
};

export function BarraExploracion({
  prev,
  bote,
  next,
}: {
  prev: Bote;
  bote: any;
  next: Bote;
}) {
  if (!bote)
	return <div></div>

  return (
    <div style={barra}>
      <LinkBotePrev bote={prev} />
      <h3 style={{ position: "relative", top: "+4px" }}>{bote.tittle}</h3>
      <LinkBoteNext bote={next} />
    </div>
  );
}

function LinkBotePrev({ bote }: { bote: Bote }) {
  if (!bote)
    return (
      <div
        style={{
          opacity: 0.4,
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <i
          style={{ fontSize: "24px" }}
          className="fa-solid fa-arrow-left show-icon"
        ></i>
        <small className="nombre-bote-explorador" style={{ marginLeft: "1em" }}>
          Estas al inicio
        </small>
      </div>
    );

  return (
    <Link
      to={`/listadebotes?bote=${bote.id}`}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <i
        style={{ fontSize: "24px" }}
        className="fa-solid fa-arrow-left show-icon"
      ></i>
      <small className="nombre-bote-explorador" style={{ marginLeft: "1em" }}>
        {bote.tittle}
      </small>
    </Link>
  );
}

function LinkBoteNext({ bote }: { bote: Bote }) {
  if (!bote)
    return (
      <div
        style={{
          opacity: 0.4,
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <small
          className="nombre-bote-explorador"
          style={{ marginRight: "1em" }}
        >
          Estas al final
        </small>
        <i
          style={{ fontSize: "24px" }}
          className="fa-solid fa-arrow-right show-icon"
        ></i>
      </div>
    );

  return (
    <Link
      to={`/listadebotes?bote=${bote.id}`}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <small className="nombre-bote-explorador" style={{ marginRight: "1em" }}>
        {bote.tittle}
      </small>
      <i
        style={{ fontSize: "24px" }}
        className="fa-solid fa-arrow-right show-icon"
      ></i>
    </Link>
  );
}
export default BarraExploracion;
