import { useState } from "react";
import Header from "./components/header";
import { User, userData } from "./lib/users";
import { Week, weeks } from "./lib/weeks";
import Availability from "./components/availability";
import Teams from "./components/teams";
import UserGroup from "./components/availability/components/UserGroup";

function App() {
  const [userId, setUserId] = useState(userData[0].id);
  console.log("🚀 ~ file: App.tsx:18 ~ App ~ userId:", userId);
  const [weekId, setWeekId] = useState(weeks[0].id);
  const [availablePlayersId, setAvailablePlayersId] = useState<number[]>([]);
  console.log(
    "🚀 ~ file: App.tsx:21 ~ App ~ availablePlayersId:",
    availablePlayersId
  );
  const [notAvailablePlayersId, setNotAvailablePlayersId] = useState<number[]>(
    []
  );
  console.log(
    "🚀 ~ file: App.tsx:25 ~ App ~ notAvailablePlayersId:",
    notAvailablePlayersId
  );

  const user = userData.find((user: User) => user.id === userId);

  function handleAvailabilityChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "Oui") {
      setAvailablePlayersId([...availablePlayersId, userId]);
      setNotAvailablePlayersId(
        notAvailablePlayersId.filter((id: number) => id !== userId)
      );
    } else {
      setNotAvailablePlayersId([...notAvailablePlayersId, userId]);
      setAvailablePlayersId(
        availablePlayersId.filter((id: number) => id !== userId)
      );
    }
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <Header />

      <div className="flex flex-col items-center justify-center gap-8 font-title text-3xl md:flex-row md:gap-12">
        <div>
          <label htmlFor="week">Semaine du</label>
          <select
            name="week"
            id="week"
            value={weekId}
            onChange={(e) => setWeekId(parseInt(e.target.value))}
            className="ml-4 border-x-0 border-b-2 border-t-0 border-emerald-400 py-1 hover:cursor-pointer hover:brightness-110 active:brightness-125"
          >
            {weeks.map((week: Week) => (
              <option key={week.id} value={week.id}>
                {week.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="user">Je m'appelle</label>
          <select
            name="user"
            id="user"
            value={userId}
            onChange={(e) => setUserId(parseInt(e.target.value))}
            className="ml-4 border-x-0 border-b-2 border-t-0 border-emerald-400 py-1 hover:cursor-pointer hover:brightness-110 active:brightness-125"
          >
            {userData.map((user: User) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset className="flex items-center justify-center gap-4 font-title text-3xl">
        <p>Je suis disponible</p>
        <input
          type="radio"
          id="available"
          name="available"
          value="Oui"
          checked={availablePlayersId.includes(userId)}
          onChange={handleAvailabilityChange}
          className="checked:bg-emerald-400 checked:hover:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 checked:focus:bg-emerald-400 checked:active:bg-emerald-400"
        />
        <label htmlFor="available">Oui</label>

        <input
          type="radio"
          id="notavailable"
          name="notavailable"
          value="Non"
          checked={notAvailablePlayersId.includes(userId)}
          onChange={handleAvailabilityChange}
          className="checked:bg-emerald-400 checked:hover:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 checked:focus:bg-emerald-400 checked:active:bg-emerald-400"
        />
        <label htmlFor="available">Non</label>
      </fieldset>

      <UserGroups
        userData={userData}
        availablePlayersId={availablePlayersId}
        notAvailablePlayersId={notAvailablePlayersId}
      />

      <Teams />
    </div>
  );
}

function UserGroups({
  availablePlayersId,
  notAvailablePlayersId,
  userData,
}: {
  availablePlayersId: number[];
  notAvailablePlayersId: number[];
  userData: User[];
}) {
  const [open, setOpen] = useState(false);

  const availableUsers = availablePlayersId.map((id) =>
    userData.find((user: User) => user.id === id)
  );
  console.log("🚀 ~ file: App.tsx:126 ~ availableUsers:", availableUsers);

  const unavailableUsers = notAvailablePlayersId.map((id) =>
    userData.find((user: User) => user.id === id)
  );
  console.log("🚀 ~ file: App.tsx:131 ~ unavailableUsers:", unavailableUsers);

  const waitingUsers = userData.filter(
    (user: User) =>
      ![...availablePlayersId, ...notAvailablePlayersId].includes(user.id) &&
      !user.retired
  );
  console.log("🚀 ~ file: App.tsx:138 ~ waitingUsers:", waitingUsers);

  const retiredUsers = userData.filter((user: User) => user.retired);
  console.log("🚀 ~ file: App.tsx:141 ~ retiredUsers:", retiredUsers);

  return (
    <div className="rounded-md border border-emerald-300 bg-emerald-50 px-4 py-3">
      <div className="flex items-center gap-8">
        <h2 className="text-xl">Joueurs</h2>
        <p className="text-emerald-500">{availableUsers.length}/10</p>
        <button onClick={() => setOpen(!open)} className="ml-auto">
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
