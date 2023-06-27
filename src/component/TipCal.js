import React from "react";

import Input from "./Input";
import SelectTips from "./SelectTips";
import Display from "./Display";

function TipCalculator() {
  const [bill, setBill] = React.useState("");
  const [nPersons, setNPersons] = React.useState("");
  const [tipPercent, setTipPercent] = React.useState(null);

  /**Allow or support characters pattern */
  const pattern = /^\d+$|(?=^.{1,}$)^\d+\.\d{0,2}$/g;

  function handleSetBill(evt) {
    let value = evt.target.value;
    // Remove ',' in the formatted string
    value = value?.replace(/,/g, "");

    const isMatch = pattern.test(value);
    let format;

    if (isMatch || value.length === 0) {
      /**Format bill field with , */
      format = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setBill(format);
    }
  }

  function handleSelect(evt) {
    const selectedValue = +evt.target.textContent;
    setTipPercent(selectedValue);
  }

  function handleInputPersons(evt) {
    const value = +evt.target.value;
    if (isFinite(value)) setNPersons(value);
  }

  function handleReset() {
    setNPersons("");
    setBill("");
    setTipPercent(null);
  }

  return (
    <div className="tip">
      <div className="inputs">
        <Input
          type="text"
          inputMode="numeric"
          placeholder="0"
          emoji="icon-dollar.svg"
          value={bill}
          onChange={handleSetBill}
        >
          Bill
        </Input>
        <SelectTips tipPercent={tipPercent} onSelect={handleSelect} />
        <Input
          type="number"
          placeholder="0"
          minimum="0"
          emoji="icon-person.svg"
          className="danger"
          nPersons={nPersons}
          value={nPersons}
          onChange={handleInputPersons}
          errorMessage="Can't be zero"
        >
          Number of people
        </Input>
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
