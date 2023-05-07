import { useState } from "react";
import Header from "./components/header";
import { User, userData } from "./lib/users";
import { Week, weeks } from "./lib/weeks";
import Availability from "./components/availability";
import Teams from "./components/teams";
import UserGroup from "./components/availability/components/UserGroup";

function App() {
  const [user, setUser] = useState(userData[0]);
  const [week, setWeek] = useState(weeks[0]);
  const [userList, setUserList] = useState<User[]>(userData);

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4">
      <Header userData={userData} user={user} setUser={setUser} />

      <Availability user={user} userList={userList} setUserList={setUserList} />

      <UserGroups userList={userList} />

      <Teams />
    </div>
  );
}

function UserGroups({ userList }: { userList: User[] }) {
  const [open, setOpen] = useState(false);
  console.log("🚀 ~ file: App.tsx:29 ~ UserGroups ~ open:", open);
  const availableUsers = userList.filter(
    (user: User) => user.available === "Oui"
  );
  const unavailableUsers = userList.filter(
    (user: User) => user.available === "Non"
  );
  const waitingUsers = userList.filter(
    (user: User) => !user.retired && user.available === null
  );
  const retiredUsers = userList.filter((user: User) => user.retired);

  return (
    <div className="rounded-md border border-emerald-300 px-4 py-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl">Réponses</h2>
        <button onClick={() => setOpen(!open)}>
          {open ? "Fermer" : "Ouvrir"}
        </button>
      </div>

      {open && (
        <div className="mt-4 grid-cols-4 gap-4 md:grid">
          <UserGroup title="Ils n'ont pas répondu" users={waitingUsers} />
          <UserGroup title="Ils sont chauds" users={availableUsers} />
          <UserGroup title="Ils ne sont pas chauds" users={unavailableUsers} />
          <UserGroup
            title="Ils ont raccroché les crampons"
            users={retiredUsers}
          />
        </div>
      )}
    </div>
  );
}

export default App;
