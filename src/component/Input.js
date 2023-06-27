function Input({
  type,
  placeholder,
  className,
  children,
  onChange,
  ...otherProps
} = {}) {
  return (
    <section>
      <p className="label">
        {children}{" "}
        <span className={otherProps.nPersons === "0" ? "error" : "hidden"}>
          {otherProps.errorMessage}
        </span>
      </p>

      <div
        className={`input-box ${otherProps.nPersons === "0" ? className : ""}`}
        style={{
          borderColor: otherProps.nPersons === "0" ? "rgb(255, 96, 122)" : "",
        }}
      >
        <img src={`/images/${otherProps.emoji}`} alt={otherProps.emoji} />
        <input
          type={type}
          inputMode={otherProps.inputMode}
          placeholder={placeholder}
          value={otherProps.value}
          min={otherProps.minimum}
          onChange={onChange}
        />
      </div>
    </section>
  );
}

export default Input;
