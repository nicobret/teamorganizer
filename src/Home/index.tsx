import { useState, useEffect } from "react";
import { BsCalendarWeek, BsClockHistory } from "react-icons/bs";
import Header from "./components/Header";
import MatchDayCard from "./components/MatchDayCard";
import History from "./components/History";
import Calendar from "./components/Calendar";
import Info from "./components/Info";
import matchday from "../types/matchday.type";
// import mongo from "../services/mongo.service";
import { realmApp } from "../services/realm.service";

type HomeProps = {
  matchdays: matchday[];
  setMatchdays: (matchdays: matchday[]) => void;
};

function Home({ matchdays, setMatchdays }: HomeProps) {
  const [historyOpen, setHistoryOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const user = realmApp.currentUser;

  useEffect(() => {
    if (!user) return;
    async function fetchMatchDays() {
      try {
        if (!user) return;
        const data = await user
          .mongoClient("matchdayservice")
          .db("teamorganizer")
          .collection("matchdays")
          .find({});
        console.log("🚀 ~ file: index.tsx:33 ~ fetchMatchDays ~ data:", data);
        setMatchdays(data || []);
      } catch (error: any) {
        console.log(
          "🚀 ~ file: index.tsx ~ line 73 ~ handleSubmit ~ error",
          error
        );
      }
    }
    fetchMatchDays();
    return () => setMatchdays([]);
  }, []);

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
          {!matchdays.length ? (
            <p className="text-center text-orange-50">Aucun match à venir</p>
          ) : (
            matchdays.map((matchday) => (
              <MatchDayCard key={matchday._id} matchday={matchday} />
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default Home;
