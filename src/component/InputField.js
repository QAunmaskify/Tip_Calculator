function InputField({
  nPersons,
  emoji,
  className,
  err,
  children,
  value,
  onChange,
}) {
  function onSubmit(evt) {
    evt.preventDefault();
  }
  return (
    <section>
      <p className="label">
        {children}{" "}
        <span className={nPersons === 0 ? "error" : "hidden"}>{err}</span>
      </p>

      <form
        className={`input-box ${nPersons === 0 ? className : ""}`}
        onSubmit={onSubmit}
        style={{ borderColor: nPersons === 0 ? "rgb(255, 96, 122)" : "" }}
      >
        <img src={`/images/${emoji}`} alt={emoji} />
        <input type="text" placeholder="0" value={value} onChange={onChange} />
      </form>
    </section>
  );
}

export default InputField;
