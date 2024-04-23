function UserCard({ user }) {
  return (
    <div>
      <p>{`${user.name.first} ${user.name.last}`}</p>
    </div>
  );
}

export default UserCard;
