import { useState } from 'react'
import './App.css'
import QRCode from 'react-qr-code'

function App() {
  const [input,setInput] = useState('');
  const [qrcode,setQRCode] = useState('');

  function generateQR(){
    console.log("fired!")
    setQRCode(input);
    setInput('');
  }
 

  return (
    <>
      <h2 className='font-sans text-xl text-slate-500'>QR Code Generator</h2>
      <input 
      className='outline-none border w-80 h-11 border-zinc-50 shadow rounded-lg text-slate-400 px-2'
      type="text" onChange={(e) => setInput(e.target.value)} placeholder='Enter your value here'/>
      <button 
      className='w-auto h-11 px-2 shadow text-slate-400 rounded-lg text-xl border'
      onClick={() => generateQR()} disabled={input === "" ? true : false}>Generate</button>
      <QRCode value={qrcode} className='text-center'/>
    </>
  )
}

export default App
