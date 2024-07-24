import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export const mergeClasses = (...values: ClassValue[]) => {
    return twMerge(clsx(values));
}; 
