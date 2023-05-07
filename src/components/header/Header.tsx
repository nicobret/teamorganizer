import { User } from "../../lib/users";
import { weeks } from "../../lib/weeks";
import { useState } from "react";

interface HeaderProps {
  userData: User[];
  user: User;
  setUser: (user: User) => void;
}

export default function Header({ userData, user, setUser }: HeaderProps) {
  const [week, setWeek] = useState(1);

  return (
    <div className="flex items-center gap-4 border p-4">
      <h1>Five</h1>

      <p className="ml-auto">
        Semaine du
        <select
          className="ml-2"
          name="weeks"
          id="weeks"
          onChange={(e) => setWeek(Number(e.target.value))}
          defaultValue={week}
        >
          {weeks.map((week) => (
            <option key={week.id} value={week.id}>
              {week.name}
            </option>
          ))}
        </select>
      </p>

      <p className="ml-2">
        Je suis
        <select
          className="ml-2"
          name="users"
          id="users"
          onChange={(e) =>
            setUser(
              userData.find(
                (user: User) => user.id === Number(e.target.value)
              ) || userData[0]
            )
          }
          defaultValue={user.id}
        >
          {userData
            .sort((a: User, b: User) => a.name.localeCompare(b.name))
            .map((user: User) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
        </select>
      </p>
    </div>
  );
}
