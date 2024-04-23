import { useUsers } from "../contexts/UserContext";
import UserCard from "./UserCard";

function CardList() {
  const { users } = useUsers();
  return (
    <div>
      {users.map((user, i) => (
        <UserCard key={user.login.uuid} user={user} />
      ))}
    </div>
  );
}

export default CardList;
