import { create } from 'zustand'

interface UserStore {
  user: string
  isAuth: boolean
  setUser: (user: string) => void
  setIsAuth: (isAuth: boolean) => void
}

export const useUser = create<UserStore>((set) => ({
  user: '',
  isAuth: false,
  setUser: (user: string) => set(() => ({ user })),
  setIsAuth: (isAuth: boolean) => set(() => ({ isAuth }))
}))
