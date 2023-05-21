import { useState } from "react";
import { realmApp } from "./services/realm.service";
import Signin from "./auth";
import Home from "./Home";
import matchday from "./types/matchday.type";

function App() {
  const [user, setUser] = useState<Realm.User | null>(realmApp.currentUser);
  const [matchdays, setMatchdays] = useState<matchday[]>([]);

  if (user) return <Home matchdays={matchdays} setMatchdays={setMatchdays} />;
  return <Signin setUser={setUser} setMatchdays={setMatchdays} />;
}

export default App;
