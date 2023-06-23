import React from "react";

import InputField from "./InputField";
import SelectTips from "./SelectTips";
import Display from "./Display";

function TipCalculator() {
  const [bill, setBill] = React.useState("");
  const [nPersons, setNPersons] = React.useState("");
  const [tipPercent, setTipPercent] = React.useState(null);

  function handleSelect(evt) {
    const selectedValue = Number(evt.target.textContent);
    setTipPercent(selectedValue);
  }

  function handleInputBill(evt) {
    const value = evt.target.value;
    setBill(value);
  }

  function handleInputPersons(evt) {
    const value = Number(evt.target.value);
    setNPersons(value);
  }

  function handleReset() {
    setNPersons("");
    setBill("");
    setTipPercent(null);
  }

  return (
    <div className="tip">
      <div className="inputs">
        <InputField
          emoji="icon-dollar.svg"
          value={bill}
          onChange={handleInputBill}
        >
          Bill
        </InputField>
        <SelectTips tipPercent={tipPercent} onSelect={handleSelect} />
        <InputField
          emoji="icon-person.svg"
          className="danger"
          nPersons={nPersons}
          value={nPersons}
          onChange={handleInputPersons}
          err="Can't be zero"
        >
          Number of people
        </InputField>
      </div>
      <Display
        percent={tipPercent}
        bill={bill}
        nPersons={nPersons}
        onClick={handleReset}
      />
    </div>
  );
}

export default TipCalculator;
