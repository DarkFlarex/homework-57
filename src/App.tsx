import './App.css'
import Users from "./components/Users/Users";
import UserForm from "./components/UserForm/UserForm";
import {useState} from "react";
import {User} from "./type";

const App = () => {
    const [users, setUsers] = useState<User[]>([]);

    const addUser = (user: User) =>{
        setUsers((prev) =>[...prev, user]);
    };

return (
    <>
        <div className={"container"}>
            <UserForm onSubmit={addUser}/>
            <Users users={users}/>
        </div>
    </>
);
};

export default App
