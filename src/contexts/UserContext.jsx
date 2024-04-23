import { createContext, useContext, useMemo, useState } from "react";

export const userContext = createContext();

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [gigi, setGigi] = useState("Gigi Mortier");
  const [jojo, setJojo] = useState("Jojo Mortier");

  const usersValue = useMemo(() => {
    return {
      users,
      setUsers,
      gigi,
      setGigi,
      jojo,
      setJojo,
    };
  }, [users, gigi, jojo]);

  return (
    <userContext.Provider value={usersValue}>{children}</userContext.Provider>
  );
}

export function useUsers() {
  return useContext(userContext);
}
