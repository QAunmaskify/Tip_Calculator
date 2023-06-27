function Button({ type, value, children, className, onClick, ...otherProps }) {
  const { toggle, idx, onToggle } = otherProps;
  const curSelect = idx === toggle;

  function handleToggle() {
    onToggle(curSelect ? null : idx);
  }
  return (
    <button
      type={type}
      value={value}
      style={{
        color: otherProps.textColor,
        backgroundColor: otherProps.bgColor,
      }}
      className={curSelect ? "selected" : "btn-primary"}
      onClick={handleToggle}
    >
      {children}
    </button>
  );
}

export default Button;
