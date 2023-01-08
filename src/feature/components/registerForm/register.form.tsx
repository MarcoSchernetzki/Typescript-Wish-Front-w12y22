import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRepository } from '../../users/service/user.repository';
import '../../pages/homePage/home.page.css';

export function RegisterForm() {
    const navigate = useNavigate();
    const userRepo = new UserRepository();

    const [registerFormState, setRegisterFormState] = useState({
        name: '',
        email: '',
        passwd: '',
    });

    const handleSubmitRegister = (ev: SyntheticEvent) => {
        ev.preventDefault();
        userRepo.register(registerFormState);
        navigate('/login');
    };

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setRegisterFormState({
            ...registerFormState,
            [element.name]: element.value,
        });
    };

    return (
        <form onSubmit={handleSubmitRegister}>
            <label>
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Nombre"
                    onInput={handleInput}
                />
            </label>
            <label>
                <input
                    type="text"
                    name="email"
                    required
                    placeholder="Email"
                    onInput={handleInput}
                />
            </label>
            <label>
                <input
                    type="password"
                    name="passwd"
                    required
                    placeholder="Contraseña"
                    onInput={handleInput}
                />
            </label>
            <label>
                <button className="buttonAdd" type="submit">
                    Crear una cuenta
                </button>
            </label>
        </form>
    );
}

export default RegisterForm;
