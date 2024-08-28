"use client"

import { useState } from "react";
import SearchIcon from "./SearchIcon";
import { BUTTON_SEARCH_TEXT, SEARCH_INPUT_PLACEHOLDER_TEXT } from "@/lib/texts";
import Button from "../button/Button";

export default function Search() {
    const [searchText, setSearchText] = useState("");

    const onSearchTextInputChange = (value: string) => {

    }

    return (
        <form className="max-w-md mx-auto">   
            <label htmlFor="search-recipes" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <SearchIcon />
                </div>
                <input 
                    type="search" 
                    id="search-recipes"
                    className="block w-full p-4 ps-10 text-sm outline-none text-gray-900 border border-teal-400 rounded-lg bg-gray-50 focus:border-teal-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-teal-600"
                    placeholder={SEARCH_INPUT_PLACEHOLDER_TEXT}
                    required />
                <Button type="submit" label={BUTTON_SEARCH_TEXT} addClassNames="absolute" />
            </div>
        </form>
    );
};

// Experis
// Square One
// Arche
// Luxoft
// linkgroup