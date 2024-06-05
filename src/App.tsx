import './App.css'
import Users from "./components/Users/Users";
import UserForm from "./components/UserForm/UserForm";


    const App = () => {


  return (
      <>
          <div className={"container"}>
              <UserForm />
              <Users/>
          </div>
      </>
  )
    }

export default App
