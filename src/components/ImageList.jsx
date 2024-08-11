import axios from "axios"
import { useEffect, useState } from "react"
import Image from "./Image"

function ImageList() {
    const [limit,setLimit]=useState(20)
    const[images,setImages]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    async function downloadList(limit) {
        setIsLoading(true)
        const response=await axios.get(`https://api.slingacademy.com/v1/sample-data/photos?offset=${limit}&limit=20`)
        const photoDetail = response.data.photos
        console.log(response.data.limit);
        setImages(photoDetail)
        setIsLoading(false)
    }

    useEffect(()=>{
        downloadList(limit)
    },[limit])


    const handlePrev=()=>{
        setLimit(limit => limit-20)
    }

    const handleNext=()=>{
        setLimit(limit => limit+20)
    }
    return (
        <div>
            <div className="flex flex-wrap gap-3">
           {
                (isLoading)?"Loading ...":
                images.map((p)=> <Image key={p.id} image={p.url}/>)
           }
            </div>

            <div className="text-center mt-4" >
                <button className="border border-black py-1 px-6 rounded-2xl hover:bg-black hover:text-white mr-3" 
                onClick={handlePrev}
                disabled={limit==20}>Prev</button>
                <button onClick={handleNext} className="border border-black py-1 px-6 rounded-2xl hover:bg-black hover:text-white ">Next</button>
            </div>
        </div>
    )
}

export default ImageList
