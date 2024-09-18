import { defineStore } from 'pinia'
import type { Score } from './interface'

export const useSummaryStore = defineStore('data', {
  state: () => ({
    score: {} as Score
  }),

  actions: {
    async fill() {
      try {
        const module = await import('@/stores/data.json')
        const data = module.default as Score

        this.score = data
      } catch (error) {
        console.error('Failed to load data:', error)
      }
    }
  }
})
