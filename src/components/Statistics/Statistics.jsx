import ProtoTypes from 'prop-types';
import { Item, List } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>

        <List>
          <Item>Good: {good}</Item>
          <Item>Neutral: {neutral}</Item>
          <Item>Bad: {bad}</Item>
          <Item>Total: {total}</Item>
          <Item>Positive feedback: {positivePercentage}%</Item>
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
