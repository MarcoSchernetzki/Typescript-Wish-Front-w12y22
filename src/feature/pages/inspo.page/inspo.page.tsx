import { useNavigate } from 'react-router-dom';
import { WishItem } from '../../components/wish.item/wish.item';
import { useWishes } from '../../wishes/hook/use.wishes';
import './inspo.page.css';

function InspoPage() {
    const navigate = useNavigate();
    const { wishes } = useWishes();

    return (
        <>
            <main>
                <h2 className="inspoIdeas">Algunas ideas de regalo</h2>
                <div className="list">
                    <ul className="wishlist">
                        {wishes.wishes
                            .filter((wish) => wish.inspiration === true)
                            .map((item) => (
                                <li key={item.id} className="item">
                                    <WishItem item={item}></WishItem>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="divButton">
                    <button
                        className="buttonReturn"
                        onClick={() => {
                            navigate('/home');
                        }}
                    >
                        Volver a mi lista
                    </button>{' '}
                </div>
            </main>
        </>
    );
}
export default InspoPage;

// <WishesList item={wishServices.findInspo() as WishI[]} />
