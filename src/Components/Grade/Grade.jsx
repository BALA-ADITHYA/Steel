import React, { useContext } from 'react'
import './Grade.css'
import { useState } from 'react';
import { PercentageContext } from '../../Context/PercentageContext';

const Grade = () => {

const {grade,setGrade,setPercentage}=useContext(PercentageContext)

const onchangGrade1 =()=>{
  setPercentage((prev)=>({...prev, 
   bigiron:5,
   lms: 44,
   hms: 0,
   boring:15,}));
   setGrade('400/18')
 }
const onchangGrade2 =()=>{
  setPercentage((prev)=>({...prev, 
   bigiron:5,
   lms: 39,
   hms: 0,
   boring:15,}));
   setGrade('400/15')
 }
const onchangGrade3 =()=>{
  setPercentage((prev)=>({...prev, 
   bigiron:0,
   lms: 43,
   hms: 0,
   boring:15,}));
   setGrade('450/12')
 }
const onchangGrade4 =()=>{
  setPercentage((prev)=>({...prev, 
   bigiron:5,
   lms: 20,
   hms: 19,
   boring:15,}));
   setGrade('500/7')
 }
const onchangGrade5 =()=>{
  setPercentage((prev)=>({...prev, 
   bigiron:5,
   lms: 14,
   hms: 24.5,
   boring:'',}));
   setGrade('600/3')
 }
const onchangGrade6 =()=>{
  setPercentage((prev)=>({...prev, 
   bigiron:0,
   lms: 48,
   hms: 0,
   boring:15,}));
   setGrade('500/14')
 }
const onchangGrade7 =()=>{
  setPercentage((prev)=>({...prev, 
   bigiron:14,
   lms: 0,
   hms: 27,
   boring:0,}));
   setGrade('GI.250')
 }

  return (
    <div className='grade'>
    <button onClick={()=>onchangGrade1()} className={grade=='400/18'?'active':''}>400/18</button>
    <button onClick={()=>onchangGrade2()} className={grade=='400/15'?'active':''}>400/15</button>
    <button onClick={()=>onchangGrade3()} className={grade=='450/12'?'active':''}>450/12</button>
    <button onClick={()=>onchangGrade4()} className={grade=='500/7'?'active':''}>500/7</button>
    <button onClick={()=>onchangGrade5()} className={grade=='600/3'?'active':''}>600/3</button>
    <button onClick={()=>onchangGrade6()} className={grade=='500/14'?'active':''}>500/14</button>
    <button onClick={()=>onchangGrade7()} className={grade=='GI.250'?'active':''}>GI.250</button>
  </div>
  )
}

export default Grade
