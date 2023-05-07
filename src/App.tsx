import { useState } from "react";
import Header from "./components/header/Header";
import { User, userData } from "./lib/users";
import { Week, weeks } from "./lib/weeks";
import Availability from "./components/availability";
import Teams from "./components/teams";

function App() {
  const [user, setUser] = useState(userData[0]);
  const [week, setWeek] = useState(weeks[0]);
  const [userList, setUserList] = useState<User[]>(userData);

  return (
    <div className="mx-auto max-w-6xl border">
      <Header userData={userData} user={user} setUser={setUser} />

      <div className="grid grid-cols-4 border">
        <Availability
          user={user}
          userList={userList}
          setUserList={setUserList}
        />

        <Teams />
      </div>
    </div>
  );
}

export default App;
