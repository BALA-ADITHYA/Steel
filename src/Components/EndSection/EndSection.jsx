import React, { useContext } from 'react'
import './EndSection.css'
import { PercentageContext } from '../../Context/PercentageContext'
import { Link} from 'react-router-dom'

const EndSection = () => {

  const {tap,total,onSave,rec} = useContext(PercentageContext)
  return (
    <>
      <div className="bottom">
        <p>
          Total : <span>{(tap&&rec)?total():null}</span>
        </p>
        <div className='btn-group'>
        <button onClick={tap?onSave:null}>SAVE</button>
        <Link to={'/list'}><button className='btn2'>View List</button></Link>
        </div>
      </div>
    </>
  )
}

export default EndSection
