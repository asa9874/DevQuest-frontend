import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  id: number | null;
  email: string | null;
  name: string | null;
  setMember: (Member: {
    id: number;
    email: string;
    name: string;
  }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      id: null,
      email: null,
      name: null,
      setMember: (Member) => set(Member),
      logout: () =>
        set({
          id: null,
          email: null,
          name: null,
        }),
    }),
    {
      name: "auth-storage", // localStorage key
    }
  )
);