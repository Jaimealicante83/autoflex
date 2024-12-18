import React from 'react';
import './Publicacion.scss';

const Publicacion = ({ title, image, content }) => {
  return (
    <div className="publicacion">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Publicacion;
