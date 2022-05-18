import clsx from 'clsx';

type Props = {
    label: string,
    className?: string,
}


function Button({ label, className }: Props) {
    return (
        <button className={clsx(className, "h-9 px-3 rounded-lg text-sm active:opacity-75")}>{label}</button>
    )
}



function Default({ label, className }: Props) {
    return (
        <Button
            label={label}
            className={clsx(className, "bg-gray-dark text-white-light hover:bg-gray-deep")}
        />
    )
}

function Primary({ label, className }: Props) {
    return (
        <Button
            label={label}
            className={clsx(className, "bg-orange-light hover:bg-[#FFAC6B] text-black-base")}

        />
    )
}

function Ghost({ label, className }: Props) {
    return (
        <Button
            label={label}
            className={clsx(className, "border border-white-light hover:border-white-light/50 text-white-light")}
        />
    )
}

Button.Primary = Primary;
Button.Default = Default;
Button.Ghost = Ghost;

export default Button;