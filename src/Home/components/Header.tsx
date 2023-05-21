import { useState } from "react";
import { GiSoccerBall } from "react-icons/gi";
import { HiMenuAlt3 } from "react-icons/hi";
import Menu from "./Menu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex w-full items-center justify-between p-2 text-orange-50">
      <div className="flex items-center gap-2 px-2 pt-2">
        <GiSoccerBall className="flex-1 text-4xl" />
        <h1 className="font-title text-4xl">Matchday</h1>
      </div>

      <button
        className="text-4xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <HiMenuAlt3 className="text-2xl" />
      </button>
      <Menu open={menuOpen} setOpen={setMenuOpen} />
    </header>
  );
}

export default Header;
