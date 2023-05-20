import { useState } from "react";
// import Home from "./Home";
import Signin from "./auth";
import { realmApp } from "./services/realm.service";

function App() {
  const [user, setUser] = useState<Realm.User | null>(realmApp.currentUser);

  // if (user) return <Home user={user} />;
  if (user)
    return (
      <div className="bg-gray-100 p-4">
        <p>Vous êtes connecté, {user.profile.email}</p>
        <button
          className="mt-4 rounded-md bg-blue-500 px-3 py-2 text-white"
          onClick={() => {
            realmApp.currentUser?.logOut();
            setUser(null);
          }}
        >
          Déconnexion
        </button>
      </div>
    );

  return <Signin setUser={setUser} />;
}

export default App;
