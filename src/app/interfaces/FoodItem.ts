export interface FoodItem {
  name: string
  price: number
  restaurantId: number
  imgUrl: string

  diet: diet
}

type diet = {
  isGlutenFree: boolean
  isVegan: boolean
}