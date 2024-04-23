import "./App.css";
import { useEffect } from "react";
import CardList from "./components/CardList";
import { useUsers } from "./contexts/UserContext";

function App() {
  const { setUsers } = useUsers();

  async function getUsers() {
    const response = await fetch("https://randomuser.me/api/?results=15", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    setUsers(data.results);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <CardList />
    </>
  );
}

export default App;

