import { Injectable } from '@angular/core';
import { Restaurant } from './interfaces/Restaurant';
import { FoodItem } from './interfaces/FoodItem';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Jeanne Fettuccine',
      hours: { open: '9AM', closed: '10PM' },
      isGhostKitchen: false,
      imgUrl: 'https://images.unsplash.com/photo-1593548615309-5a45c504f994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80'
    },
    {
      id: 2,
      name: 'Tsunami Burger',
      hours: { open: '9AM', closed: '12AM' },
      isGhostKitchen: true,
      imgUrl: 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'

    },
    {
      id: 3,
      name: 'HOTTEST DOGGY',
      hours: { open: '5PM', closed: '12AM' },
      isGhostKitchen: false,
      imgUrl: 'https://images.unsplash.com/photo-1657614985416-86232e1905a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80'
    },
  ]

  foodItems: FoodItem[] = [
    {
      name: 'Mild Doggy',
      price: 5,
      restaurantId: 3,
      imgUrl: 'https://images.unsplash.com/photo-1599599810694-b5b37304c041?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80',
      diet: { isGlutenFree: false, isVegan: false }
    },
    {
      name: 'Child Doggy',
      price: 5,
      restaurantId: 3,
      imgUrl: 'https://images.unsplash.com/photo-1529016321877-20b7bb002de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80',
      diet: { isGlutenFree: true, isVegan: false }
    },
    {
      name: 'Wild Doggy',
      price: 7,
      restaurantId: 3,
      imgUrl: 'https://images.unsplash.com/photo-1656250718851-c42b80b444c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80',
      diet: { isGlutenFree: false, isVegan: false }
    },
    {
      name: 'Fettuccine Alfredo',
      price: 15,
      restaurantId: 1,
      imgUrl: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      diet: { isGlutenFree: false, isVegan: false }
    },
    {
      name: 'Ravioli',
      price: 13,
      restaurantId: 1,
      imgUrl: 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
      diet: { isGlutenFree: false, isVegan: false }
    },
    {
      name: 'Best-o Pesto',
      price: 11,
      restaurantId: 1,
      imgUrl: 'https://images.unsplash.com/photo-1616299908398-9af1134ad522?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80',
      diet: { isGlutenFree: false, isVegan: true }
    },
    {
      name: 'Squash Soup',
      price: 13,
      restaurantId: 1,
      imgUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      diet: { isGlutenFree: true, isVegan: true }
    },
    {
      name: 'Saucenami',
      price: 5.99,
      restaurantId: 2,
      imgUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1998&q=80',
      diet: { isGlutenFree: false, isVegan: false }
    },
    {
      name: 'Egg-valanche',
      price: 6.99,
      restaurantId: 2,
      imgUrl: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1922&q=80',
      diet: { isGlutenFree: false, isVegan: false }
    },
    {
      name: 'Heatwave',
      price: 4.99,
      restaurantId: 2,
      imgUrl: 'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      diet: { isGlutenFree: false, isVegan: false }
    },
    {
      name: 'Quinoa Quake',
      price: 9.99,
      restaurantId: 2,
      imgUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80',
      diet: { isGlutenFree: false, isVegan: true }
    },
  ]

  cartItems: FoodItem[] = []
}
