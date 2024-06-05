import React from "react";
import {User} from "../../type";

interface Props{
    user:User;
}


const UserList: React.FC<Props> = ({user}) => {



    return (
        <div className="UserList">
            <span>Имя:{user.name}</span>
            <span>Email:{user.email}</span>
            <span>Активен: {user.active}</span>
            <span>Роль:{user.role}</span>
        </div>

    );
};

export default UserList;