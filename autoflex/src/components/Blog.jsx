import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.scss";
import Nav from "./Nav";
import Footer from "./Footer";
import postsBlog from "./postsBlog";
import Publicacion from "./Publicacion";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(postsBlog[0]); // Publicación activa inicial

  const handlePostClick = (post) => {
    setSelectedPost(post); // Cambia la publicación activa
    window.scrollTo({ top: 400, behavior: "smooth" }); // Desplaza el scroll al inicio de la página
  };

  return (
    <div className="blog">
      <Nav />
      <div className="container">
        {/* Banner */}
        <div className="banner-blog">
          <h2>El blog de Autoflex</h2>
        </div>

        <div className="columns-wrapper">
          {/* Columna izquierda: Publicación principal */}
          <div className="container-post">
            <Publicacion
              title={selectedPost.title}
              image={selectedPost.image}
              content={selectedPost.content}
            />
          </div>

          {/* Columna derecha: Miniaturas */}
          <aside className="barra-lateral">
            {postsBlog
              .filter((post) => post.id !== selectedPost.id) // Excluir la publicación activa
              .map((post) => (
                <div
                  key={post.id}
                  className="post-preview"
                  onClick={() => handlePostClick(post)} // Llama a la función handlePostClick
                >
                  <img src={post.image} alt={post.title} />
                  <h4>{post.title}</h4>
                  <p>{post.preview}</p>
                </div>
              ))}
              <div className="box-call-to-action">
                <h3>¿Estás listo para comenzar tu viaje?</h3>
                <p>¡Haz que cada kilómetro cuente con un coche de alquiler
                   de AutoFlex! Explora sin límites y disfruta de la flexibilidad y comodidad que mereces.</p>
                   <Link to="/reserva"><button className="btn-white">Reserva ahora</button></Link>
              </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
