import { useUsers } from '../../../features/users/hook/use.users';
import { useNavigate } from 'react-router-dom';
import './header.css';

export function Header() {
    const navigate = useNavigate();
    const { users, handleLogout } = useUsers();
    if (!users.user) return <p></p>;
    return (
        <header>
            <div className="div">
                <h2>Cuenta de {users.user.name}</h2>
                <button
                    className="button"
                    onClick={(e) => {
                        e.preventDefault();
                        handleLogout();
                        navigate('/login');
                    }}
                >
                    Salir
                </button>
            </div>
        </header>
    );
}
