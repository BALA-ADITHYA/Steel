import React, { useContext, useRef, useState } from 'react'
import './MiddleSection.css'
import { PercentageContext } from '../../Context/PercentageContext'

const MiddleSection = () => {


   const {
    tap,
    returnValue,
    boringValue,
    hmsValue,
    lmsValue,
    percentage,
    onChangeHandler,
    bigironValue,
   
  } = useContext(PercentageContext)

  const percent = percentage;

 
 



  const val = percentage.return()
  // else if(grade==='grade3'){
  //   percentage.bigiron= 10
  //   percentage.lms = 15
  //   percentage.hms=25
  //   percentage.boring=15
  // }

  // const retur = function () {
  //   return 100 - (percentage.bigiron +percentage.lms + percentage.hms +percentage.boring)
  // }

  // let val = retur()
const rec = (percentage.bigiron||percentage.lms||percentage.hms||percentage.boring)
 
  return (
    <>
    <div className="middle">
         <div className="bigiron">
        <span>
          bigiron
          <input
            type="number"
            name="bigiron"
            value={percentage.bigiron}
            onChange={onChangeHandler}
          />
        </span>
        <p className="eq">=</p>
        <p className="va">{rec ? bigironValue() : null}</p>
      </div>

      <div className="lms">
        <span>
          LMS
          <input
            type="number"
            name="lms"
            value={percentage.lms}
            onChange={onChangeHandler}
          />
        </span>
        <p className="eq">=</p>
        <p className="va">{rec ? lmsValue() : null}</p>
      </div>
      <div className="hms">
        <span>
          HMS
          <input
            type="number"
            name="hms"
            onChange={onChangeHandler}
            value={percentage.hms}
          />
        </span>
        <p className="eq">=</p>
        <p className="va">{rec ? hmsValue() : null}</p>
      </div>
      <div className="boring">
        <span>
          BORING
          <input
            type="number"
            name="boring"
            value={percentage.boring}
            onChange={onChangeHandler}
          />
        </span>
        <p className="eq">=</p>
        <p className="va">{rec ? boringValue() : null}</p>
      </div>
      <div className="return">
        <span>
          RETURN
          <input
            type="number"
            onChange={onChangeHandler}
            name="return"
            value={rec?val:''}
          />
        </span>
        <p className="eq">=</p>
        <p className="va">{(tap && rec )? returnValue() :''}</p>
      </div>
    </div>
    </>
  )
}

export default MiddleSection
