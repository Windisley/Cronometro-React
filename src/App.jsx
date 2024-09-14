import { useState, useEffect } from 'react'
import Styles from "../src/App.module.css"
import { GrPowerReset } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";


function App(){
 
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isruning, setIsruning] = useState(false)



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
            <GrPowerReset className={Styles.iconswatch} title='Resetar' />
          </div>
          <div>
            <FaPlay className={Styles.iconswatch} title='Começar'/>
          </div>
        </div>
      </div>
    </section>
  )
}


export default App









