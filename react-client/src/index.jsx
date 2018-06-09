import React from 'react';
import ReactDOM from 'react-dom';
import TopSection from './components/TopSection.jsx';

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
    return <TopSection />
  }
}

ReactDOM.render(<Page/>, document.getElementById('page'));