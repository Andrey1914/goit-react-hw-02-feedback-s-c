import PropTypes from 'prop-types';
// import style from './Section.module.css';
import { SectionFeedback, Title } from './Section.styled';

export default function Section({ children, title }) {
  return (
    <SectionFeedback>
      <Title>{title}</Title>
      {children}
    </SectionFeedback>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
