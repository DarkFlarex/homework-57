import React from "react";
import UserList from "./UserList";
import {User} from "../../type";

interface Props {
    users: User[];
}

const Users: React.FC <Props> = ({users}) => {
    return (
        <>
            {users.length === 0 ? (
                <div className="missing-UserList">
                    <span>Добавьте пользователя</span>
                </div>
            ) : (
            users.map(user =>(
                <UserList key={user.id} user={user}/>
            ))
            )}
        </>
    );
};

export default Users;