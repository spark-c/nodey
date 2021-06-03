import React from 'react';


const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <img key={image.id} alt={image.description} src={image.urls.small} />
        // the "key" prop is a unique idenitifier that helps React perform
        // as well as possible when updating lists of components
    });

    return (
        <div>
            {images}
        </div>
    );
}

export default ImageList;