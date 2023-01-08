import { WishI } from '../../wishes/model/wish';
import { useWishes } from '../../wishes/hook/use.wishes';

export function WishItem({ item }: { item: WishI }) {
    const { handleSelect } = useWishes();

    return (
        <>
            <div className="container">
                <img
                    className="image"
                    src={item.image}
                    alt={item.name}
                    width="150px"
                    height="150px"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSelect(item);
                    }}
                />
            </div>
        </>
    );
}
