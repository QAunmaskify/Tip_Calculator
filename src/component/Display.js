import Reset from "./Reset";

function Display({ percent, nPersons, bill, onClick, onReset }) {
  const amount = +bill?.replace(/,/g, "");
  const nps = +nPersons;
  const percentage = +percent;

  let tip = 0;
  let totalAmount = 0;

  if (percentage > 0) {
    tip = (amount * percentage) / (nps * 100);
    totalAmount = ((100 + percentage) * amount) / (nps * 100);
  }

  return (
    <div className="display">
      <ul className="results">
        <li>
          <p className="result-label">
            <em className="label-tip-amount">Tip Amount</em>
            <span className="label-person">/ person</span>
          </p>
          <span className="result-output">
            $
            {isFinite(tip)
              ? String(tip.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : "0.00"}
          </span>
        </li>
        <li>
          <p className="result-label">
            <em className="label-total">Total</em>
            <span className="label-person">/ person</span>
          </p>
          <span className="result-output">
            $
            {isFinite(totalAmount)
              ? String(totalAmount.toFixed(2)).replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                )
              : "0.00"}
          </span>
        </li>
      </ul>

      <Reset
        type="reset"
        style={
          percentage > 0 && amount > 0 && nps > 0
            ? {
                backgroundColor: "hsl(172, 67%, 45%)",
                color: "hsl(183, 100%, 15%)",
              }
            : {
                backgroundColor: "hsl(183, 84%, 24%)",
                color: "hsl(183, 100%, 15%)",
              }
        }
        onReset={onReset}
      >
        <span
          style={{ fontSize: "1.6rem", fontWeight: "700", padding: ".35rem" }}
        >
          {"Reset".toUpperCase()}
        </span>
      </Reset>
    </div>
  );
}
export default Display;
