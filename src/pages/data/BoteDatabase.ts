import botes from "./boats.json";

function find(id: string) {
  const bote = botes.find((b) => b.id === id);

  return bote;
}

export default find;
