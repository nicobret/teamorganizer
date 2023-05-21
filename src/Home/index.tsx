// import { useState } from "react";
// import { realmApp } from "../services/realm.service";
import { BsCalendarWeek, BsClockHistory } from "react-icons/bs";
import Header from "./components/Header";

function Home({ weeks }: any) {
  console.log("🚀 ~ file: index.tsx:7 ~ Home ~ weeks:", weeks);
  // const [historyOpen, setHistoryOpen] = useState(false);
  // const [calendarOpen, setCalendarOpen] = useState(false);
  // const user = realmApp.currentUser;

  return (
    <div className="relative">
      <div className="absolute top-0 z-0 h-48 w-full bg-emerald-800" />
      <div className="absolute top-0 z-10 w-full">
        <Header />

        <main>
          <section className="flex items-center justify-around p-4 text-orange-50">
            <button>
              <BsClockHistory />
            </button>
            <p>
              Semaine du <strong>8 mai 2023</strong>
            </p>
            <button>
              <BsCalendarWeek />
            </button>
          </section>

          <section>
            <div className="m-2 rounded-lg bg-white p-4 shadow-sm">
              <h2 className="text-2xl">Lundi 8 mai</h2>
              <p>Joueurs disponibles</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
