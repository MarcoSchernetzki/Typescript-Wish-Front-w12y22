import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../users/hook/use.users';
import { useWishes } from '../../wishes/hook/use.wishes';
import Swal from 'sweetalert2';
import './details.page.css';
import '../homePage/home.page.css';

function DetailsPage() {
    const navigate = useNavigate();

    const { users } = useUsers();
    const { wishes, handleDelete } = useWishes();

    const handleBuy = () => {
        Swal.fire(
            `Ey ${users.user?.name}!`,
            'Gracias por tu compra',
            'success'
        );
        navigate('/home');
    };

    if (!wishes.selectedWish) return <p>loading...</p>;
    if (wishes.selectedWish.inspiration)
        return (
            <>
                <main>
                    <div className="main-details">
                        <h2>Inspiración</h2>

                        <button
                            className="buttonReturn"
                            placeholder="inspiracion"
                            onClick={() => {
                                navigate('/inspo');
                            }}
                        >
                            Volver a inspiración
                        </button>
                        <button
                            className="buttonReturn"
                            placeholder="lista"
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
                        <div>{wishes.selectedWish?.price}€</div>
                    </div>
                </main>
            </>
        );
    return (
        <>
            <main>
                <div className="main-details">
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
                    <div>{wishes.selectedWish?.price}€</div>
                    <div></div>
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
                    <button className="buttonAdd" onClick={() => handleBuy()}>
                        Comprar
                    </button>
                </div>
            </main>
        </>
    );
}
export default DetailsPage;
