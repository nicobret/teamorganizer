import { realmApp } from "./realm.service";

if (!import.meta.env.VITE_MONGO_CLUSTER_NAME) {
  throw new Error("Missing VITE_MONGO_CLUSTER_NAME");
}
if (!import.meta.env.VITE_MONGO_DATABASE_NAME) {
  throw new Error("Missing VITE_MONGO_DATABASE_NAME");
}

const client = realmApp.currentUser?.mongoClient(
  import.meta.env.VITE_MONGO_CLUSTER_NAME
);

const weeksCollection = client
  ?.db(import.meta.env.VITE_MONGO_DATABASE_NAME)
  .collection("weeks");

const mongo = {
  async getWeeks() {
    return weeksCollection?.find();
  },
  async getWeek(id: string) {
    return weeksCollection?.findOne({ _id: id });
  },
  async createWeek(week: any) {
    return weeksCollection?.insertOne(week);
  },
  async updateWeek(week: any) {
    return weeksCollection?.updateOne({ _id: week._id }, week);
  },
  async deleteWeek(id: string) {
    return weeksCollection?.deleteOne({ _id: id });
  },
};

export default mongo;
