import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <div className="w-full h-screen bg-[#000] text-[#fff] flex items-center justify-center">
          <Login />
          <Profile />
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;
