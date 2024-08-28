type Props = {
    params: {
        recipeId: number;
    }
};

export default function RecipesPage ({ params }: Props) {
    return (
        <div>przepis ...{params.recipeId}...</div>
    );
}