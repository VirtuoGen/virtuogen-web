import { create } from "zustand";

type UserTypeStore = {
  userType: "Recruiter" | "Candidate";
  setUserType: (userType: "Recruiter" | "Candidate") => void;
  // setUserType: () => Promise<void>;
};

export const useUserType = create<UserTypeStore>((set, get) => ({
  userType: "Recruiter",
  setUserType: (userType) => set({ userType }), // setUserType: () => set({  }), // TODO: async fetch type of user from db when someone logs in
}));
