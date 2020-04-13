import React, {Component} from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Cards from "./components/cards/Cards";
import supervisor from "../src/images/icon-supervisor.svg";
import teamBuilder from "../src/images/icon-team-builder.svg";
import karma from "../src/images/icon-karma.svg";
import calculator from "../src/images/icon-calculator.svg";

class App extends Component {
  state = {
    h1: "Reliable, efficient delivery",
    h2: "Powered by Technology",
    p: "Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful",
    cards: [
      {
        title: "Supervisor",
        desc: "Monitors activity to identify project roadblocks",
        color: "hsl(180, 62%, 55%)",
        img: supervisor
      },
      {
        title: "Team Builder",
        desc: "Scans our talent network to create the optimal team for your project",
        color: "hsl(0, 78%, 62%)",
        img: teamBuilder
      },
      {
        title: "Karma",
        desc: "Regularly evaluates our talent to ensure quality",
        color: "hsl(34, 97%, 64%)",
        img: karma
      },
      {
        title: "Calculator",
        desc: "Uses data from past projects to provide better delivery estimates",
        color: "hsl(212, 86%, 64%)",
        img: calculator
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Header
          h1={this.state.h1}
          h2={this.state.h2}
          p={this.state.p} 
        />
        <Cards cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
