function Button({ type, value, children, className, onClick, ...otherProps }) {
  const { toggle, idx, style, onToggle, onSetPercent } = otherProps;

  // Derived State base on toggle
  const curSelect = idx === toggle;

  function handleToggle() {
    onToggle(curSelect ? null : idx);
  }
  return (
    <button
      type={type}
      value={value}
      style={style}
      className={curSelect ? "selected" : "btn-primary"}
      onClick={(evt) => {
        handleToggle();
        onSetPercent(evt);

        /** Explain Better Please! */
        if (toggle === null) otherProps.onCustomPercent("");
      }}
    >
      {children}
    </button>
  );
}

export default Button;
