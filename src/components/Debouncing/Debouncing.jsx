import React, { useState, useEffect } from "react";

const DebounceExample = () => {
  const [input, setInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    // Set a timeout to update debouncedValue after 500ms
    const timer = setTimeout(() => {
      setDebouncedValue(input);
    }, 500);

    // Cleanup the timer if input changes or component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Debounce Example</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default DebounceExample;
