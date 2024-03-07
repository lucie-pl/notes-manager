import { TextCard } from 'components/TextCard/TextCard';
import s from './style.module.css';
import { NoteList } from 'containers/NoteList/NoteList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export function NoteBrowse(props) {
  const [searchText, setSearchText] = useState('');
  const noteList = useSelector((store) => store.NOTE.noteList);

  const filteredList = noteList.filter((note) => {
    const containsTitle = note.title
      .toUpperCase()
      .includes(searchText.trim().toUpperCase());

    const containsContent = note.content
      .toUpperCase()
      .includes(searchText.trim().toUpperCase());

    return containsTitle || containsContent;
  });

  console.log('***');
  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-sm-12 col-md-6">
          <SearchBar
            placeholder="Search a note ..."
            onTextChange={setSearchText}
          />
        </div>
      </div>
      <NoteList list={filteredList} />
    </>
  );
}
