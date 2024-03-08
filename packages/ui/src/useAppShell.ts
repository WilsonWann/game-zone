import { create } from "zustand"
import { devtools, persist, createJSONStorage, StateStorage } from "zustand/middleware"
// import { get, set, del } from 'idb-keyval'

// const storage: StateStorage = {
//   getItem: async (name: string): Promise<string | null> => {
//     console.log(name, 'has been retrieved')
//     return (await get(name)) || null
//   },
//   setItem: async (name: string, value: string): Promise<void> => {
//     console.log(name, 'with value', value, 'has been saved')
//     await set(name, value)
//   },
//   removeItem: async (name: string): Promise<void> => {
//     console.log(name, 'has been deleted')
//     await del(name)
//   },
// }

type Store = {
  user: string | null
  score: number,
  setUser: (user: string | null) => void
  addToScore: (amount: number) => void
}

//* be aware of the double parenthesis
export const useAppShell = create<Store>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        score: 0,
        setUser: (user) => set(() => ({ user })),
        addToScore: (amount) => set((state) => ({ score: state.score + amount })),
      }),
      {
        name: "app-shell",
        // storage: createJSONStorage(() => storage),
      },
    )
  )
)