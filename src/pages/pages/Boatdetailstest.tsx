import React from "react";
export function BoatDetails(bote) {
  return (
    <div style={{ height: "2000px", backgroundColor: "orange" }}>
      {Array.from(Array(49).keys()).map((i) => (
        <p>{i}</p>
      ))}
    </div>
  );
}
export default BoatDetails;
