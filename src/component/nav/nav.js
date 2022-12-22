import React, { useState } from "react";

import MainLogo from '../../img/main_Logo.png'
import TelIcon from '../../img/tel_icon.png'
import HeaderBasketIkon from '../../img/header_basket_ikon.png'
import Order from "../order";

import { GlobalData } from "../../shared/context";
import { useContext } from "react";

const Nav = ()=> {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const {state, dispatch} = useContext(GlobalData)
  const basketPreCount = state.basket.length 
  
    return (
        <header className="lg:h-153 md:h-153 sm:h-120 mb:h-120 lg:flex md:flex sm:flex mb:flex items-center lg:justify-around md:justify-around sm:justify-around">
        <nav className='flex items-center 2xl:flex-grow 2xl:ml-215 xl:flex-grow xl:ml-215 lg:flex-grow sm:flex-grow-0 lg:ml-48 justify-center '>
          <span className='md:ml-84 md: sm:ml-84  md:w-415 mb:w-40 mb:ml-2 mr-2'>
          <img className=" " alt='Logo' src={MainLogo}/>
          </span>
          </nav>
          <div className='lg:mr-64 mb:mr-4 flex'>
            <div className='xl:text-lg mb:text-xs flex xl:font-semibold flex-col'>
              <div className='flex flex-row'>
                <span className="">
                  <img alt='tel' src={TelIcon}/>
                </span>
                <div>+7 (999) 977-33-37</div>
              </div>
              <div>chesschampion@lenta.ru</div>
            </div>
            <div className='flex justify-center w-70  align-middle items-center  lg:pl-45 mb:pl-1 static'>
              {state.basket.length? <div className=" bg-yellow text-white lg:text-base md:text-base mb:text-xs rounded-full  lg:w-34 lg:h-34  md:w-34 md:h-34 mb:w-4 mb:h-4 text-center absolute lg:right-12  mb:right-8 md:right-20  lg:top-12  md:top-12 mb:top-9 ">{basketPreCount}</div>: null}
            <button>
                <span onClick={() => setShowModal(true)}
                 className=''>
                    <img className="mb:h-6 lg:h-8 lg:w-43 mb:w-34 "  alt='main_Basket' src={HeaderBasketIkon}/>
                </span>
            </button>
            </div>
          </div>
          <Order 
          OnUp = {() => setCount(count + 1)}
          onDown = {()=> setCount(count - 1)}
          count = {count}
          coast={1000}
          modal={showModal}
          setModal={setShowModal }/>
        </header>
        
    )
}

export default Nav