import { create } from 'zustand'

export interface InitialModalState {
 loading: boolean
}

export interface InitialModalAction {
 notLoading(): void
}

export const usesplash = create<InitialModalState & InitialModalAction>()(set => ({
  loading: true,
  notLoading: () => set({ loading: false }),
}))



