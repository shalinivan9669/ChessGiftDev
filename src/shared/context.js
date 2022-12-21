/* eslint-disable default-case */
//react
import {createContext, useReducer} from "react";
//actions
import {ACTIONS} from "./actions";
//styles
import productImage from "../img/che.png";

import backpackImage from '../img/backpack.jpg'
import shortImage from '../img/che.png'
import CapImage from '../img/cap.jpg'
import CeramicCap from '../img/4.jpg' 
import FarforCap from '../img/11.jpg' 
import CirkleCap from '../img/25.jpg' 
import pen from '../img/24.jpg' 
import penPlastic from '../img/1.jpg' 
import penMetal from '../img/31.jpg' 
import pencil from '../img/a9e978b3bcfb8bac.jpg' 
import plo from '../img/1c9a24dd19c1ea5d.jpg'



const initialState = {
  products: [
    {
      title: 'Рюкзак',
      price: 340,
      initialPrice: 340,
      materials: ['(12 л, 35 х 43 см).',],
      productImage: backpackImage,
      basketCount: 1,
      id: 1,
      isInBasket: false
    },
    {
      title: 'Бейсболка детская',
      price: 580 ,
      initialPrice: 580 ,
      materials: ['', '(хлопок)'],
      productImage:CapImage,
      basketCount: 1,
      id: 2,
      isInBasket: false
    },
    {
      title: 'Кружка керамическая',
      price: 600,
      initialPrice: 600,
      materials: ['(410 мл, ', ' керамика)'],
      productImage:CeramicCap,
      basketCount: 1,
      id: 3,
      isInBasket: false
    },
    {
      title: 'Кружка фарфоровая',
      initialPrice: 520,
      price: 520,
      materials: ['(фарфор, ', '400 мл)'],
      productImage:FarforCap,
      basketCount: 1,
      id: 4,
      isInBasket: false
    },
    {
      title: 'Чашка матовая',
      initialPrice:  710,
      price: 710,
      materials: ['(фарфор,', ' 400 мл)'],
      productImage:CirkleCap,
      basketCount: 1,
      id: 5,
      isInBasket: false
    },
    {
      title: 'Карандаш',
      initialPrice:  60,
      price: 60,
      materials: ['(дерево, HB)', ''],
      productImage:pencil,
      basketCount: 1,
      id: 6,
      isInBasket: false
    },
    {
      title: 'Ручка 1',
      initialPrice:  80,
      price: 80,
      materials: ['(пластик)', ''],
      productImage:pen,
      basketCount: 1,
      id: 7,
      isInBasket: false
    },
    {
      title: 'Ручка 2',
      initialPrice:  80,
      price: 80,
      materials: ['(пластик)', ''],
      productImage:penPlastic,
      basketCount: 1,
      id: 8,
      isInBasket: false
    },
    {
      title: 'Ручка 3',
      initialPrice:  110,
      price: 110,
      materials: ['(металл)', ''],
      productImage:penMetal,
      basketCount: 1,
      id: 9,
      isInBasket: false
    },
    {
      title: 'Футболка  детская',
      initialPrice:  430,
      price: 430,
      materials: ['(хлопок)', ''],
      productImage:shortImage,
      basketCount: 1,
      id: 10,
      isInBasket: false
    },
    {
      title: 'Рубашка поло детская',
      initialPrice:  750,
      price: 750,
      materials: ['(хлопок)', ' '],
      productImage:plo,
      basketCount: 1,
      id: 11,
      isInBasket: false
    },
  ],
  basket: [],
};

//reducer
const rootReducer = (state, action) => {
  //destructuring
  const {type, payload} = action
  const {products, basket} = state

  switch (type) {
    case ACTIONS.basket.add:
      const newProduct = {
        ...payload ,
        isInBasket:!payload.isInBasket
      }
      //return {...state, basket: [...basket, payload], }
      const copyOfState = {...state}
      const chosenProductIndex = copyOfState.products.indexOf(payload)
      copyOfState.products.splice(chosenProductIndex,1)
      copyOfState.products.splice(chosenProductIndex,0,newProduct)
      return {...copyOfState, basket: [...basket, payload],}
      
    case ACTIONS.basket.increment: {
      //copies of data
      //deep copy of chosen product
      const copyOfProduct = JSON.parse(JSON.stringify(payload))
      
      //copy of basket
      const copyOfBasket = [...basket]
      //find index of product in basket and removing it by index
      const productIndex = basket.indexOf(payload)
      copyOfBasket.splice(productIndex, 1)
      //incrementing basketCount by one
      copyOfProduct.basketCount += 1
      copyOfProduct.price = copyOfProduct.price + copyOfProduct.initialPrice
      //adding product to copyOfBasket by index
      copyOfBasket.splice(productIndex, 0, copyOfProduct)
      return {...state, basket: copyOfBasket}
    }
    case ACTIONS.basket.decrement: {
      //copies of data
      //deep copy of chosen product
      const copyOfProduct = JSON.parse(JSON.stringify(payload))
      //copy of basket
      const copyOfBasket = [...basket]
      //find index of product in basket and removing it by index
      const productIndex = basket.indexOf(payload)
      copyOfBasket.splice(productIndex, 1)
      //incrementing basketCount by one
      copyOfProduct.basketCount -= 1
      copyOfProduct.price = copyOfProduct.price - copyOfProduct.initialPrice
      //adding product to copyOfBasket by index
      copyOfBasket.splice(productIndex, 0, copyOfProduct)
      return {...state, basket: copyOfBasket}
    }
    case ACTIONS.basket.del: {
      const newProduct = {
        ...payload ,
        isInBasket:false
      }
      console.log(newProduct)
      //copy of basket
      
      const copyOfData = {...state}
      //find index of product in basket and removing it by index
      const productIndexInBasket = copyOfData.basket.indexOf(payload)

      copyOfData.basket.splice(productIndexInBasket, 1)
      copyOfData.products = copyOfData.products.map(product=>{
        if(product.id === payload.id){
          return newProduct
        }
        else return product
      })
      return copyOfData
      
    }
    default:{
      return state
    }
  }
}
export const GlobalData = createContext(initialState)

export const ChessContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <GlobalData.Provider value={{state, dispatch}}>
      {children}
    </GlobalData.Provider>
  )
}
