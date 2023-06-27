function Reset({ type, style, children, onReset }) {
  return (
    <button type={type} style={style} onClick={onReset}>
      {children}
    </button>
  );
}

export default Reset;
