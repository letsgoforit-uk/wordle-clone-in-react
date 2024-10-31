import Letter from "./Letter";

const Grid = ({ letters }) => {
  const rowNumbers = [0, 1, 2, 3, 4, 5, 6];
  console.log(letters);

  return (
    <>
      <div className="wordgrid w-24 m-4 bg-blue-500">
        {rowNumbers.map((row) => (
          <div className="letter-row" key={row}>
            <Letter value={letters[row][0]} />
            <Letter value={letters[row][1]} />
            <Letter value={letters[row][2]} />
            <Letter value={letters[row][3]} />
            <Letter value={letters[row][4]} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
