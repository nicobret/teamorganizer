export type User = {
    id: string;
    name: string;
    status: "active" | "inactive" | "retired";
  };

export const userData: User[] = [
    { id: 1, name: "Nico", available: null, team: null },
    { id: 2, name: "Antoine", available: null, team: null },
    { id: 3, name: "Juliette", available: null, team: null },
    { id: 4, name: "Hasina", available: null, team: null },
    { id: 5, name: "Julian", available: null, team: null },
    { id: 6, name: "Damien", available: null, team: null },
    { id: 7, name: "Paul", available: null, team: null },
    { id: 8, name: "Etienne", available: null, team: null },
    { id: 9, name: "Aymeric", available: null, team: null },
    { id: 10, name: "Thomas", available: null, team: null },
    { id: 11, name: "JB", available: null, team: null, retired: true },
    { id: 12, name: "Carole", available: null, team: null, retired: true },
  ];