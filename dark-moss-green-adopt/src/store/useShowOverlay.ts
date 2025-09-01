import OverlayType from "@/types/store/OverlayType";
import { create } from "zustand";

const useShowOverlay = create((set) => ({
  hidden: true,
  hideOverlay: () => set((state: OverlayType) => ({ hidden: true })),
  showOverlay: () => set((state: OverlayType) => ({ hidden: false })),
}));

export default useShowOverlay;
