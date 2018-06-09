import React from 'react';
import ReactDOM from 'react-dom';

const BottomSection = (props) => {
  return (
    <section id="bottom">
      {props.bigIcons.map((icon, index) => {
        return (
          <div class="iconbig-section" id={`iconbig${index+1}-section`}>
            <img src={icon.image} class="iconbig" />
            <div class="awareness-description">
              <div class="iconbig-header">{icon.header}</div>
              <div class="iconbig-description">{icon.description}</div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default BottomSection;