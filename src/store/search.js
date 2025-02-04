import { create } from "zustand"

export const useSearchStore = create((set) => ({
  query: '',
  urlParams: {},
  setQuery: (newQuery) => set((state) => ({ query: newQuery })),
  setUrlParams: () => set((state) => ({ query }))
}))
