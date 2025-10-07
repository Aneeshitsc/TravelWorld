import React from "react";
import trainMainImg  from "../../assets/TrainImages/HeroTrain.jpg"

const TrainHero = ()=>{
    return(
        <div className='h-full flex items-center justify-between w-full flex-col lg:flex-row bg-cover'
             style={{backgroundImage:`url(${trainMainImg})`}}
        >
        <div className='p-8 pt-28 md:p-24 md:pt-36 lg:p-36'>
            <h2 className='text-3xl md:text-5xl  font-extrabold uppercase  text-[#41A4FF]'>
                Easily Book your<br/>Train Tickets online<br/>with 
            </h2>
            <h1 className='text-3xl md:text-5xl font-extrabold uppercase text-[#DEEFFF] py-4'>
                Travel world
            </h1>
            <p className='text-sm md:text-1xl  lg:max-w-[580px] md:max-w-[900px] text-justify'>Easily book your train tickets online with Travel World and experience hassle-free travel planning. No more waiting in long queues—get instant confirmations from the comfort of your home. Travel World offers a smooth, secure, and user-friendly booking experience. Enjoy seamless payments 
                and quick access to train schedules. Make every journey stress-free by choosing Travel World for your travel needs.</p>
        </div>        
    </div> 
    )
}


export default TrainHero;