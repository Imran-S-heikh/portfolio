import clsx from 'clsx';

type Props = {
    label: string,
    className?: string,
    onClick?: ()=>void
}


function Button({ label, className, onClick }: Props) {
    return (
        <button onClick={onClick} className={clsx(className, "h-9 px-3 rounded-lg text-sm active:opacity-75")}>{label}</button>
    )
}



function Default({ label, className,onClick }: Props) {
    return (
        <Button
            label={label}
            className={clsx(className, "bg-gray-dark text-white-light hover:bg-gray-deep")}
            onClick={onClick}
        />
    )
}

function Primary({ label, className,onClick }: Props) {
    return (
        <Button
            label={label}
             onClick={onClick}
            className={clsx(className, "bg-orange-light hover:bg-[#FFAC6B] text-black-base")}

        />
    )
}

function Ghost({ label, className,onClick }: Props) {
    return (
        <Button
            label={label}
             onClick={onClick}
            className={clsx(className, "border border-white-light hover:border-white-light/50 text-white-light")}
        />
    )
}

Button.Primary = Primary;
Button.Default = Default;
Button.Ghost = Ghost;

export default Button;