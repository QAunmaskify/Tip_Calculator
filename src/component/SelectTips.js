import React from "react";

import Button from "./Button";

function SelectTips({ tipPercent, onSelect }) {
  const options = [5, 10, 15, 25, 50];

  // Derived state
  const curSelect = options.indexOf(tipPercent);
  return (
    <>
      <p className="label" style={{ marginBottom: "1.2rem" }}>
        Select Tip %
      </p>
      <section className="tip-options">
        {options.map((option, idx) => (
          <Button
            key={idx}
            bgColor="hsl(183, 100%, 15%)"
            textColor="hsl(189, 41%, 97%)"
            className={idx === curSelect ? "selected" : ""}
            onClick={onSelect}
          >
            <span
              style={{ fontSize: "2.1rem", fontWeight: 700 }}
              className="percent"
            >
              {option}
            </span>
            {/* <span style={{ fontSize: "1.8rem" }}>%</span> */}
          </Button>
        ))}
        {/* <ul>
            <li></li>
          </ul> */}
        <input type="text" placeholder="Custom" />
      </section>
    </>
  );
}

export default SelectTips;
