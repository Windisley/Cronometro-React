import { useState, useEffect } from 'react'
import Styles from "../src/App.module.css"
import { GrPowerReset } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

function App(){
 
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isruning, setIsruning] = useState(false)
  
  let interval = null
  useEffect(()=>{
   if(isruning){
     interval = setInterval(()=>{
      
     setSeconds((second)=>{

       if(second > 99){
         second = 0

         setMinutes((minute)=>{
           if(minute > 59){
             minute = 0
            
             setHours((hour)=>{
                 return hour+=1
             })
           }
           return minute+=1

           
         })

       }
       
       return second+=1
      })
      
      }, 10)
      
    }else{
      
      clearInterval(interval)
      
    }
    
    
    return ()=> clearInterval(interval)
    
    
  }, [isruning])
  
  
  function activelogic(){
    setIsruning(thenclick => !thenclick)
    
  }

  function resetstopwatch(){
    clearInterval(interval)
    setIsruning(IsRuning=> IsRuning = false)
    setSeconds(0)
    setMinutes(0)
    setHours(0)
  }
  
  
  return (
    <section>
      <div className={Styles.containerstopwatch}>
        <div className={Styles.boxstopWatch}>

          <div className={Styles.absolut}>
            <p id={Styles.hours}>
              {
                
                hours < 10 ? "0" + hours : hours
                
              }
            </p>
            <span className={Styles.point}>
              :
            </span>
            <p id={Styles.minutes}>
              {minutes < 10 ? "0" + minutes : minutes}
            </p>
            <span className={Styles.point}>
              :
            </span>
            <p id={Styles.seconds}>
              {

                seconds < 10 ? "0" + seconds : seconds
              }
            </p>

          </div>
        </div>

        <div className={Styles.options}>
          <div>
            <GrPowerReset className={Styles.iconswatch} title='Resetar'  onClick={resetstopwatch}/>
          </div>
          <div>
            {isruning === true ? <FaPause className={Styles.iconswatch} title='pausar' onClick={activelogic}/> : <FaPlay className={Styles.iconswatch} title='começar' onClick={activelogic}/>}
          </div>
        </div>
      </div>
    </section>
  )
}


export default App









