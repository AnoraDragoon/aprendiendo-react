import { useEffect, useState } from "react";
import "./app.css";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?json=true`;

export function App() {
  const [fact, setFact] = useState();
  const [imageURL, setImageURL] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  useEffect(() => {
    if (!fact) return;

    // const firstWord = fact.split(" ", 1)[0]; // Original tech test
    const firstTreeWord = fact.split(" ", 3).join(" ");
    
    fetch(`https://cataas.com/cat/says/${firstTreeWord}?json=true`)
      .then((res) => res.json())
      .then((data) => {
        console.log(response);
        const { url } = data;
        setImageURL(url);
      });
  }, [fact]);

  return (
    <main>
      <h1>Hello World!!</h1>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt="Cat image not found" />}
    </main>
  );
}
