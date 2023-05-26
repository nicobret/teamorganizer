import { useState } from "react";
import { realmApp } from "../services/realm.service";
import matchday from "../types/matchday.type";
import { BsCalendarWeek, BsClockHistory } from "react-icons/bs";
import Calendar from "./components/Calendar";
import Header from "./components/Header";
import History from "./components/History";
import Info from "./components/Info";
import MatchDayCard from "./components/MatchDayCard";

type HomeProps = {
  data: matchday[];
  setData: (data: any[]) => void;
};

function Home({ data, setData }: HomeProps) {
  // const [matchdays, setMatchdays] = useState<matchday[]>([]);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const user = realmApp.currentUser;

  return (
    <div className="mx-auto h-screen max-w-6xl">
      <Header />

      <main>
        <Info />
        <section className="my-4 flex items-center justify-between p-2 text-orange-50">
          <button
            className="rounded-full bg-emerald-700 px-6 py-3 shadow-md"
            onClick={() => setHistoryOpen(!historyOpen)}
          >
            <BsClockHistory />
          </button>
          <p className="text-center text-lg">
            Prochain match :
            <br />
            Semaine du <strong>8 mai 2023</strong>
          </p>
          <button
            className="rounded-full bg-emerald-700 px-6 py-3 shadow-md"
            onClick={() => setCalendarOpen(!calendarOpen)}
          >
            <BsCalendarWeek />
          </button>
        </section>

        <History open={historyOpen} setOpen={setHistoryOpen} />
        <Calendar open={calendarOpen} setOpen={setCalendarOpen} />

        <section className="space-y-4">
          {!data.length ? (
            <p className="text-center text-orange-50">Aucun match à venir</p>
          ) : (
            data
              .sort((a, b) => b.date.valueOf() - a.date.valueOf())
              .map((matchday: matchday) => (
                <MatchDayCard key={matchday._id} matchday={matchday} />
              ))
          )}
        </section>
      </main>
    </div>
  );
}

export default Home;
