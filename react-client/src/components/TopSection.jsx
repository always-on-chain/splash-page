import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';
import MiddleSection from './MiddleSection.jsx';

const TopSection = (props) => {
  return (
    <section id="top">
      <div id="parent">
        <img src="./images/header_graphic.png" id="header-graphic" />
        <img src="./images/hero_image.jpg" id="hero-image" />
        <Form />
        <div id="companies-text">
          Companies using Piazza Careers:
        </div>
      </div>

      <MiddleSection smallIcons={props.smallIcons} bigIcons={props.bigIcons} />
    </section>
    
  )
}

export default TopSection;