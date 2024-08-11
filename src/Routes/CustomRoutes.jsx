import { Route, Routes } from "react-router-dom"
import ImageList from "../components/ImageList"


function CustomRoutes() {
    return (
        <div>  
            <Routes>
                <Route path="/" element={<ImageList/>}/>
            </Routes>
        </div>  
    )
}

export default CustomRoutes
