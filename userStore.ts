import { create } from "zustand";
import { getUserData } from "@/hook/logged";

const useUserStore = create((set) => ({
    userData: null,
    fetchUserData: async () => {
      const user = await getUserData();
      set({ userData: user });
    },
  }));
  
  export default useUserStore;