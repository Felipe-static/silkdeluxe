import { create } from 'zustand';
import { Product } from '@/lib/data';

interface AppState {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
