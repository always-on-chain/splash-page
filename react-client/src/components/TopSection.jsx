import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';

const TopSection = () => {
  return (
    <section id="top">
      <div id="parent">
        <img src="./images/header_graphic.png" id="header-graphic" />
        <img src="./images/hero_image.jpg" id="hero-image" />
        <Form />
      </div>
    </section>
  )
}

export default TopSection;