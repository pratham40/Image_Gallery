
function Image({image,key}) {
    return (
        <>
        <img className="rounded-3xl w-64 object-cover"key={key} src={image} />
        </>
    )
}

export default Image
