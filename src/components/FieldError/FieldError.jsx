import s from './style.module.css';

export function FieldError({ msg }) {
  return <span className={s.msg}>{msg}</span>;
}
