import classUtil from "@dev/utils/class-util";
import Spinner from "./Spinner";
import Hide from "./Hide";

type Props = {
  label: string;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
};

function Button({ label, className, onClick, loading }: Props) {
  return (
    <button
      onClick={onClick}
      className={classUtil(
        className,
        "h-9 px-3 rounded-lg text-sm active:opacity-75 flex items-center gap-2"
      )}
    >
      <span>{label}</span>
      <Hide open={loading}>
        <Spinner className="!w-4 !h-4 !border-spacing-4" thickness={1} />
      </Hide>
    </button>
  );
}

function Default({ label, className, onClick, loading }: Props) {
  return (
    <Button
      loading={loading}
      label={label}
      className={classUtil(
        className,
        "bg-gray-dark text-white-light hover:bg-gray-deep"
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
