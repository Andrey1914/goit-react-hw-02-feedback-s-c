import PropTypes from 'prop-types';
import { List, Element, Button } from './FeedbackOption.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <List>
      {options.map(option => {
        return (
          <Element key={option}>
            <Button type="button" onClick={onLeaveFeedback}>
              {option}
            </Button>
          </Element>
        );
      })}
    </List>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
