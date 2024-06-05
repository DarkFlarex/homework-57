import React from "react";
import UserList from "./UserList";
import {User} from "../../type";


interface Props {
    users: User[];
}
const Users: React.FC <Props> = ({users}) => {

    return (
        <>
            {users.map(user =>(
                <UserList key={user.id} user={user}/>
            ))}
        </>
    );
};

export default Users;