import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import s from './style.module.css';
import { PencilFill, Trash, TrashFill } from 'react-bootstrap-icons';

export function NoteForm({ title }) {
  const actionIcons = (
    <>
      <div className="col-1">
        <PencilFill className={s.icon} />
      </div>
      <div className="col-1">
        <TrashFill className={s.icon} />
      </div>
    </>
  );

  const titleInput = (
    <>
      <label className="form-label">Title</label>
      <input type="text" name="title" className="form-control" />
    </>
  );
  const contentImput = (
    <>
      <label className="form-label">Content</label>
      <textarea type="text" name="content" className="form-control" row="6" />
    </>
  );
  const submitButton = (
    <div className={s.submit_btn}>
      <ButtonPrimary>Submit</ButtonPrimary>
    </div>
  );

  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionIcons}
      </div>
      <div className={`mb-3 ${s.title_input_container}`}>{titleInput}</div>
      <div className={s.content_input_container}>{contentImput}</div>
      {submitButton}
    </div>
  );
}
