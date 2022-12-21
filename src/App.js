import React from 'react';
import './App.css';
import Nav from './component/nav';
import Footer from './component/footer/';
import Card from "./component/card";
import {useContext} from "react";
import {GlobalData} from "./shared/context";


const App = () => {
  const {state, dispatch} = useContext(GlobalData)
  
  const {products} = state

  return (
    <div className="h-screen">
      <Nav />
      <main className='bg-bgrey  h-5/5 pb-20'>
        <p className='pt-9  lg:text-xl md:text-xl mb:text-xs text-center'>Сувенирная продукция с шахматной тематикой. Возможен индивидуальный дизайн. </p>
        <p className=' lg:text-xl md:text-xl mb:text-xs text-center'>Указанная цена - при тираже 100 шт. Другие количества рассчитываются индивидуально.</p>
        <div className=' justify-center' style={{display: 'flex', flexWrap: 'wrap'}}>
          {products.map(product => <Card key={product.id} productData={product} />)}
        </div>
      </main>
      <div className='text-center h-657 flex flex-col justify-center'>
        <h2 className='text-3xl mt-70' >Информация о
          доставке</h2>
        <p className='lg:text-xl md:lg:text-xl sm:text-base mt-43'>Доставка «СДЭК» по тарифам транспортной компании<br />
          Самовывоз из г. Москва, Некрасовка (200 метров от метро)</p>
        <p className='lg:text-xl md:lg:text-xl sm:text-base mt-10'>Срок доставки: 2 недели после согласования макета и утверждения заказа</p>
        <p className='lg:text-xl md:lg:text-xl sm:text-base mb-120 mt-5'>Создание индивидуального дизайна (надписи) согласовывается с менеджером
          Анной</p>
      </div>
      <Footer />

    </div>
  );
}
export default App
