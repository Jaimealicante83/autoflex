import React from 'react';
import './Posts.scss';
import Post from './Post';

const Posts = () => {
    return (
        <section className="posts">
            <div className="container">
               <Post image="/happy-woman.jpg" altDesc="Clienta Feliz" title="Alquila y no te preocupes" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis purus eu fringilla finibus. Aliquam at mauris aliquam, vestibulum mi id, dignissim lacus. Phasellus sit amet elit eget mauris ... "/>
               <Post image="/wheel.jpg" altDesc="Unas manos manejan un volante en un Audi" title="Prestaciones increibles" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis purus eu fringilla finibus. Aliquam at mauris aliquam, vestibulum mi id, dignissim lacus. Phasellus sit amet elit eget mauris  ... "/>
               <Post image="/descapotable.jpg" altDesc="Una mujer conduce un descapotable" title="Viajes por la costa" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis purus eu fringilla finibus. Aliquam at mauris aliquam, vestibulum mi id, dignissim lacus. Phasellus sit amet elit eget mauris  ..."/>
               <Post image="/parking.jpg" altDesc="Aparcamiento de coches lleno" title="Donde aparcar" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis purus eu fringilla finibus. Aliquam at mauris aliquam, vestibulum mi id, dignissim lacus. Phasellus sit amet elit eget mauris  ..."/>
            </div>
        </section>
    );
};

export default Posts;