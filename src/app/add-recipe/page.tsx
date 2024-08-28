"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AddRecipe, addRecipeSchema } from "@/lib/types/recipe";
import { CREATE_RECIPE_BUTTON_CANCEL, CREATE_RECIPE_BUTTON_SUBMIT, CREATE_RECIPE_LABEL } from "@/lib/texts";
import Input from "./components/input";
import Textarea from "./components/textarea";
import Button from "../recipes/components/button/Button";

export default function AddRecipePage () {

    const { 
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<AddRecipe>({
        resolver: zodResolver(addRecipeSchema),
        mode: "onSubmit",
    });

    const onSubmit = ({ title, description }: AddRecipe) => {
        console.log("submitted values: ", { title, description, errors, isValid });
    };

    const onCancelClick = () => {
        reset();
    };

console.log({errors});
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("title")} label={CREATE_RECIPE_LABEL.title} error={errors.title} />
                <Textarea {...register("description")} label={CREATE_RECIPE_LABEL.description} error={errors.description} />
                <Button type="submit" label={CREATE_RECIPE_BUTTON_SUBMIT} />
                <Button label={CREATE_RECIPE_BUTTON_CANCEL} hasBackground={false} onClick={onCancelClick} />
            </form>
        </div>
    );
};
