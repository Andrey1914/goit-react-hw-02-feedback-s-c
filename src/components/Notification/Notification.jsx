import PropTypes from 'prop-types';
// import style from './Notification.module.css';
import { Message } from './Notification.styled';

export default function Notification({ message }) {
  return <Message>{message}</Message>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
