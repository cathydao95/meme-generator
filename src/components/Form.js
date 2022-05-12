import { useState } from "react";
import memesData from "../memesData";

function Form(props) {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  //   const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
  }
  return (
    <main>
      <div className="form-container">
        <input className="input-1" type="text" />
        <input className="input-2" type="text" />
        <button onClick={getMemeImage} className="btn-get">
          Get a new meme image
        </button>
      </div>
      <img src={meme.randomImage} className="meme-img" />
    </main>
  );
}

export default Form;
