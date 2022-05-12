import memesData from "../memesData";

function Form(props) {
  function getMeme() {
    const retrievedMeme = memesData.data.memes;
    const randNum = Math.floor(Math.random() * retrievedMeme.length);
    const url = retrievedMeme[randNum].url;
    console.log(url);
  }
  return (
    <main>
      <div className="form-container">
        <input className="input-1" type="text" />
        <input className="input-2" type="text" />
        <button onClick={getMeme} className="btn-get">
          Get a new meme image
        </button>
      </div>
    </main>
  );
}

export default Form;
