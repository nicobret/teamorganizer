import { realmApp } from "./realm.service";

const mongo = class {
  public static matchdaysCollection: Realm.Services.MongoDB.MongoDBCollection<any>;
  public static usersCollection: Realm.Services.MongoDB.MongoDBCollection<any>;

  constructor() {
    const user: Realm.User | null = realmApp.currentUser;
    const dataSource: string = import.meta.env.VITE_MONGO_DATA_SOURCE;
    const dbname: string = import.meta.env.VITE_MONGO_DATABASE_NAME;

    if (!user || !dataSource || !dbname) return;
    console.log("🚀 ~ file: mongo.service.ts:12 ~ mongo ~ user", user);

    const db = user.mongoClient(dataSource).db(dbname);
    mongo.matchdaysCollection = db.collection("matchdays");
    mongo.usersCollection = db.collection("users");
  }

  // public static async getMatchdays() {
  //   const data = await mongo.matchdaysCollection.find();
  //   console.log("🚀 ~ file: mongo.service.ts:21 ~ getMatchdays ~ data:", data);
  //   return data;
  // }
  // async getMatchday(id: string) {
  //   return mongo.matchdaysCollection.findOne({ _id: id });
  // }
  // async createMatchday(matchday: any) {
  //   return mongo.matchdaysCollection.insertOne(matchday);
  // }
  // async updateMatchday(matchday: any) {
  //   return mongo.matchdaysCollection.updateOne({ _id: matchday._id }, matchday);
  // }
  // async deleteMatchday(id: string) {
  //   return mongo.matchdaysCollection.deleteOne({ _id: id });
  // }
  // async getUsers() {
  //   return mongo.usersCollection.find();
  // }
  // async getUser(id: string) {
  //   return mongo.usersCollection.findOne({ _id: id });
  // }
  // async createUser(user: any) {
  //   return mongo.usersCollection.insertOne(user);
  // }
  // async updateUser(user: any) {
  //   return mongo.usersCollection.updateOne({ _id: user._id }, user);
  // }
  // async deleteUser(id: string) {
  //   return mongo.usersCollection.deleteOne({ _id: id });
  // }
};

export default mongo;
