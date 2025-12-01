import { useState } from "react";

const ChipsInput = () => {
  const [chips, setChips] = useState([]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = input.trim() || e.target.value.trim();
      if (value && !chips.includes(value)) {
        setChips([...chips, value]);
      } else {
        setInput("");
      }
    }
  };

  const removeChip = (chip) => {
    setChips(chips.filter((c) => c !== chip));
  };

  return (
    <>
      <div className="container" id="container">
        <h2> Chips Input Container</h2>
        <input
          type="text"
          placeholder="Enter chips here..."
          className="chips-text"
          id="text"
          onKeyDown={handleKeyDown}
        />
      </div>
      {chips.map((chip) => (
        <span key={chip}>
          {chip}
          <button onClick={() => removeChip(chip)}>×</button>
        </span>
      ))}
    </>
  );
};

export default ChipsInput;
