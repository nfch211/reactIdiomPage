import { useState, setState, useEffect } from "react";
import Display from "./displayArea";
import "./App.css";

function App() {
  const [Text, setText] = useState("");
  const [textArrary, pushTextArray] = useState([]);
  const [numberOfIdiom, setNumberOfIdiom] = useState(0);

  function handleClick() {
    setNumberOfIdiom(Text);
    console.log(Text);
    setText("");
  }

  function change(event) {
    const { name, value } = event.target;
    setText(value);
  }

  function Delete(id) {
    pushTextArray((pre) => {
      return textArrary.filter((obj, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div className="BUTTON">
        <h1 className="londrina-sketch-regular" style={{ fontSize: "100px" }}>
          Idiom
        </h1>
        <p style={{ color: "#B3E2A7" }}>generate a number of idioms randomly</p>
        <input
          placeholder="input a number here..."
          name="text"
          onChange={change}
          type="text"
          value={Text}
        />
        <button className="btn btn-success" onClick={handleClick}>
          submit
        </button>
      </div>
      <div className="container APP">
        {Array.from({ length: numberOfIdiom }, (_, index) => (
          <Display key={index} ID={index} FUNC={Delete} />
        ))}
      </div>
    </>
  );
}

export default App;
