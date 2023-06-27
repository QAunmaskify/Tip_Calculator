function Input({
  type,
  inputMode,
  nPersons,
  emoji,
  className,
  err,
  children,
  value,
  onChange,
}) {
  return (
    <section>
      <p className="label">
        {children}{" "}
        <span className={nPersons === 0 ? "error" : "hidden"}>{err}</span>
      </p>

      <div
        className={`input-box ${nPersons === 0 ? className : ""}`}
        style={{ borderColor: nPersons === 0 ? "rgb(255, 96, 122)" : "" }}
      >
        <img src={`/images/${emoji}`} alt={emoji} />
        <input
          inputmode={type}
          placeholder="0"
          value={value}
          onChange={onChange}
        />
      </div>
    </section>
  );
}

export default Input;
