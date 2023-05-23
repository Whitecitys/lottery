import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Mytable from './components/Mytable'
import Myform from './components/Myform'
function App() {
  const [pricenumber1, setPricenumber1] = useState()
  const [pricenumber2, setPricenumber2] = useState([])
  const [price2digit, setPrice2digit] = useState()

  function randomLottery() {
    setPricenumber1(Math.floor(Math.random() * 899) + 100)

    setPricenumber2([])
    for (let i = 0; i < 3; i++) {
      setPricenumber2(prevItems => [...prevItems, Math.floor(Math.random() * 899) + 100])
    }
    let a = Math.floor(Math.random() * 9) + 0;
    let b = Math.floor(Math.random() * 9) + 0;
    setPrice2digit(a + "" + b)
  }

  return (
    <>
      <h1>รางวัลล็อตเตอรี่ Diversition</h1>
      <h2>ผลการออกรางวัลล็อตเตอรี่ Diversition</h2>
      <button className='btn btn-primary m-3' onClick={randomLottery}>ดำเนินการสุ่มรางวัล</button>
      <Mytable datap1={pricenumber1} datap2={pricenumber2} datap2d={price2digit} />

      <p>ตรวจรางวัลล็อตเตอรี่ Diversition</p>
      <Myform datap1={pricenumber1} datap2={pricenumber2} datap2d={price2digit}/>
      
    </>
  )
}

export default App
