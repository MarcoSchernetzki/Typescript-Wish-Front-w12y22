import { SyntheticEvent, useState } from 'react';
import { useUsers } from '../../users/hook/use.users';
import { ProtoUserI } from '../../users/model/user';
import './login.form.css';

export function LoginForm() {
    const { handleLogin } = useUsers();
    const [loginFormState, setLoginFormState] = useState({
        email: '',
        passwd: '',
    });

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setLoginFormState({
            ...loginFormState,
            [element.name]: element.value,
        });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();

        handleLogin(loginFormState as ProtoUserI);
    };

    return (
        <form onSubmit={handleSubmit}>
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
                <button type="submit">Entrar</button>
            </label>
        </form>
    );
}

export default LoginForm;
