import { ButtonHTMLAttributes } from "react";
import { mergeClasses } from "@/lib/utils/classNameUtils";

type Props = {
    label: string;
    type?: "button" | "submit" | "reset";
    addClassNames?: string;
    hasBackground?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button ({label, type = "button", addClassNames = "",hasBackground = true}: Props) {

    const cn = mergeClasses(
        { "flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded mr-1" : !hasBackground },
        { "text-white end-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 hover:text-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700": hasBackground },
        { [addClassNames]: true}
    );

    return (
        <button type={type} className={cn}>
            {label}
        </button>
    );
}
