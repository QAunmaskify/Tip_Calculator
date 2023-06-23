function App() {
  return (
    <div className="app">
      <h3 className="header">
        <span>SPLI</span>
        <span>TTER</span>
      </h3>
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  return (
    <div className="tip">
      <div className="inputs">
        <InputField emoji="icon-dollar.svg">Bill</InputField>
        <SelectTips />
        <InputField emoji="icon-person.svg">Number of people</InputField>
      </div>
      <Display />
    </div>
  );
}

function Display() {
  return (
    <div className="display">
      <ul className="results">
        <li>
          <p className="result-label">
            <em className="label-tip-amount">Tip Amount</em>
            <span className="label-person">/ person</span>
          </p>
          <span className="result-output">$0.00</span>
        </li>
        <li>
          <p className="result-label">
            <em className="label-total">Total</em>
            <span className="label-person">/ person</span>
          </p>
          <span className="result-output">$0.00</span>
        </li>
      </ul>
      <Button bgColor="hsl(183, 84%, 24%)" textColor="hsl(183, 100%, 15%)">
        <span
          style={{ fontSize: "1.6rem", fontWeight: "700", padding: ".35rem" }}
        >
          {"Reset".toUpperCase()}
        </span>
      </Button>
    </div>
  );
}

function SelectTips() {
  const options = [5, 10, 15, 25, 50];
  return (
    <>
      <p className="label" style={{ marginBottom: "1.2rem" }}>
        Select Tip %
      </p>
      <section className="tip-options">
        {options.map((option) => (
          <Button
            bgColor="hsl(183, 100%, 15%)"
            textColor="hsl(189, 41%, 97%)"
            className="btn-option"
          >
            <span style={{ fontSize: "2.1rem", fontWeight: 700 }}>
              {option}
            </span>
            <span style={{ fontSize: "1.8rem" }}>%</span>
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

function InputField({ emoji, children }) {
  return (
    <section>
      <p className="label">{children}</p>
      <form className="input-box">
        <img src={`/images/${emoji}`} alt={emoji} />
        <input type="text" placeholder="0" />
      </form>
    </section>
  );
}

function Button({ className, textColor, bgColor, children }) {
  return (
    <button
      style={{ color: textColor, backgroundColor: bgColor }}
      className={className}
    >
      {children}
    </button>
  );
}

export default App;
