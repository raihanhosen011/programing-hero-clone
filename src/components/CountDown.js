import { useState } from "react"

export default function CountDown() {
  const [time,setTime] = useState({days : '' ,hours : '' ,minutes:'',seconds : '' ,})

  var target = new Date("Jan 5, 2022 15:37:25").getTime() 

  setInterval(function(){
    var now = new Date().getTime()
    var distance = target - now

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTime({days : days ,hours : hours ,minutes : minutes ,seconds : seconds})

  },1000)


  return (
    <div className='custom_countdown d-flex align-items-center justify-content-center' >
      <div className='countdown_option row' >
         
         <div className='option col-4 col-md-3 p-1' >
           <div className='d-flex justify-content-center option__bg' >
             <div className='option__btn' ><h3>00</h3></div>  
             <div className='option__btn' ><h3>00</h3></div>                  
           </div>
           <p className='fs-14 grey-bl my-0 text-center' >Days</p>
         </div>

         <div className='option col-4 col-md-3  p-1' >
           <div className='d-flex justify-content-center option__bg' >
            <div className='option__btn' ><h3>00</h3></div>  
            <div className='option__btn' ><h3>{time.hours}</h3></div>                  
           </div>
           <p className='fs-14 grey-bl my-0 text-center' >Hour</p>
         </div>

         <div className='option col-4 col-md-3  p-1' >
           <div className='d-flex justify-content-center option__bg' >
            <div className='option__btn' ><h3>0</h3></div>  
            <div className='option__btn' ><h3>{time.minutes}</h3></div>                  
           </div>
           <p className='fs-14 grey-bl my-0 text-center' >Minite</p>
         </div>

         <div className='option col-12 col-md-3  p-1' >
           <div className='d-flex justify-content-center option__bg' >
            <div className='option__btn' ><h3>0</h3></div>  
            <div className='option__btn' ><h3>{time.seconds}</h3></div>                  
           </div>
           <p className='fs-14 grey-bl my-0 text-center' >Second</p>
         </div>

      </div>
    </div>
  );
}
