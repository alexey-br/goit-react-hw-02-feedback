import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementStatistics = comment => {
    this.setState(prevState => {
      return { [comment]: prevState[comment] + 1 };
    });
  };

  render() {
    return (
      <div>
        <p>Please leave feedback</p>
        <ul>
          <li>
            <button onClick={() => this.incrementStatistics('good')}>
              Good
            </button>
          </li>
          <li>
            <button onClick={() => this.incrementStatistics('neutral')}>
              Neutral
            </button>
          </li>
          <li>
            <button onClick={() => this.incrementStatistics('bad')}>Bad</button>
          </li>
        </ul>
        <p>Statistics</p>
        <ul>
          <li>
            <span>Good: {this.state.good}</span>
          </li>
          <li>
            <span>Neutral: {this.state.neutral}</span>
          </li>
          <li>
            <span>Bad: {this.state.bad}</span>
          </li>
        </ul>
      </div>
    );
  }
}
