import React, { useState } from 'react'
import { InputBox } from './Components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)


  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)


  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }



 const convert = ()=>{
  setConvertedAmount(amount * currencyInfo[to]) 
 }


  return (
    <div className='bg-[#74adef] w-full h-screen'>
      <h1 className='bg-[#98e9e9] text-black font-extrabold text-3xl text-center py-3'>Currency Convertor</h1>
      <div className='sm:w-full sm:h-[90vh] md:w-[40vw] md:h-[auto] bg-[#ffffff70] mx-auto my-[10vh] relative'>
        <form  
         onSubmit={(e) => {
          e.preventDefault();
          convert();
                       
           }}            
            >

       
      <InputBox className='my-2 p-8 md:h-[auto]' 
      label ='From'
      amount = {amount}
      currencyOptions={options}
      onCurrencyChange={(currency)=>setAmount(amount)}
      selectCurrency={from}
      onAmountChange={(amount)=> setAmount(amount)}
      />


      <button
        type='button'
       className='text-white bg-blue-400 py-2 px-3 absolute left-1/2
       -translate-x-1/2
       -translate-y-1/2
       rounded-lg'
       onClick={swap}
       >Swap</button>


      <InputBox className='my-2 p-8 md:h-[auto]' 
      label ='To'
      amount = {convertedAmount}
      currencyOptions={options}
      onCurrencyChange={(currency)=> 
      setTo(currency)}

      selectCurrency={to}
      amountDisable
      
      />
      <button
      type='submit' 
      className='bg-[#d2eaaf] w-full py-6 text-2xl text-[#835597]'
      
      >
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
      </form>
      </div>
   
    </div>
  )
}

export default App