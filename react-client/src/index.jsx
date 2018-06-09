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
    let smallIcons = [];
    let amountOfIcons = 4;

    for (let i = 1; i <= amountOfIcons; i++) {
      smallIcons.push({
        header: null,
        image: `./images/icon${i}.png`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      })
    }
    smallIcons[0].header = 'Brand Awareness';
    smallIcons[1].header = 'Relatability';
    smallIcons[2].header = 'Event RSVP';
    smallIcons[3].header = 'Interview Request';

    this.setState({
      smallIcons: smallIcons,
    })
  }

  componentWillMount() {
    this.generateData();
  }

  render() {
    return <TopSection smallIcons={this.state.smallIcons} bigIcons={this.state.bigIcons} />
  }
}

ReactDOM.render(<Page/>, document.getElementById('page'));