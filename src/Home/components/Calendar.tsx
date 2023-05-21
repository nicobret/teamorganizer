import { IoClose } from "react-icons/io5";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

function Calendar({ open, setOpen }: Props) {
  console.log("🚀 ~ file: Calendar.tsx:9 ~ Calendar ~ open:", open);
  return (
    <div
      className={`fixed right-0 top-0 z-10 h-screen w-80 bg-emerald-50 p-4 shadow-md transition-all duration-200 ease-in-out ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button className="float-right" onClick={() => setOpen(false)}>
        <IoClose className="text-2xl" />
      </button>

      <h2 className="text-xl">Calendrier</h2>
      <p>En chantier</p>
    </div>
  );
}

export default Calendar;
