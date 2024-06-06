import React from "react";
import {User} from "../../type";

interface Props{
    user:User;
}

const UserList: React.FC<Props> = ({user}) => {
    const showActive = (active: boolean) => {
        if (active) {
            return "да";
        } else {
            return "нет";
        }
    };

    return (
        <div className="UserList col-5 row p-3 border border-2 rounded-3 p-3 mb-3">
            <span className="user-name p-2 mb-2 border border-2 rounded-3">Имя: {user.name}</span>
            <span className="user-email p-2 mb-2 border border-2 rounded-3">Email: {user.email}</span>
            <span className="user-active p-2 mb-2 border border-2 rounded-3">Активен: {showActive(user.active)}</span>
            <span className="user-role p-2 mb-2 border border-2 rounded-3">Роль: {user.role}</span>
        </div>
    );
};

export default UserList;