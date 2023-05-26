import { useEffect, useState } from "react";
import { realmApp } from "./services/realm.service";
import Home from "./Home";
import matchday from "./types/matchday.type";
import * as Realm from "realm-web";

function App() {
  const [user, setUser] = useState<Realm.User | null>(realmApp.currentUser);
  console.log("🚀 ~ file: App.tsx:9 ~ App ~ user:", user);
  const [data, setData] = useState<matchday[] | null>([]);
  const dataSource: string = import.meta.env.VITE_MONGO_DATA_SOURCE;
  const dbname: string = import.meta.env.VITE_MONGO_DATABASE_NAME;

  async function login() {
    try {
      const credentials = Realm.Credentials.anonymous();
      const user = await realmApp.logIn(credentials);
      setUser(user);
    } catch (error: any) {
      alert("Erreur lors de la connexion: " + error.message);
    }
  }

  async function loadData() {
    try {
      if (!user) return;
      const data = await user
        .mongoClient(dataSource)
        .db(dbname)
        .collection("matchdays")
        .find();
      setData(data);
    } catch (error: any) {
      alert("Erreur lors du chargement des données: " + error.message);
    }
  }

  useEffect(() => {
    if (!user) login();
    if (user && !data?.length) loadData();
  }, [user, data]);

  if (!user || !data) return <div className="animate-pulse">Chargement...</div>;
  return <Home data={data} setData={setData} />;
}

export default App;
