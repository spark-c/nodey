import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
        // the "key" prop is a unique idenitifier that helps React perform
        // as well as possible when updating lists of components
    });

    return (
        <div className="image-list">
            {images}
        </div>
    );
}

export default ImageList;