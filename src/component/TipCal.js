import React from "react";

import Input from "./Input";
import SelectTips from "./SelectTips";
import Display from "./Display";

function TipCalculator() {
  const [bill, setBill] = React.useState("");
  const [tipPercent, setTipPercent] = React.useState(null);
  const [nPersons, setNPersons] = React.useState("");
  const [toggle, setToggle] = React.useState(null);
  const [customTipPercent, setCustomTipPercent] = React.useState("");

  /**Allow or support characters pattern */
  const pattern = /^\d+$|(?=^.{1,}$)^\d+\.\d{0,2}$/g;

  function handleSetBill(evt) {
    let value = evt.target.value;

    if (value === "0") return;
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

  function handleSelectPercent(evt, value) {
    if (value === undefined) setTipPercent(+evt.target?.textContent);
    else if (value !== undefined) setTipPercent(+value);
  }

  function handleInputPersons(evt) {
    setNPersons(evt.target.value);
  }

  function handleReset() {
    setNPersons("");
    setBill("");
    setTipPercent(null);
    setToggle(null);
    setCustomTipPercent("");
  }

  function handleCustomTipPercent(evt) {
    setCustomTipPercent(evt.target.value);
    if (toggle === null) handleSelectPercent(undefined, evt.target.value);
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
        <SelectTips
          tipPercent={tipPercent}
          toggle={toggle}
          setToggle={setToggle}
          customTipPercent={customTipPercent}
          setCustomTipPercent={setCustomTipPercent}
          onSetPercent={handleSelectPercent}
          handleCustomTipPercent={handleCustomTipPercent}
        />
        <Input
          type="number"
          placeholder="0"
          minimum="1"
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
        onReset={handleReset}
        onClick={handleReset}
      />
    </div>
  );
}

export default TipCalculator;
