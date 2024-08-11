import {useState,useEffect} from 'react'
import axios from 'axios'
function UseImageList() {
    const[imageList,setImageList]=useState({
        limit:20,
        images:[],
        isLoading:true
    })
    async function downloadList(limit) {
        setImageList.isLoading(true)
        const response=await axios.get(`https://api.slingacademy.com/v1/sample-data/photos?offset=${limit}&limit=20`)
        const photoDetail = response.data.photos
        console.log(response.data.limit);
        setImageList.images(photoDetail)
        setImageList.isLoading(false)
    }

    useEffect(()=>{
        downloadList(setImageList.limit)
    },[setImageList.limit])


    const handlePrev=()=>{
        setImageList.limit(limit => limit-20)
    }

    const handleNext=()=>{
        setImageList.limit(limit => limit+20)
    }
    return{
        imageList,setImageList
    }
}

export default UseImageList
