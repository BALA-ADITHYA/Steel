import { createContext, useEffect, useState } from 'react'

export const PercentageContext = createContext();

const PercentageContextProvider = (props) => {

  const [list,setList] = useState(JSON.parse(localStorage.getItem('lists'))||[])
  const [grade,setGrade] = useState('Naveen');
    const [tap,setTap] = useState('')
  const [heal,setHeal] = useState(0)

  const onChangeTap = (e) => {
    setTap(e.target.value)
  }
  const onChangeHeal = (event) => {
    setHeal(event.target.value)
  }

 

  const [percentage, setPercentage] = useState({
    bigiron:'',
    lms:'',
    hms:'',
    boring:'',
    return: function(){
      return (100 - (Number(this.bigiron)+Number(this.boring)+Number(this.lms)+Number(this.hms)))
    }
   
  })

  const val = percentage.return()



  const lmsValue = () => {
    let divisible = ((tap-heal) / 100) * percentage.lms
    let perc = Math.ceil(divisible / 10) * 10
    return Number(perc)
  }

  const hmsValue = () => {
    let divisible = ((tap-heal) / 100) * percentage.hms
    let perc = Math.ceil(divisible / 10) * 10
    return Number(perc)
  }
  const boringValue = () => {
    let divisible = ((tap-heal) / 100) * percentage.boring
    let perc = Math.ceil(divisible / 10) * 10
    return Number(perc)
  }

  const rec = (percentage.bigiron||percentage.lms||percentage.hms||percentage.boring)


   const returnValue = () => {
    let divisible = ((tap-heal) / 100) * val
    let perc = 40+ (Math.ceil(divisible / 10) * 10)
    return Number(perc)
  }

  const bigironValue = ()=>{
    let divisible = ((tap-heal) / 100) * percentage.bigiron
    let perc = Math.ceil(divisible / 10) * 10
    return Number(perc)
  }
  const onChangeHandler = (event) => {
    setPercentage((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  

  const total = ()=>{
    
    const lmsv = lmsValue() +bigironValue()+ hmsValue() + boringValue() + returnValue() +Number(heal)

    return Number(lmsv)
  }

  const gra = grade ?? 'naveen'

  const onSave = ()=>{
   const obj= {
    tap,heal,
    lms:lmsValue(),
    hms:hmsValue(),
    boring:boringValue(),
    return :returnValue(),
    bigiron:bigironValue(),
    totalvalue:total(),
    grade
   }

   
   if(tap===''){
    return null
   }else{
    const id = list.length? list[list.length-1].id + 1:1;
    obj.id= id
  }
  setList((prev)=>[...prev,obj]);
  localStorage.setItem('lists',JSON.stringify(list))
  
   setHeal(0)
   setTap('')
   setGrade('Naveen')
   setPercentage(prev=>({...prev,bigiron:'',
    lms:'',
    hms:'',
    boring:'',}))
}


  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(list))
  },[list])

 
  const contextValue = {
    onChangeHeal,
    onChangeTap,
    returnValue,
    boringValue,
    hmsValue,
    lmsValue,
    percentage,
    setPercentage,
    onChangeHandler,
    tap,
    heal,
    total,onSave,bigironValue,grade,setGrade,list,setList,rec
  }

  return (
    <PercentageContext.Provider value={contextValue}>
      {props.children}
    </PercentageContext.Provider>
  )
}

export default PercentageContextProvider
