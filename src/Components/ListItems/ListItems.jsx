import React, { useContext } from 'react'
import './ListItems.css'
import { PercentageContext } from './../../Context/PercentageContext';
import Button from '../Button/Button';


const ListItems = () => {


    const {list,setList} = useContext(PercentageContext)
let tap = 0;
let heal = 0;
let bigiron = 0;
let lms = 0;
let hms = 0;
let boring = 0;
let total = 0;
let ret = 0;




/*   tap,heal,
    lms:lmsValue(),
    hms:hmsValue(),
    boring:boringValue(),
    return :returnValue(),
    bigiron:bigironValue(),
    totalvalue:total(),
    grade */
list.forEach((list)=>{
    tap+=Number(list.tap);
    heal+=Number(list.heal);
    bigiron+=Number(list.bigiron);
    lms+=Number(list.lms);
    hms+=Number(list.hms);
    boring+=Number(list.boring);
    total+=Number(list.totalvalue);
    ret+=Number(list.return);
  
})

const onremoveHandler = (id)=>{
       const newlist = list.filter((item) => item.id !== id)
       setList(newlist)
} 




  return (
    <>
    <div className='list'>
    <div className="sno1">
        <p>S.NO</p>
        <p>Tapping</p>
        <p>Heal</p>
        <p>bigiron</p>
        <p>Lms</p>
        <p>Hms</p>
        <p>Boring</p>
        <p>Return</p>
        <p>Total</p>
        <p>grade</p>
        <p></p>
    </div>
        <div className="try">
       
    {list && list.map((list,i)=>{
        let id = i+1
            return<>  
             <div  className="sno2">
         <div   className='sno' >
         
        <p>{id++} <span className='remove' onClick={()=>onremoveHandler(list.id)}>X</span></p>
        <p>{list.tap}</p>
        <p>{list.heal}</p>
        <p>{list.bigiron}</p>
        <p>{list.lms}</p>
        <p>{list.hms}</p>
        <p>{list.boring}</p>
        <p>{list.return}</p>
        <p>{list.totalvalue}</p>
        <p>{list.grade}</p>
    </div>
    </div>
    </>
        
    })}
    </div>
        
   
    <div className="sno3">
        <p>NET</p>
        <p>{tap}</p>
        <p>{heal}</p>
        <p>{bigiron}</p>
        <p>{lms}</p>
        <p>{hms}</p>
        <p>{boring}</p>
        <p>{ret}</p>
        <p>{total}</p>
        <p>grade</p>
        <p></p>
    </div>
</div>
      <Button/>
</>
  )
}

export default ListItems
