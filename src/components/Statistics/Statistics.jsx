import ProtoTypes from 'prop-types';
import { List } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>

        <List>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </List>

    </>
  );
};

Statistics.prototype = {
  good: ProtoTypes.number.isRequired,
  neutral: ProtoTypes.number.isRequired,
  bad: ProtoTypes.number.isRequired,
  total: ProtoTypes.number.isRequired,
  positivePercentage: ProtoTypes.number.isRequired,
}

export default Statistics;
