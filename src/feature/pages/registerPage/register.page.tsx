import { Link } from 'react-router-dom';
import RegisterForm from '../../components/registerForm/register.form';

function RegisterPage() {
    return (
        <main>
            <h1>Registro</h1>
            <RegisterForm />
            <div className="div">
                <Link to={'./login'} className="link">
                    ¿Tienes cuenta? Identifícate
                </Link>
            </div>
            <div className="img">
                <img src="../../../../assets/iwish.svg" alt="iWish logo" />
            </div>
        </main>
    );
}
export default RegisterPage;
