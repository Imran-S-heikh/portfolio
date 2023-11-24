import classUtil from "@dev/utils/class-util";
import Spinner from "./Spinner";
import Hide from "./Hide";

type Props = {
  disabled?: boolean;
  label: string;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
};

function Button({ disabled, label, className, onClick, loading }: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classUtil(
        className,
        "h-9 px-3 rounded-lg text-sm active:opacity-75 text-center justify-center flex items-center gap-2",
        disabled && "cursor-not-allowed"
      )}
    >
      <span>{label}</span>
      <Hide open={loading}>
        <Spinner className="!w-4 !h-4 !border-spacing-4" thickness={1} />
      </Hide>
    </button>
  );
}

function Default({ label, className, onClick, loading, disabled }: Props) {
  return (
    <Button
      disabled={disabled}
      loading={loading}
      label={label}
      className={classUtil(
        className,
        "bg-gray-dark text-white-light hover:bg-gray-deep text-center"
      )}
      onClick={onClick}
    />
  );
}

function Primary({ label, className, onClick }: Props) {
  return (
    <Button
      label={label}
      onClick={onClick}
      className={classUtil(
        className,
        "bg-orange-light hover:bg-[#FFAC6B] text-black-base"
      )}
    />
  );
}

function Ghost({ label, className, onClick }: Props) {
  return (
    <Button
      label={label}
      onClick={onClick}
      className={classUtil(
        className,
        "border border-white-light hover:border-white-light/50 text-white-light"
      )}
    />
  );
}

Button.Primary = Primary;
Button.Default = Default;
Button.Ghost = Ghost;

export default Button;
