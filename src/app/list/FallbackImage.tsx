import Image from "next/image";
import { recipeImageSrc } from "@/lib/consts";


const FallbackImage = () => {
    return (
        <Image src={recipeImageSrc} className="w-full mb-3 p-2" width={350} height={240} alt="photo of the dish"/>
    );
}

export default FallbackImage;