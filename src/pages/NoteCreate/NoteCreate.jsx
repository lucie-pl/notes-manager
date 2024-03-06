import s from './style.module.css';
import { NoteForm } from 'components/NoteForm/NoteForm';

export function NoteCreate(props) {
  return (
    <>
      <NoteForm title="Create a note" />
    </>
  );
}
