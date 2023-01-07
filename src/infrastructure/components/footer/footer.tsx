import { useUsers } from '../../../features/users/hook/use.users';
import styles from './footer.module.css';

export function Footer() {
    const { users } = useUsers();
    if (!users.user) return <p></p>;

    return (
        <footer className={styles.footer}>
            <div>
                <img src="../../../../assets/iwish.svg" alt="iWish logo" />
            </div>
        </footer>
    );
}
