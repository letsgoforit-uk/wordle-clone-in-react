import { useState } from "react";

const Keyboard = ({ setGuesses, guesses }) => {
  const [letterCount, setLetterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const keyboardLetters = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const updateLetters = (item, operation, letterIndex, increment) => {
    if (
      (letterCount >= 1 && operation === "delete") ||
      (letterCount < 5 && letterCount >= 0 && operation === "add")
    ) {
      setGuesses((prevState) => {
        const newState = [...prevState];
        newState[wordCount] = [...prevState[wordCount]];
        newState[wordCount][letterCount + letterIndex] = item;
        return newState;
      });
      setLetterCount((prevState) => {
        const newState = prevState + increment;
        return newState;
      });
    }
  };

  const enterWord = () => {
    // process word after checking if full word has been entered
    setLetterCount(0);
    setWordCount((prevState) => {
      const newState = prevState + 1;
      return newState;
    });
  };

  return (
    <>
      <div className="keyboard m-4 bg-red-300">
        {keyboardLetters.map((items, rowIndex) => (
          <div className="letterRow" key={rowIndex}>
            {/* show enter button at start of third row of letters */}
            {rowIndex == 2 ? (
              <button onClick={() => enterWord()}>Enter</button>
            ) : (
              ""
            )}
            {items.map((item, index) => (
              <button
                key={index}
                className="p-4"
                onClick={() => updateLetters(item, "add", 0, 1)}
              >
                {item}
              </button>
            ))}

            {/* show delete button at end of third row of letters */}
            {rowIndex == 2 ? (
              <button onClick={() => updateLetters("", "delete", -1, -1)}>
                Del
              </button>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default Keyboard;
