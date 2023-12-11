import { create } from "zustand";
import { getUserData } from "@/app/hook/logged";

const useUserStore = create((set) => ({
    userData: null,
    fetchUserData: async () => {
      const user = await getUserData();
      set({ userData: user });
    },
  }));
  
  export default useUserStore;