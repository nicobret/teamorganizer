import * as Realm from "realm-web";
import { useState } from "react";
import Home from "./Home";
import Signin from "./auth/Signin";

const realmApp = new Realm.App({ id: import.meta.env.VITE_REALM_APP_ID });

function App() {
  const [user, setUser] = useState<Realm.User | null>(realmApp.currentUser);

  // useEffect(() => {
  //   fetchUserData();
  //   return () => {
  //     setUsers([]);
  //     setError(null);
  //   };
  // }, []);

  if (user) return <Home user={user} />;
  return <Signin app={realmApp} setUser={setUser} />;
}

export default App;
