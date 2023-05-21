import { realmApp } from "../../services/realm.service";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { IoClose, IoSettingsOutline } from "react-icons/io5";

type MenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

function Menu({ open, setOpen }: MenuProps) {
  const user = realmApp.currentUser;

  return (
    <ul
      className={`fixed right-0 top-0 z-10 flex w-full flex-col gap-6 bg-emerald-800 p-6 transition-all duration-200 ease-in-out ${
        open ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <li>
        <button
          onClick={() => setOpen(false)}
          className="float-right"
          aria-label="Fermer le menu"
        >
          <IoClose className="text-2xl" />
        </button>
      </li>

      <li className="flex items-center gap-4">
        <AiOutlineUser />
        <p className="">{user?.profile.email}</p>
      </li>

      <li>
        <button
          className="flex items-center gap-4"
          onClick={() => window.alert("En construction")}
        >
          <IoSettingsOutline />
          Admin
        </button>
      </li>

      <li>
        <button
          className="flex items-center gap-4"
          onClick={() => {
            user?.logOut();
            window.location.reload();
          }}
        >
          <AiOutlineLogout />
          Déconnexion
        </button>
      </li>
    </ul>
  );
}

export default Menu;
