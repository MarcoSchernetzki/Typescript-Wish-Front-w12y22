import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../users/hook/use.users';
import { useWishes } from '../../wishes/hook/use.wishes';
import './details.page.css';

function DetailsPage() {
    const navigate = useNavigate();

    const { users } = useUsers();
    const { wishes, handleDelete } = useWishes();

    if (!wishes.selectedWish) return <p>loading...</p>;
    if (wishes.selectedWish.inspiration)
        return (
            <>
                <main>
                    <h2>Inspiración</h2>

                    <button
                        className="buttonReturn"
                        onClick={() => {
                            navigate('/inspo');
                        }}
                    >
                        Volver a inspiración
                    </button>
                    <button
                        className="buttonReturn"
                        onClick={() => {
                            navigate('/home');
                        }}
                    >
                        Volver a mi lista
                    </button>
                    <img
                        src={wishes.selectedWish?.image}
                        alt={wishes.selectedWish?.name}
                        width="320px"
                    ></img>
                    <div>{wishes.selectedWish?.name}</div>
                    <div>{wishes.selectedWish?.comments}</div>
                    <div>{wishes.selectedWish?.price}</div>
                </main>
            </>
        );
    return (
        <>
            <main>
                <h2>Uno de tus deseos es</h2>
                <button
                    className="buttonReturn"
                    onClick={() => {
                        navigate('/home');
                    }}
                >
                    Volver a mi lista
                </button>
                <img
                    src={wishes.selectedWish?.image}
                    alt={wishes.selectedWish?.name}
                    width="320px"
                ></img>
                <div>{wishes.selectedWish?.name}</div>
                <div>{wishes.selectedWish?.comments}</div>
                <div>{wishes.selectedWish?.price}</div>
                <button
                    className="buttonDelete"
                    onClick={(e) => {
                        navigate('/home');
                        e.preventDefault();
                        handleDelete(
                            wishes.selectedWish?.id as string,
                            users.token as string
                        );
                    }}
                >
                    Eliminar
                </button>
                <button
                    className="buttonUpdate"
                    onClick={() => {
                        navigate('/update');
                    }}
                >
                    Editar
                </button>
                <button className="buttonBuy">Comprar</button>
            </main>
        </>
    );
}
export default DetailsPage;
