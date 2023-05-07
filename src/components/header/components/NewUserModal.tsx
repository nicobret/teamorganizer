export default function NewUserModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: any;
}) {
  return (
    <dialog open={open}>
      <div className="fixed inset-0 bg-black bg-opacity-50">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded bg-white p-4">
          <div className="w-96 space-y-4">
            <h2 className="text-xl">Ajouter un joueur</h2>

            <input type="text" placeholder="Nom" />

            <div className="flex gap-4">
              <button
                className="w-1/2 rounded bg-blue-600 p-2 text-white transition hover:brightness-110 active:brightness-125"
                onClick={() => setOpen(false)}
              >
                Ajouter
              </button>

              <button
                className="w-1/2 rounded bg-red-600 p-2 text-white transition hover:brightness-110 active:brightness-125"
                onClick={() => setOpen(false)}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
