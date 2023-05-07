import { User } from "../../../lib/users";

export default function UserGroup({
  title,
  users,
}: {
  title: String;
  users: User[];
}) {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>

      <div>
        {users.map((user: User) => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
