import './App.css'
import Users from "./components/Users/Users";
import UserForm from "./components/UserForm/UserForm";
import {useState} from "react";
import {User} from "./type";


const App = () => {
    const [users, setUsers] = useState<User[]>([
    {id:'1', name: 'Amantai', email:'amantaimm@mail.ru', active:true, role:'пользователь'}
    ]);

  return (
      <>
          <div className={"container"}>
              <UserForm />
              <Users users={users}/>
          </div>
      </>
  )
}

export default App
