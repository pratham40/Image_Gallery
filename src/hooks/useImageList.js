import {useState,useEffect} from 'react'
import axios from 'axios'
function UseImageList() {
    const[imageList,setImageList]=useState({
        limit:20,
        images:[],
        isLoading:true
    })
    async function downloadList(limit) {
        setImageList((state)=> ({...state,isLoading:true}))
        const response=await axios.get(`https://api.slingacademy.com/v1/sample-data/photos?offset=${limit}&limit=20`)
        const photoDetail = response.data.photos
        console.log(response.data.limit);
        setImageList((state)=> ({...state,images:photoDetail,isLoading:false}))
        
    }

    useEffect(()=>{
        downloadList(imageList.limit)
    },[imageList.limit])


    const handlePrev=()=>{
        setImageList({...imageList,limit:imageList.limit-20})
    }

    const handleNext=()=>{
        setImageList({...imageList,limit:imageList.limit+20})
    }
    return{
        imageList,setImageList,handleNext,handlePrev
    }
}

export default UseImageList
