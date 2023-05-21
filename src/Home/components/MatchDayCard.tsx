import matchday from "../../types/matchday.type";

function MatchDayCard({ matchday }: { matchday: matchday }) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("You clicked submit.");
  }
  return (
    <div className="m-2 rounded-md border-2 border-emerald-200 bg-white p-4 shadow-sm">
      <h2 className="text-2xl font-medium">
        {matchday.date.toLocaleDateString("fr")}
      </h2>
      <form
        className="flex items-center justify-between gap-2"
        onSubmit={handleSubmit}
      >
        <p>Je suis dispo :</p>

        <div className="flex items-center gap-2">
          <input type="radio" name="available" value="yes" />
          <p>Oui</p>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="available" value="no" />
          <p>Non</p>
        </div>

        <input
          type="submit"
          value="Valider"
          className="rounded-xl bg-emerald-400 px-3 py-1.5 font-medium text-emerald-50 shadow-md shadow-emerald-200"
        />
      </form>
      <p>Joueurs disponibles</p>
    </div>
  );
}

export default MatchDayCard;
