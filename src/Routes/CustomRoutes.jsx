import { Route, Routes } from "react-router-dom";
import ImageList from "../components/ImageList";
import ImageDetail from "../components/ImageDetail";

function CustomRoutes() {
    return (
        <div>  
            <Routes>
                <Route path="/" element={<ImageList />} />
                <Route path="/photos/:photoId" element={<ImageDetail />} />
            </Routes>
        </div>  
    );
}

export default CustomRoutes;
