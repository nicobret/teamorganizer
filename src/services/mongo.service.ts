import { realmApp } from "./realm.service";

const client = realmApp.currentUser?.mongoClient(
  import.meta.env.VITE_MONGO_CLUSTER_NAME
);

const matchdaysCollection = client
  ?.db(import.meta.env.VITE_MONGO_DATABASE_NAME)
  .collection("matchdays");

const mongo = {
  async getMatchdays() {
    console.log("getMatchdays");
    return matchdaysCollection?.find();
  },
  async getMatchday(id: string) {
    return matchdaysCollection?.findOne({ _id: id });
  },
  async createMatchday(matchday: any) {
    return matchdaysCollection?.insertOne(matchday);
  },
  async updateMatchday(matchday: any) {
    return matchdaysCollection?.updateOne({ _id: matchday._id }, matchday);
  },
  async deleteMatchday(id: string) {
    return matchdaysCollection?.deleteOne({ _id: id });
  },
};

export default mongo;
