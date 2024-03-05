import { Logo } from 'components/logo';
import s from './style.module.css';
import logo from 'assets/images/logo.png';
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import { useNavigate } from 'react-router-dom';

export function Header(propos) {
  const navigate = useNavigate();
  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          onClick={() => navigate('/')}
          title="MyNotes"
          subtitle="Manage your notes"
          image={logo}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">
        <ButtonPrimary onClick={() => navigate('/note/new')}>
          Create new note +
        </ButtonPrimary>
      </div>
    </div>
  );
}
