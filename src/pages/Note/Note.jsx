import { useParams } from 'react-router-dom';
import s from './style.module.css';
import { useSelector } from 'react-redux';
import { NoteForm } from 'components/NoteForm/NoteForm';

export function Note(props) {
  const { noteId } = useParams();
  //To select key and value from params, we use useSearchParams() hook
  //ex: [searchParams] = useSearchParams()
  //ex: {searchParams.get('name')} => Toto

  //Warning, below we compare a number (note.id) to a string (noteId)
  //That's why we need to tranform the string in number
  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === parseFloat(noteId))
  );
  return (
    <>
      {note && (
        <NoteForm
          title={note.title}
          isEditable={false}
          note={note}
          onClickEdit={() => alert('Edit clicked')}
          onClickTrash={() => alert('Trash clicked')}
        />
      )}
    </>
  );
}
