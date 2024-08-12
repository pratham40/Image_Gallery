import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Image from "./Image";

function ImageDetail() {
    const { photoId } = useParams();
    const [imageDetail, setImageDetail] = useState(null);

    const downloadImage = async () => {
        try {
            const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${photoId}`);
            console.log(response);
            setImageDetail(response.data.photo);
        } catch (error) {
            console.error("Error fetching image details:", error);
        }
    };

    useEffect(() => {
        downloadImage();
    }, [photoId]);

    if (!imageDetail) {
        return <p>Loading...</p>; // Show loading message until the image details are fetched
    }

    return (
        <div className="font-serif">
            <Link to="/" className="text-center">
            <h1 className="font-semibold text-2xl mb-6">Images</h1>
            </Link>
            <div className="flex bg-blue-800 rounded-3xl text-white">

            <img className="w-96 rounded-3xl p-5" src={imageDetail.url} alt="" />
            <div className="ml-7 w-2/5">
                <h1 className="text-3xl my-7 font-semibold" >{imageDetail.title}</h1>
                <p>{imageDetail.description }</p>
            </div>
            </div>
        </div>
    );
}

export default ImageDetail;
