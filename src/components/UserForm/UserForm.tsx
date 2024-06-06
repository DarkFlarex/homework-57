import React, {useState} from "react";
import {User, UserMutation} from "../../type";

interface Props{
    onSubmit:(user: User) => void;
}

const initialState: UserMutation={
    name: '',
    email: '',
    active: false,
    role: 'user',
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
    const [userMutation, setUserMutation]=useState<UserMutation>(initialState);

    const changeUser =(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        setUserMutation((prev)=>({
            ...prev,
            [event.target.name]:event.target.value,
        }));
    };

    const changeBooleanValue = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setUserMutation((prev)=>({
            ...prev,
            [event.target.name]:event.target.checked,
        }));
    };

    const onFormSubmit =(event:React.FormEvent) =>{
        event.preventDefault();

        onSubmit({
            id:Math.random().toString(),
            ...userMutation,
        });

    setUserMutation(initialState);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <h4>Добавить нового пользователя</h4>
            <div className={"form-group"}>
                <label htmlFor="name">
                    Имя:
                </label>
                <input
                    name="name"
                    id="name"
                    required
                    className="form-control"
                    onChange={changeUser}
                    value={userMutation.name}
                />
            </div>
            <div className={"form-group"}>
                <label htmlFor="email">
                    Email:
                </label>
                <input
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={changeUser}
                    value={userMutation.email}
                />
            </div>
            <div className={"form-group"}>
                <label htmlFor="active">
                    Активен:
                </label>
                <input
                    type="checkbox"
                    name="active"
                    id="active"
                    className="form-control"
                    onChange={changeBooleanValue}
                   checked={userMutation.active}
                />
            </div>
            <div className={"form-group"}>
                <label htmlFor="role">
                    Роль:
                </label>
                <select
                    name="role"
                    id="role"
                    required
                    className="form-control"
                    onChange={changeUser}
                    value={userMutation.role}
                >
                    <option value="user">
                        Пользователь
                    </option>
                    <option value="editor">
                        Редактор
                    </option>
                    <option value="admin">
                        Администратор
                    </option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Create</button>
        </form>
    );
};

export default UserForm;