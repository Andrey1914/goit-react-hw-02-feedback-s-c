// import style from './Container.module.css';
import { Wrap } from './Container.styled';

export default function Container({ children }) {
  return <Wrap>{children}</Wrap>;
}
