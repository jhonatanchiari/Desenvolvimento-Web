import "../styles/button.css";

interface IButtonProps {
  text: string;
  secondary?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: string;
}

export default function Button({
  text,
  secondary,
  type = "button",
  disabled = false,
  icon,
}: IButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={secondary ? "btn-secondary" : "btn-primary"}
    >
      {icon && (
        <img
          src={icon}
          alt=""
          style={{
            width: "20px",
            height: "20px",
            marginRight: "8px",
            verticalAlign: "middle",
          }}
        />
      )}

      {text}
    </button>
  );
}