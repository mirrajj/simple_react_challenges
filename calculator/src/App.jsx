import { useState,useEffect } from 'react'
import {FaBackspace} from 'react-icons/fa'
import './App.css'
import Table from './Table';
import History from './History';
import RawMaterialSelect from './RawMaterialSelect';
import SubTotalSelect from './SubTotalSelect';


function App() {
  const [input,setInput] = useState("");
  const [weight,setWeight] = useState([]);
  const [finish,setFinish] = useState(false);
  const [rawMaterial,setRawMaterial] = useState('pineapple');
  const [totalWeight,setTotalWeight] = useState(null);
  const [entries,setEntries] = useState(null);
  const [expectedYield,setExpectedYield] = useState(null);
  const [subTotal,setSubTotal] = useState(5);



  useEffect(() => {
    const addEvent = (e) => {
      if(!finish){
        
        if(!input.includes(".") && (e.target.innerHTML) === "."){
          const val = input !== "" ? (input.concat(e.target.innerHTML)) : (e.target.innerHTML);
          setInput(val);
        }else if(!Number.isInteger(+(e.target.innerHTML))){
          return;
        }
        else{
          const val = input !== "" ? (input.concat(e.target.innerHTML)) : (e.target.innerHTML);
          setInput(val);
        }
    }
    }

    const layouts = document.querySelectorAll('.layout')
    layouts.forEach(element => element.addEventListener('click',addEvent));

    return () => {
      layouts.forEach((element) => element.removeEventListener('click',addEvent));
    };
  },[input,finish])



  
  const addWeight = () => {
    // console.log('in');
    if(input.length){
      weight.push(parseFloat(input));
      setWeight(weight);
      setInput("");
      console.log(weight)
    }else{
      return;
    }
  }


  const calculate = (weight,rawMaterial) => {
  
    const calcWeight = weight.reduce((total, num) => total + num, 0);
    const date = new Date().getDate();
    const history = {
      materialType: rawMaterial,
      date : date,
      materialWeight : totalWeight
    }
    localStorage.setItem("history",[JSON.stringify(history)]);
    setEntries(weight.length);
    setInput("");
    setWeight([]);
    setFinish(false);
    setTotalWeight(calcWeight.toFixed(3));
    CalcExpectedYield(rawMaterial,calcWeight);
  }
  const CalcExpectedYield = (rawMaterial,totalWeight) => {
    switch (rawMaterial) {
      case "pineapple":
        setExpectedYield((0.15 * parseFloat(totalWeight)).toFixed(3))
        break;
      case "coconut":
        setExpectedYield((0.3 * parseFloat(totalWeight)).toFixed(3))
        break;
      case "banana":
        setExpectedYield((0.3 * parseFloat(totalWeight)).toFixed(3))
        break;
      case "mango":
        setExpectedYield((0.35 * parseFloat(totalWeight)).toFixed(3))
        break;
      case "papaya":
        setExpectedYield((0.10 * parseFloat(totalWeight)).toFixed(3))
        break;
    
      default:
        setExpectedYield(0);
        break;
    }
  }
  const deleteInput = () => {
    if(input.length){
      const newInput = input.slice(0,-1);
      setInput(newInput);
    }
  }

  return (
    <div className='flex max-h-screen flex-wrap'>

      <div className='flex flex-col basis-1/2 border shadow-xl'>
        <div className='flex flex-col grow border h-1/4'>
          <input type='' className='grow w-full border-0 outline-none bg-slate-200 text-6xl text-sky-600' value={input} />
          {/* <p className='w-full h-full border-0 outline-none bg-slate-400 text-6xl'>{input}</p> */}
          <div className='flex'>
            <SubTotalSelect setSubTotal = {setSubTotal} />
            <RawMaterialSelect setRawMaterial = {setRawMaterial} />
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='layout flex gap-1 justify-evenly'>
            <button className='text-xl h-20 text-slate-400 border basis-1 rounded grow'>1</button>
            <button className='text-xl h-20 text-slate-400 border basis-1 rounded grow'>2</button>
            <button className='text-xl h-20 text-slate-400 border basis-1 rounded grow'>3</button>
            <button className='text-xl h-20 text-slate-400 border basis-1 rounded grow'>4</button>
          </div>
          <div className='layout flex gap-1 justify-evenly'>
            <button className='text-xl h-20 text-slate-400 border basis-1 rounded grow'>5</button>
            <button className='text-xl h-20 text-slate-400 border basis-1 rounded grow'>6</button>
            <button className='text-xl h-20 text-slate-400 border basis-1 rounded grow'>7</button>
            <button className='text-xl h-20 text-slate-400 border basis-1 rounded grow'>8</button>
          </div>
          <div className='layout flex gap-1 justify-evenly'>
            <button className='text-xl h-20 text-slate-400 border basis-1 rounded grow'>9</button>
            <button className='text-xl h-20 text-slate-400 border basis-1 rounded grow'>0</button>
            <button className='text-xl h-20 text-slate-400 border basis-1 rounded grow'>.</button>
            <button className='text-xl h-20 text-slate-400 border basis-1 rounded grow grid place-content-center' onClick={() => deleteInput()}><FaBackspace/></button>
          </div>
          <div className='flex gap-1 justify-evenly'>
            <button className='text-xl h-20 text-slate-50 border basis-1 rounded grow  bg-blue-700' onClick={() => setFinish(true)}>Finish</button>
            <button className='text-xl h-20 text-slate-50 border basis-1 rounded grow  bg-blue-700' onClick={() => addWeight()}>+</button>
            <button className='text-xl h-20 text-slate-50 border basis-1 rounded grow bg-blue-700' >C</button>
            {/* <button className='text-xl h-20 text-slate-50 border basis-1/4 rounded grow bg-blue-700'>.</button> */}
          </div>

        </div>
      </div>
      <div className='flex flex-wrap basis-1/2 h-screen'>
      <div className='basis-full self-baseline h-4/5 overflow-y-scroll'>
     
          <table className='w-full self-baseline border border-sky-500'>
            <thead>
              <tr className='text-sky-600 font-serif font-bold bg-slate-300'>
                <td className='border border-sky-400'>No.</td>
                <td className='border border-sky-400'>Weight(kg)</td>
                <td className='border border-sky-400'>Current Total(kg)</td>
              </tr>
            </thead>
            <tbody>
              {weight.length &&
                weight.map((item, idx) => {
                  
                  return <Table item={item} key={idx} index={idx} weight = {weight} subTotal = {subTotal} />;
                })
              }
            </tbody>
          </table>
        
      </div>
        <div className='flex self-start basis-full'>
          <div className='border rounded grow basis-1 text-sky-600 font-serif font-bold bg-slate-300'>Total Weight: <span className='text-slate-500'>{totalWeight}</span></div>
          <div className='border rounded grow basis-1 text-sky-600 font-serif font-bold bg-slate-300'>No Crates/Entries : <span className='text-slate-500'>{entries}</span></div>
          <div className='border rounded grow basis-1 text-sky-600 font-serif font-bold bg-slate-300'>Expected Yield : <span className='text-slate-500'>{expectedYield}</span></div>
          <div className='border rounded grow basis-1 text-sky-600 font-serif font-bold bg-slate-300'>Average weight per crate : <span className='text-slate-500'>{parseFloat((totalWeight/entries).toFixed(3)) || null}</span></div>
        </div>
      </div>
      {finish && <div className='flex flex-wrap justify-evenly gap-5 absolute translate-x-1/2 top-1/2 shadow border backdrop-blur-sm py-10 rounded'>
        <p className='basis-full'>Are you sure you want to finish calculating?</p>
        <button className='rounded-full border bg-sky-500 text-white px-3 py-4' onClick={() => {setFinish(false)}}>No, continue</button>
        <button className='rounded-full border bg-lime-500 text-white px-12 py-4' onClick={() => {calculate(weight,rawMaterial)}}>Yes</button>
      </div>}
    </div>
  )
}

export default App
