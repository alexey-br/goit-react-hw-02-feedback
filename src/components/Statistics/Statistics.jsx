import PropTypes from 'prop-types';
import Box from 'components/Box';
import { StatItem } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <Box as="ul" p={0} m={0}>
      <StatItem>
        <span>Good: {good}</span>
      </StatItem>
      <StatItem>
        <span>Neutral: {neutral}</span>
      </StatItem>
      <StatItem>
        <span>Bad: {bad}</span>
      </StatItem>
      <StatItem>
        <span>Total: {total()}</span>
      </StatItem>
      <StatItem>
        <span>Positive feedback: {total() ? positivePercentage() : 0}%</span>
      </StatItem>
    </Box>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
