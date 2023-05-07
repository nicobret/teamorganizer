import { User } from "../../lib/users";
import UserGroup from "./components/UserGroup";

export type Teams = {
  week: number;
  available: User[];
  unavailable: User[];
  teamA: User[];
  teamB: User[];
};

interface TeamProps {
  user: User;
  userList: User[];
  setUserList: (userList: User[]) => void;
}

export default function Team({ user, userList, setUserList }: TeamProps) {
  const currentUser = userList.find((u: User) => u.id === user.id);
  console.log("🚀 ~ file: Team.tsx:19 ~ Team ~ currentUser:", currentUser);

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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setUserList((prevState: User[]) => {
      return prevState.map((user: User) => {
        if (user.id === currentUser?.id) {
          return { ...user, available: e.target.value };
        } else {
          return user;
        }
      });
    });
  }

  return (
    <div className="space-y-4 border p-4">
      <h2 className="text-xl">Disponibilité</h2>

      <fieldset>
        <legend>Je suis disponible</legend>
        <input
          type="radio"
          id="available"
          name="available"
          value="Oui"
          checked={currentUser?.available === "Oui"}
          onChange={handleChange}
        />
        <label htmlFor="available">Oui</label>

        <input
          type="radio"
          id="available"
          name="available"
          value="Non"
          checked={currentUser?.available === "Non"}
          onChange={handleChange}
        />
        <label htmlFor="available">Non</label>
      </fieldset>

      <UserGroup title="Joueurs disponibles" users={availableUsers} />
      <UserGroup title="Joueurs indisponibles" users={unavailableUsers} />
      <UserGroup title="Joueurs en attente" users={waitingUsers} />
      <UserGroup title="Ils ont raccroché les crampons" users={retiredUsers} />
    </div>
  );
}
