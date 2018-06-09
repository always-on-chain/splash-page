import React from 'react';
import ReactDOM from 'react-dom';

const MiddleSection = (props) => {
  return (
    <section id="middle">
      <img src="./images/logos.png" id="company-logos" /> 
      <div id="icon-row">
        {props.smallIcons.map((icon, index) => {
          return (
            <div class="icon-section">
              <div class="icon-header">{icon.header}</div>
              <img src={icon.image} class="icon" />
              <div class="icon-description">{icon.description}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default MiddleSection;