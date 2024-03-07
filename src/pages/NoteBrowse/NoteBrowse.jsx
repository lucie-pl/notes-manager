import { NoteList } from 'containers/NoteList/NoteList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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

      {filteredList?.length === 0 && (
        <div className="d-flex justify-content-center">
          <span>
            There's not note, do you want to{' '}
            <Link to="/note/new"> create one</Link> ?
          </span>
        </div>
      )}
      <NoteList list={filteredList} />
    </>
  );
}
