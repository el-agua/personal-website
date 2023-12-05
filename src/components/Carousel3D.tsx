import React, { useState } from 'react';
import '../app/Carousel3D.css';

const Carousel3D = (props: any) => {
  const [rotation, setRotation] = useState(0);
  const totalItems = React.Children.count(props.children);
  const theta = 360 / totalItems;

  const rotateCarousel = (direction: any) => {
    const newRotation = rotation + (direction * theta);
    setRotation(newRotation);
  };

  return (
    <div className="carousel">
      <div className="carousel__scene" style={{ transform: `rotateY(${rotation}deg)` }}>
        {React.Children.map(props.children, (child, index) => (
          <div className="carousel__item" style={{ transform: `rotateY(${index * theta}deg) translateZ(300px)` }}>
            {child}
          </div>
        ))}
      </div>
      <button onClick={() => rotateCarousel(-1)}>Previous</button>
      <button onClick={() => rotateCarousel(1)}>Next</button>
    </div>
  );
};

export default Carousel3D;