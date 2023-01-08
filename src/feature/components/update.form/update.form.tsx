import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../users/hook/use.users';
import { useWishes } from '../../wishes/hook/use.wishes';

export function UpdateForm() {
    const navigate = useNavigate();

    const { users } = useUsers();
    const { wishes, handleUpdate } = useWishes();
    const [updateFormState, setUpdateFormState] = useState({
        name: wishes.selectedWish?.name,
        image: wishes.selectedWish?.image,
        origin: wishes.selectedWish?.origin,
        price: wishes.selectedWish?.price,
        comments: wishes.selectedWish?.comments,
    });

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setUpdateFormState({
            ...updateFormState,
            [element.name]: element.value,
        });
    };

    const handleUpdateSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleUpdate(
            wishes.selectedWish?.id as string,
            updateFormState,
            users.token as string
        );
    };

    return (
        <div>
            <form onSubmit={handleUpdateSubmit}>
                <label>
                    <input
                        placeholder="name"
                        type="text"
                        name="name"
                        value={updateFormState.name}
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="url"
                        name="image"
                        value={updateFormState.image}
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="origin"
                        value={updateFormState.origin}
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="price"
                        value={updateFormState.price}
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="comments"
                        value={updateFormState.comments}
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <button type="submit">Guardar</button>
                    <button
                        onClick={() => {
                            navigate('/home');
                        }}
                    >
                        Cancelar
                    </button>
                </label>
            </form>
        </div>
    );
}

export default UpdateForm;
