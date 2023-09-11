export interface Restaurant {
  id: number
  name: string
  hours: hoursOfOpertaion
  isGhostKitchen: boolean
  imgUrl: string
}

type hoursOfOpertaion = { open: string, closed: string }