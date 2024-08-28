import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { mergeClasses } from "@/lib/utils/classNameUtils";

type Props = {
    label: string;
    error?: FieldError;
};

export default forwardRef(function Input ({ label, error, ...rest }: Props, ref) {
    const hasError = !!error;
    const cn = mergeClasses(
        "block w-full p-2 text-sm outline-none text-gray-900 border border-teal-400 rounded-lg bg-gray-50 focus:border-teal-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-teal-600",
        { "border-red-500": hasError },
        { "mb-5": !hasError }
    );

    return (
        <div className="w-full md:w-1/2 pb-2">
            <label htmlFor={label} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {label}
            </label>
            <input {...rest} className={cn} id={label} type="text" placeholder={label} />
            { hasError && <p className="text-red-500 text-xs italic pt-1">{error.message}</p>}
        </div>
    );
})
