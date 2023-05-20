import { useState } from "react";
import UserGroups from "./components/UserGroups";
import Teams from "./components/teams";
import { userData } from "../lib/users";
import { weeks } from "../lib/weeks";
import Header from "../components/header";

function Home({ user }: { user: Realm.User }) {
  const users = userData;
  const [userId, setUserId] = useState(users[0].id);
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

      <p>User ID: {user.id}</p>

      <div className="flex flex-col gap-4 text-xl md:flex-row md:gap-12">
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
          <label htmlFor="user">Nom</label>
          <select
            name="user"
            id="user"
            value={userId}
            onChange={(e) => setUserId(parseInt(e.target.value))}
            className="ml-4 border-b-2 border-emerald-400 py-1 hover:cursor-pointer hover:brightness-110 active:brightness-125"
          >
            {userData.map((user: User) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset className="flex justify-center gap-4 text-xl">
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

export default Home;
