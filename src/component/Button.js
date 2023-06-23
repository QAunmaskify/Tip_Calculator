function Button({ className, textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ color: textColor, backgroundColor: bgColor }}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
