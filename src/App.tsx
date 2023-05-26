import { useEffect, useState } from "react";
import { realmApp } from "./services/realm.service";
import Home from "./Home";
// import * as Realm from "realm-web";
import mongo from "./services/mongo.service";
import matchday from "./types/matchday.type";

function App() {
  const [user, setUser] = useState<Realm.User | null>(realmApp.currentUser);
  const [data, setData] = useState<
    Realm.Services.MongoDB.MongoDBCollection<matchday>[] | null
  >([]);
  const dataSource: string = import.meta.env.VITE_MONGO_DATA_SOURCE;
  const dbname: string = import.meta.env.VITE_MONGO_DATABASE_NAME;

  async function login() {
    try {
      const credentials = Realm.Credentials.anonymous();
      const user = await realmApp.logIn(credentials);
      setUser(user);
    } catch (error: any) {
      console.log(
        "🚀 ~ file: index.tsx ~ line 73 ~ handleSubmit ~ error",
        error
      );
      alert("Erreur lors de la connexion: " + error.message);
    }
  }

  async function loadData() {
    if (!user) return;
    const data = await user
      .mongoClient(dataSource)
      .db(dbname)
      .collection("matchdays")
      .find();
    console.log("🚀 ~ file: App.tsx:27 ~ loadData ~ data:", data);
    setData(data);
  }

  useEffect(() => {
    if (!user) login();
    if (user && !data?.length) loadData();
  }, [user, data]);

  if (!user || !data) return <div className="animate-pulse">Chargement...</div>;
  return <Home data={data} setData={setData} />;
}

export default App;
