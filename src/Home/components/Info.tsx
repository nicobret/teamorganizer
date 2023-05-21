import { IoLocationOutline } from "react-icons/io5";
import { TbNotes } from "react-icons/tb";

function Info() {
  return (
    <section className="mx-2 my-4 space-y-2 rounded-md bg-emerald-800 p-4 text-sm text-orange-50 shadow-sm">
      <h2 className="font-bold">Five Inclusif</h2>

      <div className="flex items-center gap-2">
        <IoLocationOutline />
        <p>21 rue Alexandre Guilmant, 92190 Meudon</p>
      </div>
      <div className="flex items-center gap-2">
        <TbNotes />
        <p>Code : 01565</p>
      </div>
    </section>
  );
}

export default Info;
