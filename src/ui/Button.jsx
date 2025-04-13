import { Link } from "react-router-dom";

function Button({
  children,
  disabled = false,
  to,
  type = "primary",
  htmlType = "button",
  onClick,
}) {
  const base =
    "bg-yellow-400 text-sm font-semibold uppercase text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300";

  const styles = {
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-sm",
    secondary:
      "inline-block rounded-full bg-transparent border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 px-4 py-2.5 md:px-6 md:py-3.5",
  };

  // Ako imamo `to`, renderiramo Link
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  // Inače, pravimo PRAVI HTML button
  return (
    <button
      type={htmlType}
      disabled={disabled}
      onClick={onClick}
      className={styles[type]}
    >
      {children}
    </button>
  );
}

export default Button;
