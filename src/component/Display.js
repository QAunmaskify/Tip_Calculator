import Button from "./Button";

function Display({ percent, nPersons, bill, onClick }) {
  let tip = 0;
  let totalAmount = 0;

  if (Number(bill) && Number(percent) && Number(nPersons)) {
    tip = (Number(bill) * Number(percent)) / (Number(nPersons) * 100);
    totalAmount =
      (Number(bill) * (100 + Number(percent))) / (100 * Number(nPersons));
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
            ${tip ? tip.toFixed(2) : "0.00"}
          </span>
        </li>
        <li>
          <p className="result-label">
            <em className="label-total">Total</em>
            <span className="label-person">/ person</span>
          </p>
          <span className="result-output">
            ${totalAmount ? totalAmount.toFixed(2) : "0.00"}
          </span>
        </li>
      </ul>
      <Button
        className={
          percent > 0 && bill > 0 && nPersons > 0 ? "btn-active" : "btn-disable"
        }
        onClick={onClick}
      >
        <span
          style={{ fontSize: "1.6rem", fontWeight: "700", padding: ".35rem" }}
        >
          {"Reset".toUpperCase()}
        </span>
      </Button>
    </div>
  );
}
export default Display;
