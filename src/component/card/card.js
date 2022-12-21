import React, {useContext} from "react";
import basketIcon from '../../img/basket_ikon.png'
import {GlobalData} from "../../shared/context";
import {ACTIONS} from "../../shared/actions";

const Card = ({productData}) => {
  const {title, price, productImage, materials, isInBasket} = productData
  const {dispatch} = useContext(GlobalData)

  function addProductToTheCart(product) {
    dispatch({type: ACTIONS.basket.add, payload: product})
  }

  return (
    <div className='bg-white  flex flex-col items-center justify-center lg:h-651 md:h-415 sm:h-340 mb:h-340 lg:mt-38 md:mt-38 sm:mt-3 mb:mt-3 lg:ml-10 md:ml-5 sm:ml-2 mb:ml-2 lg:w-415 md:w-310 sm:w-245 mb:w-210 rounded-3xl hover:drop-shadow-xl'>
      <div className=" lg:h-340 md:h-170 sm:h-138 mb:h-138 lg:mb-6 md:mb-6 sm:mb-7 mb:mb-5 flex justify-center items-center ">
                <span>
                <img className='mt-6 lg:h-340 md:h-170 sm:h-138 mb:h-138'  src={productImage} alt='product'  />
                </span>
      </div>
      <p className="mb:text-xs">Цвета</p>
      <div>
        <div className='flex'>
          <div className='h-24 w-24 ml-1 rounded-full border border-black bg-white'></div>
          <div className='h-24 w-24 ml-1 rounded-full border border-black bg-green-500'></div>
          <div className='h-24 w-24 ml-1 rounded-full border border-black bg-yellow'></div>
          <div className='h-24 w-24 ml-1 rounded-full border border-black bg-red-500'></div>
          <div className='h-24 w-24 ml-1 rounded-full border border-black bg-blue-300'></div>
          <div className='h-24 w-24 ml-1 rounded-full border border-black bg-blue-700'></div>
          <div className='h-24 w-24 ml-1 rounded-full border border-black bg-black'></div>
        </div>
      </div>
      <p className='lg:text-2xl md:text-xl sm:text-lg mb:text- lg:mt-2 md:mt-1   font-semibold'>{title}</p>
      <p className="text-center">{materials.map(material => <span key={material} style={{}}>{material}</span>)}</p>
      <p className='lg:text-2xl md:text-lg lg:pb-2 lg:mt-5 md:mt-1 font-semibold'>{price} руб</p>
      <button 
        disabled={isInBasket}
        className='lg:h-48 lg:w-186 md:h-48 md:w-186 sm:h-36 sm:w-156 mb:h-36 mb:w-120 lg:mt-5 md:mt-2  md:mb-4 rounded-full bg-buttonColor flex items-center justify-center  hover:drop-shadow-lg'
        onClick={() => addProductToTheCart(productData)
          
        }
      >
        <img alt="" className='lg:h-24 md:h-5 lg:w-24 md:w-5 sm:h-5 sm:w-5 mb:h-4 mb:ml- mt-1 mr-1' src={basketIcon} />
        <p className="md:text-base font-semibold lg:text-lg sm:text-sm mb:text-xs">В корзину</p></button>
    </div>
  );
}

export default Card
