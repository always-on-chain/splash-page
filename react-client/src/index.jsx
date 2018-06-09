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
    let bigIcons = [];
    let amountOfIcons = 4;

    for (let i = 1; i <= amountOfIcons; i++) {
      smallIcons.push({
        header: null,
        image: `./images/icon${i}.png`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      })
      bigIcons.push({
        header: null,
        image: `./images/iconbig${i}.png`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      })
    }
    smallIcons[0].header = 'Brand Awareness';
    smallIcons[1].header = 'Relatability';
    smallIcons[2].header = 'Event RSVP';
    smallIcons[3].header = 'Interview Request';
    bigIcons[0].header = 'Brand Awareness';
    bigIcons[1].header = 'Relatability';
    bigIcons[2].header = 'Event RSVP';
    bigIcons[3].header = 'Interview Request';

    this.setState({
      smallIcons: smallIcons,
      bigIcons: bigIcons
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