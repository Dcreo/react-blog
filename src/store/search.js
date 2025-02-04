import { create } from "zustand"

export const useSearchStore = create((set) => ({
  query: '',
  setQuery: (newQuery) => set((state) => ({ query: newQuery }))
}))
