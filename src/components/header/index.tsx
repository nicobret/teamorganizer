import { User } from "../../lib/users";
import { weeks } from "../../lib/weeks";
import { useState } from "react";
import NewUserModal from "./components/NewUserModal";

interface HeaderProps {
  userData: User[];
  user: User;
  setUser: (user: User) => void;
}

export default function Header({ userData, user, setUser }: HeaderProps) {
  const [week, setWeek] = useState(1);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-6 border-t-8 border-emerald-100 py-2 font-title text-2xl italic md:gap-12">
        <h1 className="ml-2 whitespace-nowrap text-4xl text-emerald-500">
          Team Organizer
        </h1>

        <div className="ml-auto flex items-center gap-2">
          <p className="hidden md:block">Semaine du</p>

          <select
            className="form-select border-x-0 border-b-2 border-t-0 border-emerald-400 py-1 font-sans text-xl hover:cursor-pointer hover:brightness-110 active:brightness-125"
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
        </div>

        {/* <button
          className="rounded border-2 border-emerald-400 px-3 py-1 transition hover:brightness-110 active:brightness-125"
          onClick={() => setOpen(true)}
        >
          Ajouter un joueur
        </button> */}

        <div className="flex items-center gap-2">
          <p className="hidden md:block">Je suis</p>
          <select
            className="form-select border-b-2 border-emerald-400 py-1 font-sans hover:cursor-pointer hover:brightness-110 active:brightness-125"
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
        </div>
      </div>

      <NewUserModal open={open} setOpen={setOpen} />
    </>
  );
}
