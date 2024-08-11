import Image from "./Image"
import UseImageList from "../hooks/useImageList"

function ImageList() {
    const { imageList, handleNext, handlePrev } = UseImageList();
    const { isLoading, images, limit } = imageList;

    return (
        <div>
            <div className="flex flex-wrap gap-3">
                {
                   (isLoading)?"Loading ...":
                   images.map((p)=> <Image key={p.id} image={p.url}/>)
                }
            </div>

            <div className="text-center mt-4">
            <button className="border border-black py-1 px-6 rounded-2xl hover:bg-black hover:text-white mr-3" 
                onClick={handlePrev}
                disabled={limit==20}>Prev</button>
                <button onClick={handleNext} className="border border-black py-1 px-6 rounded-2xl hover:bg-black hover:text-white ">Next</button>
            </div>
        </div>
    );
}

export default ImageList
