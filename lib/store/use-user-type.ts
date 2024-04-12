import { create } from "zustand";

type UserTypeStore = {
  userType: "Recruiter" | "Candidate";
  // setUserType: () => Promise<void>;
};

export const useUserType = create<UserTypeStore>((set, get) => ({
  userType: "Recruiter",
  // setUserType: () => set({  }), // TODO: async fetch type of user from db when someone loggs in
}));
