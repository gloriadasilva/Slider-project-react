
import { useState, useEffect } from 'react'
import Data from './Data.js';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


const Slider = () => {
  const [people, setPeople] = useState(Data);
  const [index, setIndex] = useState(0);


  const nextBtn = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;

      if (index > Data.length - 1) {
        index = 0;
      }
      return index;
    })

  }
  const prevBtn = () => {
    setIndex((prevIndex) => {
      let index = prevIndex - 1;

      if (index < 0) {
        return Data.length - 1;
      }
      return index;
    })
  }
  
  useEffect(()=>{
    let slide = setInterval(() => {
      setIndex((index)=>{
        let newIndex = index + 1;
        if(newIndex > Data.length - 1){
          newIndex = 0;
        }
        return newIndex;
      })
     }, 5000);
     return ()=>{
      clearInterval(slide)
     }
    
    
   }, [index])
   


  return (
    <>
      <h1>
        <span>/</span>
        Slider
      </h1>
      <div className='parent'>
      
        {
        people.map((items, itemIndex) => {
          const { id, img, name, job, quote } = items;
          
          let position = "next";
              
              if (itemIndex === index){
                position ="active"
              }
              if (itemIndex === index -1){
                position = "left"
              }
          
          return <section key={id} className={position}>
            <img src={img} alt="" className="image" />
            <div className="name">{name}</div>
            <div>{job}</div>
            <div className="quot">{quote}</div>
            <FaQuoteRight></FaQuoteRight>
          </section>
        })
      }
      <button className="left" onClick={prevBtn}>
        <FaChevronLeft />
      </button>
      <button onClick={nextBtn}>
        <FaChevronRight className="right" />
      </button>

    </div>
    </>
  )

}
export default Slider;