import { useNavigate, useParams } from 'react-router-dom';
import s from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { NoteForm } from 'components/NoteForm/NoteForm';
import { useState } from 'react';
import { deleteNote, updateNote } from 'store/note/note-slice';
import { NoteAPI } from 'api/note-api';

export function Note(props) {
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { noteId } = useParams();
  //To select key and value from params, we use useSearchParams() hook
  //ex: [searchParams] = useSearchParams()
  //ex: {searchParams.get('name')} => Toto

  //Warning, below we compare a number (note.id) to a string (noteId)
  //That's why we need to tranform the string in number
  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === parseFloat(noteId))
  );

  async function submit(formValues) {
    const updatedNote = await NoteAPI.update({ ...formValues, id: note.id });
    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  }

  function deleteNote_(note) {
    if (window.confirm('Are you sure you want to delete the note ?')) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
      navigate('/');
    }
  }
  return (
    <>
      {note && (
        <NoteForm
          title={isEditable ? 'Edit note' : note.title}
          isEditable={isEditable}
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickTrash={() => deleteNote_(note)}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
