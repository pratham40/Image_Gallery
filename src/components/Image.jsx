import { Link } from "react-router-dom"

function Image({image,id}) {
    return (
        <div>
            <Link to={`/photos/${id}`}>
                <img className="rounded-3xl w-64 object-cover"src={image} />
            </Link>
        </div>
    )
}

export default Image
