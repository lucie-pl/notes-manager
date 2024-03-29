import { useDispatch } from 'react-redux';
import { TextCard } from 'components/TextCard/TextCard';
import s from './style.module.css';
import { useNavigate } from 'react-router-dom';
import { NoteAPI } from 'api/note-api';
import { deleteNote } from 'store/note/note-slice';

export function NoteList({ list }) {
  const noteList = list;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function deleteNote_(note) {
    if (window.confirm('Are you sure you want to delete the note ?')) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
    }
  }
  return (
    <div className="row justify-content-center">
      {noteList.map((note) => {
        return (
          <div key={note.id} className={s.card_container}>
            <TextCard
              title={note.title}
              subtitle={note.subtitle}
              content={note.content}
              onClick={() => navigate('note/' + note.id)}
              onClickTrash={() => deleteNote_(note)}
            />
          </div>
        );
      })}
    </div>
  );
}
