import React, { useState } from 'react';

const Gallery = ({ images, onSelect }) => {
    const [selected, setSelected] = useState(images[0]);
    console.log(images);
    const handleSelect = (image) => {
        setSelected(image);
        onSelect(image);
    };

    return (
        <div className="flex overflow-x-scroll gap-4">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    width = {100}
                    height={100}
                    alt={`Gallery image ${index}`}
                    onClick={() => handleSelect(image)}
                    className={`cursor-pointer border border-gray-300 ${image === selected ? 'border-blue-500' : ''
                        }`}
                />
            ))}
        </div>
    );
};

export default Gallery;
