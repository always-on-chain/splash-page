import React from 'react';
import ReactDOM from 'react-dom';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smallIcons: [],
      bigIcons: []
    }
  }

  generateData() {

  }

  render() {
    return <p>Piazza</p>
  }
}

ReactDOM.render(<Page/>, document.getElementById('page'));