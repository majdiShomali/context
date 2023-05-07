import "./App.css";
import Comp1 from "./components/comp1";
import UserProvider from "./UserContext";

function App() {
  return (
    <UserProvider>
      <Comp1 />
    </UserProvider>
  );
}

export default App;
