export interface Score {
  final: number
  percentile: string
  summary: {
    reaction: string
    memory: string
    verbal: string
    visual: string
  }
}

export interface Summary {
  summary: {
    reaction: string
    memory: string
    verbal: string
    visual: string
  }
}
