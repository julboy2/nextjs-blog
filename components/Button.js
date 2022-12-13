const Button = ({ children }) => {
  return (
    <button
      onClick={() => {
        alert(`thanks to ${children}`);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
