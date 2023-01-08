import { useNavigate } from 'react-router-dom';
import { WishesList } from '../../components/wishes.list/wishes.list';
import './home.page.css';

export function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <main>
                <div className="buttons">
                    <button
                        className="buttonAdd"
                        onClick={() => {
                            navigate('/create');
                        }}
                    >
                        Añade un deseo
                    </button>
                    <button
                        className="buttonInspo"
                        onClick={() => {
                            navigate('/inspo');
                        }}
                    >
                        Inspírate
                    </button>
                </div>
                <h1 className="titulo">Tu lista de deseos</h1>
                <div>
                    <WishesList />
                </div>
            </main>
        </>
    );
}
