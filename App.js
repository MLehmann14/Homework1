import { useEffect, useState } from "react";
import "./styles.css";
import Title from "./Title.js";
import Entry from "./Entry.js";
import Info from "./Info.js";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!name) return;
    const coin = encodeURIComponent(name.toLowerCase());
    const url = `https://api.coincap.io/v2/assets/${coin}/`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          setData(null);
          return;
        }
        return response.json();
      })
      .then((data) => setData(data.data))
      .catch(() => setData(null));
  }, [name]);

  return (
    <div className="App">
      <Title text="Cryptocurrency Prices" />
      <Entry action={setName} />
      <Info name={name} data={data} />
      <img
        id="gif"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTY2YW5nazRmbWo3MWIzb2Qycnd3Zjc4MjN3cWwzMWZhYXJ5bHFiOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VPo8BHQviFlFE5Ydcx/giphy.gif" // Example GIF URL
        alt="GIF"
      />
      <img
        id="gif2"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDVjeXFkeWVhNXZkcDIybGYxMzJzdTFwNDE3azNuZWFkbXlzN3BvayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o84U72tKO389H2lI4/giphy.gif"
      />
    </div>
  );
}
