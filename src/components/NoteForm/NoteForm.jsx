import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import s from './style.module.css';
import { PencilFill, Trash, TrashFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import { ValidatorService } from 'services/form-validators';
import { FieldError } from 'components/FieldError/FieldError';

const VALIDATORS = {
  title: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 20);
  },
  content: (value) => {
    return ValidatorService.min(value, 5);
  },
};

export function NoteForm({
  title,
  onSubmit,
  onClickEdit,
  onClickTrash,
  isEditable = true,
  note,
}) {
  const [formValues, setFormValues] = useState({
    title: note?.title || '',
    content: note?.content || '',
  });
  const [formErrors, setFormErrors] = useState({
    title: note?.title ? undefined : '',
    content: note?.content ? undefined : '',
  });

  function updateFormValues(e) {
    //We need to destructure in order to be able to update both title and content
    //at the same time
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    validate(e.target.name, e.target.value);
  }

  function validate(fieldName, fieldValue) {
    setFormErrors({
      ...formErrors,
      [fieldName]: VALIDATORS[fieldName](fieldValue),
    });
  }

  function hasErrors() {
    return Object.values(formErrors).some((value) => value !== undefined);
  }

  const actionIcons = (
    <>
      <div className="col-1">
        {onClickEdit && <PencilFill className={s.icon} onClick={onClickEdit} />}
      </div>
      <div className="col-1">
        {onClickEdit && <TrashFill className={s.icon} onClick={onClickTrash} />}
      </div>
    </>
  );

  const titleInput = (
    <div className="mb-5">
      <label className="form-label">Title</label>
      <input
        type="text"
        name="title"
        className="form-control"
        onChange={updateFormValues}
        value={formValues.title}
      />
      <FieldError msg={formErrors.title} />
    </div>
  );
  const contentInput = (
    <div className="mb-5">
      <label className="form-label">Content</label>
      <textarea
        type="text"
        name="content"
        className="form-control"
        row="6"
        onChange={updateFormValues}
        value={formValues.content}
      />
      <FieldError msg={formErrors.content} />
    </div>
  );
  const submitButton = (
    <div className={s.submit_btn}>
      <ButtonPrimary
        isDisabled={hasErrors()}
        onClick={() => onSubmit(formValues)}
      >
        Submit
      </ButtonPrimary>
    </div>
  );

  return (
    <form className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionIcons}
      </div>
      <div className={`mb-3 ${s.title_input_container}`}>
        {isEditable && titleInput}
      </div>
      <div className={s.content_input_container}>
        {isEditable ? contentInput : <pre>{note.content}</pre>}
      </div>
      {onSubmit && submitButton}
    </form>
  );
}
