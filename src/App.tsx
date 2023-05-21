import { useState } from "react";
import { realmApp } from "./services/realm.service";
import Signin from "./auth";
import Home from "./Home";

function App() {
  const [user, setUser] = useState<Realm.User | null>(realmApp.currentUser);
  const [weeks, setWeeks] = useState<any[]>([]);

  if (user) return <Home weeks={weeks} />;
  return <Signin setUser={setUser} setWeeks={setWeeks} />;
}

export default App;
