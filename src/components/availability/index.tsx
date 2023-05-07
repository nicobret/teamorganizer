import { User } from "../../lib/users";
import UserGroup from "./components/UserGroup";

interface TeamProps {
  user: User;
  userList: User[];
  setUserList: React.Dispatch<React.SetStateAction<User[]>>;
}

export default function Team({ user, userList, setUserList }: TeamProps) {
  const currentUser = userList.find((u: User) => u.id === user.id);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserList(
      userList.map((u: User) =>
        u.id === user.id ? { ...u, available: e.target.value } : u
      )
    );
  }

  return (
    <fieldset className="flex items-center justify-center gap-4">
      <p className="font-title text-2xl italic">Je suis disponible</p>
      <input
        type="radio"
        id="available"
        name="available"
        value="Oui"
        checked={currentUser?.available === "Oui"}
        onChange={handleChange}
        className="form-radio checked:bg-emerald-400 checked:hover:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 checked:focus:bg-emerald-400 checked:active:bg-emerald-400"
      />
      <label htmlFor="available">Oui</label>

      <input
        type="radio"
        id="notavailable"
        name="notavailable"
        value="Non"
        checked={currentUser?.available === "Non"}
        onChange={handleChange}
      />
      <label htmlFor="available">Non</label>
    </fieldset>
  );
}
