import React, { useState } from "react";
import "./Blog.scss";
import Nav from "./Nav";
import Footer from "./Footer";
import postsBlog from "./postsBlog";
import Publicacion from "./Publicacion";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(postsBlog[0]); // Publicación activa inicial

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
                  onClick={() => setSelectedPost(post)} // Cambiar publicación activa
                >
                  <img src={post.image} alt={post.title} />
                  <h4>{post.title}</h4>
                  <p>{post.preview}</p>
                </div>
              ))}
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
