import React, { useContext, useState } from 'react'
import './Home.css'
import MiddleSection from '../MiddleSection/MiddleSection'
import EndSection from '../EndSection/EndSection'
import { PercentageContext } from '../../Context/PercentageContext'
import Grade from './../Grade/Grade';


const Home = () => {


 

const {tap,heal,onChangeHeal,onChangeTap} = useContext(PercentageContext)
  


  return (
    <div className="home">
      <div className="top">
        <div className="tapping">
          <span>Tapping Weight</span>
          <div>
            <input type="number" value={tap}
            onChange={onChangeTap} placeholder="steel in kg" />
          </div>
        </div>
        <div className="heal">
          <span>Heal</span>
          <div>
            <input type="number" value={heal}
            onChange={onChangeHeal} placeholder="heal" />
          </div>
        </div>
      </div>
      <Grade />
      <MiddleSection tap={tap} heal={heal} />
      <EndSection />
      
    </div>
  )
}

export default Home
