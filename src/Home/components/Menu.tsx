import { realmApp } from "../../services/realm.service";

function Menu({ setMenuOpen }: any) {
  const user = realmApp.currentUser;

  return (
    <div className="absolute right-0 top-0 flex w-32 flex-col items-end gap-6 bg-emerald-800 p-4">
      <button
        onClick={() => setMenuOpen(false)}
        className="text-2xl"
        aria-label="Fermer le menu"
      >
        &times;
      </button>

      <p className="max-w-[6rem] overflow-hidden text-ellipsis">
        {user?.profile.email}
      </p>
      <button
        className="underline underline-offset-4"
        onClick={() => window.alert("En construction")}
      >
        Admin
      </button>
      <button
        className="underline underline-offset-4"
        onClick={() => {
          user?.logOut();
          window.location.reload();
        }}
      >
        Déconnexion
      </button>
    </div>
  );
}

export default Menu;
