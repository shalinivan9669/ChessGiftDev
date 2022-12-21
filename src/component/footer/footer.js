import React from "react";


const  Footer = ()=> {
    return (
      <footer className=' flex bg-stone-900 h-657'>
        
        <div className='w-full text-center flex flex-col items-center justify-center text-white'><p className='lg:text-4xl md:text-4xl  mb:text-3xl sm:text-3xl'>Контакты</p>
          <p className='lg:text-2xl md:text-2xl sm:text-base mb-10 mt-38'>+79999773337 <br/>Менеджер Анна</p>
          <p className='lg:text-2xl md:text-2xl sm:text-base'>chesschampion@lenta.ru</p>
          <p className='lg:text-2xl md:text-2xl sm:text-base mt-38'>г. Москва, Некрасовка (200 метров от метро)</p>
          <p className="mt-7 text-sl"><p className=" text-lg font-semibold">Обучение шахматам:</p><a className="underline underline-offset-2 text-orange-400 " href="http://xn--80aapmrcihh1a4a1ah1c.xn--p1ai/">шахматычемпион.рф</a></p>
          </div>
          
        </footer>
    )
  }

  export default Footer
