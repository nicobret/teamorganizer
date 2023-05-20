import { useState } from "react";

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
    <div className="m-2 rounded-md border border-emerald-300 bg-emerald-50 px-4 py-3">
      <div className="flex items-center gap-8">
        <h2 className="text-xl">Joueurs</h2>
        <p className="text-emerald-500">{availableUsers.length}/10</p>
        <button onClick={() => setOpen(!open)} className="ml-auto">
          {open ? "Fermer" : "Ouvrir"}
        </button>
      </div>

      {open && (
        <div className="mt-4 grid grid-cols-2 gap-4 divide-x-2">
          <div>
            <UserGroup title="Ils n'ont pas répondu" users={waitingUsers} />

            <UserGroup
              title="Ils ont raccroché les crampons"
              users={retiredUsers}
            />
          </div>

          <div>
            <UserGroup title="Ils sont chauds" users={availableUsers} />
            <UserGroup
              title="Ils ne sont pas chauds"
              users={unavailableUsers}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default UserGroups;
