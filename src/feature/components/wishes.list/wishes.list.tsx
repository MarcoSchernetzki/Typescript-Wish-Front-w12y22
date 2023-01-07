import { useEffect } from 'react';
import { useUsers } from '../../users/hook/use.users';
import { useWishes } from '../../wishes/hook/use.wishes';
import { WishI } from '../../wishes/model/wish';
import { WishItem } from '../wish.item/wish.item';
import './wishes.list.css';

export function WishesList() {
    const { users } = useUsers();
    const { handleLoad } = useWishes();
    useEffect(() => {
        handleLoad();
    }, [handleLoad, users]);

    if (!users) return <p>loading...</p>;
    return (
        <>
            <ul className="wishlist">
                {users.user?.myWishes.map((item: WishI) => (
                    <li key={item.id}>
                        <WishItem item={item}></WishItem>
                    </li>
                ))}
            </ul>
        </>
    );
}
