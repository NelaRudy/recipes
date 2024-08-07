type Props = {
    params: {
        recipeId: number;
    }
};

export default function RecipePage ({ params }: Props) {
    return (
        <div>przepis ...{params.recipeId}...</div>
    );
}