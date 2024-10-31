import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import { useState } from "react";

function App() {
  const [guesses, setGuesses] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  const [matchingLetters, setMatchingLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);

  return (
    <>
      <div className="app flex flex-col mx-auto mt-4 items-center max-w-[600px] bg-green-400">
        <h1 className="text-5xl text-gray-900 font-bold text-center">Wordle</h1>
        <Grid letters={guesses} />
        <Keyboard setGuesses={setGuesses} guesses={guesses} />
      </div>
    </>
  );
}

export default App;
