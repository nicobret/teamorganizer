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

      <ul>
        {users.length === 0
          ? "-"
          : users.map((user: User) => (
              <li key={user.id}>
                <p>{user.name}</p>
              </li>
            ))}
      </ul>
    </div>
  );
}
