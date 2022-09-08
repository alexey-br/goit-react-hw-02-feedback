import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <button onClick={() => onLeaveFeedback(option)}>{option}</button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
