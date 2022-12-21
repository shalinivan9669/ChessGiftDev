import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useContext } from "react";
import { GlobalData } from "../../shared/context";
import { ACTIONS } from "../../shared/actions";

import ix from '../../img/Group_38.png'
import plus from '../../img/plus.png'
import minus from '../../img/minus.png'




const Order = (props) => {
  const [ finalOrder, SetFinalOrder]  = useState ('hidden fixed w-full w-full ');
  const form = useRef();
  const { state, dispatch } = useContext(GlobalData);
  const { basket } = state;

  const basketToEmailData = basket.map(({ title, basketCount }) => ({
    title,
    basketCount
  }));
  const titile = basketToEmailData.map ((titile,basketCount)=>titile.title, )
  const Cost =  basketToEmailData.map (titile=>titile.basketCount )
  const totalOrder = {}
  titile.forEach((titile, i) => { totalOrder[titile] = Cost[i]  });
  console.log(totalOrder)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ydsnvze",
        "template_9ymlbai",
        form.current,
        "opMDe5VrYsNq4ztJH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const close= () => {
    props.setModal(false)
     SetFinalOrder('hidden fixed w-full w-full ') 
  }
  /*fixed inset-0 z-10 overflow-y-auto  flex justify-between */
  return (
    <div
      className={
        props.modal
          ? "fixed inset-0 z-10 overflow-y-auto  flex justify-between"
          : "hidden"
      }
    >
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => close()}
        
      ></div>     
       
      <div className="relative flex flex-col h-726 mt-14  lg:w-638 md:w-638 sm:w-470 p-4 mx-auto bg-white rounded-md shadow-lg">
      <div className={finalOrder}> 
        <div  className=" flex ">
          <div className="relative  right-10  bg-white w-565 h-340  ">
          <p className=" mt-10 ml-7 mb font-bold text-xl"
            >Ваш заказ </p>
          <hr className=" mt-10 mb-10 ml-10 mr-10"/>
          <div className=" flex justify-center">
            <div className="  bg-green-400 h-138 w-480  flex justify-center  items-center text-white font-semibold text-center ">
              Спасибо, данные отправлены! Менеджер  <br/> свяжется с вами в ближайшее время</div>
          </div>
          </div>
        </div>
      </div>
        <div className="flex flex-col justify-between h-full">
          <div>
          <p className=" font-semibold text-2xl text-left mb-6"
          >Ваш заказ:</p>
          
          <hr className=" mx-auto w-400 h-1 " />
          <ul className="flex flex-col h-340 overflow-auto ">
            {basket.map((product) => {
              const { title, id, price, productImage, materials, basketCount } =
                product;
              return (
                <li key={id} >
                  <div className="flex overflow-auto justify-around mb-11">
                    <img
                      alt=""
                      height={"123px"}
                      width={"110px"}
                      src={productImage}
                    ></img>
                    <div className="flex flex-col w-70 justify-center">
                      <p className="lg:text-xl md:text-xl font-semibold">{title}</p>
                      <p>{materials}</p>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="lg:ml-10 md:ml-10 sm:ml-10 mb:ml-0 lg:mr-5 md::mr-5 sm::mr-5 mb::mr-5  w-76 text-lg font-bold">
                        <button
                          disabled={product.basketCount <= 1}
                          onClick={() =>
                            dispatch({
                              type: ACTIONS.basket.decrement,
                              payload: product,
                            })
                          }
                        >
                          <img height={'17px'} width={'17px'} src={minus} alt="minus"></img>
                        </button>
                        <span className="ml-2 mr-2 text-lg  text-top">{basketCount}</span>
                        <button
                          onClick={() =>
                            dispatch({
                              type: ACTIONS.basket.increment,
                              payload: product,
                            })
                          }
                        >
                          <img src={plus} alt=""></img>
                        </button>
                      </div>
                    </div>
                    <div className="flex  items-center">
                      <p className="text-lg font-medium mr-10">{price}</p>
                      <button onClick={() =>
                            dispatch({
                              type: ACTIONS.basket.del,
                              payload: product,
                            })
                          }
                      >
                      <span className=" lg:mr-5 md:mr-5  sm:mr-5 mb:mr-0 lg:ml-10 ml-10 md:ml-10 sm:ml-10 mb:ml-0  text-center  w-8 h-8 ">
                        <img src={ix}></img>
                      </span>
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <hr className=" mx-auto w-400 h-1" />
          </div>
          <div className="flex text-xl justify-end font-semibold text-end"><p><span>Сумма </span>
          { basket.length>0? basket.reduce((acc,current)=>{
                    return acc+ current.price 
            },0) 
            :0} руб </p>
            </div>
          <div className="justify-self-end items-center flex flex-col mb-4">
            <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
              <label>Имя</label>
              <input className=" border-2 h-48 lg:w-480 md:w-480  mb:w-310 sm:w-170 " type="text" name="user_name" />
              <label>Телефон</label>
              <input className=" border-2 h-48 mb-10 lg:w-480 md:w-480  mb:w-310 sm:w-170 " type="tel" name="user_email" />
              {/*send in text area*/}
              <textarea
                className="hidden"
                value={JSON.stringify(totalOrder)}
                name="message"
              />
              <button className="lg:w-480 md:w-480   mb:w-310 sm:w-170 h-58 bg-black text-white"
               onClick={()=>SetFinalOrder('fixed w-full w-full ')}>
                <input type="submit" value="Заказать" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
