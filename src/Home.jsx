import { useState } from 'react'
import reactLogo from './assets/react.svg'

import "./Home.css"


function Home() {
  const [currentStep, setcurrentStep] = useState("X")
  const [Symbol, setSymbol] = useState("X")
  const [cells, setcells] = useState([null,null,null,null,null,null,null,null,null])
  const [win,setwin] = useState("Step: ")
  function handlerClick(index){
    if(cells[index]){
      return
    }
    if(currentStep == "X"){
      setcurrentStep("O")
      setSymbol("O")
    }
    else if(currentStep == "O"){
      setcurrentStep("X")
      setSymbol("X")
    }
    cells[index] = currentStep
    const gamego = winner(cells)
    console.log(cells)
    if(gamego && currentStep == "X"){
      setwin("Winner: ")
      setcurrentStep("X")
      return false
    }
    else if(gamego && currentStep == "O"){
      setwin("Winner: ")
      setcurrentStep("O")
      return false
    }
    else if((cells[0] == "X" || cells[0] == "O") && (cells[1] == "X" || cells[1] == "O") && (cells[2] == "X" || cells[2] == "O") && (cells[3] == "X" || cells[3] == "O") && (cells[4] == "X" || cells[4] == "O") && (cells[5] == "X" || cells[5] == "O") && (cells[6] == "X" || cells[6] == "O") && (cells[7] == "X" || cells[7] == "O") && (cells[8] == "X" || cells[8] == "O" )){
      setwin("Draw")
      setcurrentStep(null)
    }
  
  }
  function winner(cell) {
      const lines = [[0,1,2],[0,3,6],[2,5,8],[6,7,8],[0,4,8],[2,4,6],[3,4,5],[6,7,8],[1,4,7]]
      for(let i = 0;i< lines.length;i++){
        const [a,b,c] = lines[i]
        if(cells[a] && cells [a] === cells[b] && cells[a] === cells[c]){
          return [a, b, c]
        }
        
      }
  }

  return (
    <div className="mainContainer">
      <div className='boxgame'>
        <div className='textgame'>{win} {currentStep}</div>
        <button className='restart' onClick={() => {
          setcells([null,null,null,null,null,null,null,null,null])
          setwin("Step: ")
          setcurrentStep("X")
          }}>Restart</button>
        <div className='XO'>
          {cells.map((Symbol,index) => {
            return <button key={index} onClick={() => handlerClick(index)} className = "block">
              {Symbol}
              </button>
          })

          }
        </div>
      </div>
    </div>
  )
}

export default Home
