type matchday = {
  _id: string;
  date: Date;
  status: string;
  availablePlayers: Realm.User[];
  teamA: Realm.User[];
  teamB: Realm.User[];
};

export default matchday;
