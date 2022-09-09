import { Component } from 'react';
import Box from './Box';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = comment => {
    this.setState(prevState => {
      return { [comment]: prevState[comment] + 1 };
    });
  };

  countTotalFeedback = () => {
    const feedbacks = Object.values(this.state);
    const feedbacksTotal = feedbacks.reduce(
      (acc, feedback) => acc + feedback,
      0
    );
    return feedbacksTotal;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Box p={4}>
        <Section title="Please leave feedback:">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics:">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}
