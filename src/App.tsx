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
        <div className={"container-fluid"}>
            <div className="row mt-2 d-flex justify-content-between">
                <div className="col-3 border border-2 rounded-3 p-3 h-100"> <UserForm onSubmit={addUser}/></div>
                <div className="d-flex align-items-center flex-column col-7 border border-2 rounded-3 p-3"> <Users users={users}/></div>
            </div>
        </div>
    </>
);
};

export default App
